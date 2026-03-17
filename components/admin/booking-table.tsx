import { BookingStatusForm } from '@/components/admin/booking-status-form';
import { StatusPill } from '@/components/admin/status-pill';

export function BookingTable({ rows }: { rows: Array<Record<string, unknown>> }) {
  if (!rows.length) {
    return <div className="rounded-[28px] border border-[#e8dcc4] bg-white p-8 text-sm text-charcoal/60">No bookings yet.</div>;
  }

  return (
    <div className="overflow-hidden rounded-[28px] border border-[#e8dcc4] bg-white shadow-soft">
      <div className="overflow-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#fbf8f1] text-charcoal/55">
            <tr>
              <th className="px-5 py-4 font-medium">Guest</th>
              <th className="px-5 py-4 font-medium">Experience</th>
              <th className="px-5 py-4 font-medium">Total</th>
              <th className="px-5 py-4 font-medium">Status</th>
              <th className="px-5 py-4 font-medium">Manage</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={String(row.id)} className="border-t border-[#f1e7d2]">
                <td className="px-5 py-4">
                  <div className="font-medium text-charcoal">{String(row.full_name ?? '')}</div>
                  <div className="text-xs text-charcoal/50">{String(row.email ?? '')}</div>
                </td>
                <td className="px-5 py-4">{String(row.experience_slug ?? '')}</td>
                <td className="px-5 py-4">€{Number(row.estimated_total ?? 0)}</td>
                <td className="px-5 py-4"><StatusPill value={String(row.booking_status ?? 'pending')} /></td>
                <td className="px-5 py-4"><BookingStatusForm id={String(row.id)} currentStatus={String(row.booking_status ?? 'pending')} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
