import { Input } from '@/components/ui/input';

type BookingDatePickerProps = {
  label: string;
  value: string;
  min?: string;
  onChange: (value: string) => void;
};

export function BookingDatePicker({ label, value, min, onChange }: BookingDatePickerProps) {
  return (
    <label className="grid gap-2">
      <span className="text-xs uppercase tracking-[0.2em] text-charcoal/55 dark:text-white/55">{label}</span>
      <Input type="date" min={min} value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}
