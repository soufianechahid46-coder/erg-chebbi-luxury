export function StatusPill({ value }: { value: string }) {
  const tone =
    value === 'confirmed'
      ? 'bg-emerald-100 text-emerald-800'
      : value === 'paid'
        ? 'bg-blue-100 text-blue-800'
        : value === 'cancelled'
          ? 'bg-rose-100 text-rose-800'
          : 'bg-amber-100 text-amber-800';

  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${tone}`}>{value}</span>;
}
