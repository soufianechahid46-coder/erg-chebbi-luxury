import type { RecentActivityItem } from '@/types/admin';

export function RecentActivityList({ items }: { items: RecentActivityItem[] }) {
  return (
    <div className="rounded-[28px] border border-[#e8dcc4] bg-white p-6 shadow-soft">
      <h3 className="font-heading text-3xl text-charcoal">Recent activity</h3>
      <div className="mt-6 space-y-4">
        {items.length ? items.map((item) => (
          <div key={item.id} className="rounded-2xl border border-[#f1e7d2] bg-[#fbf8f1] p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-charcoal/45">{item.type}</div>
            <div className="mt-2 text-sm text-charcoal/80">{item.message}</div>
            <div className="mt-2 text-xs text-charcoal/45">{new Date(item.created_at).toLocaleString()}</div>
          </div>
        )) : <div className="text-sm text-charcoal/60">No activity yet.</div>}
      </div>
    </div>
  );
}
