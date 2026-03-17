import type { AdminMetric } from '@/types/admin';

export function AdminStatCard({ metric }: { metric: AdminMetric }) {
  return (
    <div className="rounded-[28px] border border-[#e8dcc4] bg-white p-6 shadow-soft">
      <div className="text-xs uppercase tracking-[0.22em] text-charcoal/50">{metric.label}</div>
      <div className="mt-4 font-heading text-4xl text-charcoal">{metric.value}</div>
      {metric.hint ? <div className="mt-3 text-sm text-charcoal/60">{metric.hint}</div> : null}
    </div>
  );
}
