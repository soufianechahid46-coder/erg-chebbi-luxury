export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-border bg-white/70 p-5 text-center dark:bg-white/5">
      <div className="font-heading text-3xl text-charcoal dark:text-white">{value}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.22em] text-charcoal/60 dark:text-white/60">{label}</div>
    </div>
  );
}
