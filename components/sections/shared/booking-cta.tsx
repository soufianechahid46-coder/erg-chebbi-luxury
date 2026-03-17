import type { Locale } from '@/types/locale';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function BookingCta({ locale }: { locale: Locale }) {
  return (
    <Card className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
      <div>
        <div className="text-xs uppercase tracking-[0.22em] text-charcoal/55 dark:text-white/55">Plan your journey</div>
        <h3 className="mt-3 font-heading text-3xl text-charcoal dark:text-white">Ready to shape your desert stay?</h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-charcoal/70 dark:text-white/70">
          Choose your dates, preferred experience, and guest details. We confirm availability with a warm, personal response.
        </p>
      </div>
      <Button href={`/${locale}/booking`}>Book now</Button>
    </Card>
  );
}
