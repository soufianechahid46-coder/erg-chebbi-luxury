import { Card } from '@/components/ui/card';

export function BookingSuccess() {
  return (
    <Card className="border-gold/30 bg-gold/10">
      <h3 className="font-heading text-3xl text-charcoal dark:text-white">Thank you</h3>
      <p className="mt-3 text-sm leading-7 text-charcoal/75 dark:text-white/75">
        Your request has been sent successfully. Our team will review availability and contact you shortly with confirmation details.
      </p>
    </Card>
  );
}
