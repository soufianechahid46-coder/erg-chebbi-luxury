'use client';

type CounterInputProps = {
  label: string;
  value: number;
  min?: number;
  onChange: (next: number) => void;
};

export function CounterInput({ label, value, min = 0, onChange }: CounterInputProps) {
  return (
    <div className="rounded-2xl border border-border bg-white/80 p-3 dark:bg-white/5">
      <div className="text-xs uppercase tracking-[0.2em] text-charcoal/60 dark:text-white/60">{label}</div>
      <div className="mt-3 flex items-center justify-between">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} className="rounded-full border border-border px-3 py-1">
          −
        </button>
        <span className="text-lg font-medium">{value}</span>
        <button type="button" onClick={() => onChange(value + 1)} className="rounded-full border border-border px-3 py-1">
          +
        </button>
      </div>
    </div>
  );
}
