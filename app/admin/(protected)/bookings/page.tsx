import { BookingTable } from '@/components/admin/booking-table';
import { CsvExportButton } from '@/components/admin/csv-export-button';
import { fetchBookings } from '@/lib/supabase/queries/bookings';

export default async function AdminBookingsPage() {
  const bookings = await fetchBookings();

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-4xl text-charcoal">Bookings</h2>
          <p className="mt-2 text-sm text-charcoal/60">Manage booking requests, review values, and update statuses.</p>
        </div>
        <CsvExportButton href="/api/admin/bookings/export" label="Export CSV" />
      </div>
      <BookingTable rows={bookings as never} />
    </div>
  );
}
