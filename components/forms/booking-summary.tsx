import type { BookingPayload } from '@/types/booking';
import type { ExperienceOffer } from '@/types/offer';
import type { Locale } from '@/types/locale';
import { Card } from '@/components/ui/card';
import { formatMoney } from '@/lib/money';
import { nightsBetween } from '@/lib/date';

type BookingSummaryProps = {
  payload: BookingPayload;
  offer?: ExperienceOffer;
  locale: Locale;
};

export function BookingSummary({ payload, offer, locale }: BookingSummaryProps) {
  const nights = nightsBetween(payload.checkIn, payload.checkOut);

  return (
    <Card>
      <div className="text-xs uppercase tracking-[0.2em] text-charcoal/55 dark:text-white/55">Summary</div>
      <h3 className="mt-3 font-heading text-3xl text-charcoal dark:text-white">{offer ? offer.title[locale] : 'Select an experience'}</h3>
      <div className="mt-5 space-y-3 text-sm text-charcoal/70 dark:text-white/70">
        <div>Guests: {payload.adults} adults · {payload.children} children</div>
        {payload.preferredDate ? <div>Preferred date: {payload.preferredDate}</div> : null}
        {payload.checkIn ? <div>Check-in: {payload.checkIn}</div> : null}
        {payload.checkOut ? <div>Check-out: {payload.checkOut}</div> : null}
        {nights > 0 ? <div>Nights: {nights}</div> : null}
        <div>Payment method: {payload.paymentMethod}</div>
      </div>
      <div className="mt-6 rounded-2xl bg-gold/10 px-4 py-3 text-sm text-charcoal dark:text-white">
        Estimated total: <strong>{formatMoney(payload.estimatedTotal)}</strong>
      </div>
    </Card>
  );
}
