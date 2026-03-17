import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { updateBookingStatus } from '@/lib/supabase/queries/bookings';
import { insertActivity } from '@/lib/supabase/queries/activity';
import { createServiceClient } from '@/lib/supabase/service';

export async function POST(request: Request, { params }: { params: { id: string } }) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const status = String(body.status || 'pending');

  const result = await updateBookingStatus(params.id, status);

  if (result.error) {
    return NextResponse.json({ error: result.error.message }, { status: 500 });
  }

  const client = createServiceClient();
  if (client) {
    await client.from('booking_status_history').insert({
      booking_id: params.id,
      status,
      note: 'Updated in admin dashboard'
    });
  }

  await insertActivity({ type: 'booking', message: `Booking ${params.id} changed to ${status}` });

  return NextResponse.json({ success: true });
}
