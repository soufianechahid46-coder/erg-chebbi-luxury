import type { PaymentMethod } from '@/types/booking';
import { paymentMethods } from '@/content/site/payment';
import { RadioCard } from '@/components/ui/radio-card';

type BookingPaymentOptionsProps = {
  value: PaymentMethod;
  onChange: (value: PaymentMethod) => void;
};

export function BookingPaymentOptions({ value, onChange }: BookingPaymentOptionsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {paymentMethods.map((method) => (
        <RadioCard
          key={method.value}
          checked={value === method.value}
          onClick={() => onChange(method.value)}
          title={method.title}
          description={method.description}
        />
      ))}
    </div>
  );
}
