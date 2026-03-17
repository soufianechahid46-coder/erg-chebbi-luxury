import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { fetchBookings } from '@/lib/supabase/queries/bookings';
import { toCsv } from '@/lib/csv';

export async function GET() {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const bookings = await fetchBookings();
  const csv = toCsv(bookings as unknown as Array<Record<string, unknown>>);

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="bookings.csv"'
    }
  });
}
