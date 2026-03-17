'use client';

import { CounterInput } from '@/components/ui/counter-input';

type BookingGuestSelectorProps = {
  adults: number;
  children: number;
  onAdults: (value: number) => void;
  onChildren: (value: number) => void;
};

export function BookingGuestSelector({ adults, children, onAdults, onChildren }: BookingGuestSelectorProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <CounterInput label="Adults" value={adults} min={1} onChange={onAdults} />
      <CounterInput label="Children" value={children} min={0} onChange={onChildren} />
    </div>
  );
}
