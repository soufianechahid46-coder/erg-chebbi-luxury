import type { ReactNode } from 'react';

export function ChartCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[28px] border border-[#e8dcc4] bg-white p-6 shadow-soft">
      <h3 className="font-heading text-3xl text-charcoal">{title}</h3>
      <div className="mt-6">{children}</div>
    </div>
  );
}
