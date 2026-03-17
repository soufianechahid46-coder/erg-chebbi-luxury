import { NextResponse } from 'next/server';
import { bookingSchema } from '@/lib/validation';
import { normalizeBookingPayload } from '@/lib/booking';
import { insertBooking } from '@/lib/supabase/queries/bookings';
import { sendBookingEmails } from '@/lib/email/send';
import { logActivity } from '@/lib/activity';
import { mapBookingRow } from '@/lib/supabase/mappers';

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = bookingSchema.safeParse({
      ...json,
      adults: Number(json.adults),
      children: Number(json.children),
      estimatedTotal: Number(json.estimatedTotal),
      addons: Array.isArray(json.addons) ? json.addons : []
    });

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid booking payload', issues: parsed.error.flatten() }, { status: 400 });
    }

    const payload = normalizeBookingPayload(parsed.data);
    const result = await insertBooking({
      full_name: payload.fullName,
      email: payload.email,
      phone: payload.phone,
      country: payload.country,
      preferred_language: payload.preferredLanguage,
      experience_slug: payload.experienceSlug,
      preferred_date: payload.preferredDate || null,
      check_in: payload.checkIn || null,
      check_out: payload.checkOut || null,
      adults: payload.adults,
      children: payload.children,
      addons: payload.addons,
      special_requests: payload.specialRequests || null,
      payment_method: payload.paymentMethod,
      estimated_total: payload.estimatedTotal,
      booking_status: 'pending',
      payment_status: 'unpaid',
      source: 'website'
    });

    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }

    const booking = result.data ? mapBookingRow(result.data as unknown as Record<string, unknown>) : {
      id: 'local-only',
      ...payload,
      bookingStatus: 'pending',
      paymentStatus: 'unpaid',
      createdAt: new Date().toISOString(),
      source: 'website'
    };

    try {
      await sendBookingEmails(booking as never);
    } catch {}

    await logActivity('booking', `New booking from ${payload.fullName} for ${payload.experienceSlug}`);

    return NextResponse.json({ success: true, bookingId: booking.id });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Booking failed' }, { status: 500 });
  }
}
