export function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#e8dcc4] bg-white p-4">
      <div className="text-xs uppercase tracking-[0.18em] text-charcoal/50">{label}</div>
      <div className="mt-2 text-2xl font-semibold text-charcoal">{value}</div>
    </div>
  );
}
