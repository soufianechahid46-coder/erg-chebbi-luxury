import { Card } from '@/components/ui/card';
import { Price } from '@/components/ui/price';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import type { ExperienceOffer } from '@/types/offer';
import type { Locale } from '@/types/locale';

export function ExperienceCard({ offer, locale }: { offer: ExperienceOffer; locale: Locale }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative h-72">
        <ImageWithFallback src={offer.coverImage} alt={offer.title[locale]} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="p-6">
        <div className="text-xs uppercase tracking-[0.24em] text-charcoal/55 dark:text-white/55">{offer.duration[locale]}</div>
        <h3 className="mt-3 font-heading text-3xl text-charcoal dark:text-white">{offer.title[locale]}</h3>
        <p className="mt-2 text-sm leading-7 text-charcoal/70 dark:text-white/70">{offer.subtitle[locale]}</p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <Price amount={offer.fromPrice} />
          <Button href={`/${locale}/booking?experience=${offer.slug}`}>Book</Button>
        </div>
      </div>
    </Card>
  );
}
