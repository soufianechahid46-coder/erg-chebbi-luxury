import type { Locale } from '@/types/locale';
import { getOffersByCategory } from '@/lib/offers';
import { ExperienceCard } from '@/components/sections/shared/experience-card';

export function CampShowcase({ locale }: { locale: Locale }) {
  const items = getOffersByCategory('camp');
  return <div className="grid gap-6 md:grid-cols-2">{items.map((offer) => <ExperienceCard key={offer.slug} offer={offer} locale={locale} />)}</div>;
}
