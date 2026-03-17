import { notFound } from 'next/navigation';
import { PageHero } from '@/components/sections/shared/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { GalleryGrid } from '@/components/sections/shared/gallery-grid';
import { HighlightsList } from '@/components/sections/shared/highlights-list';
import { BookingCta } from '@/components/sections/shared/booking-cta';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Price } from '@/components/ui/price';
import { Button } from '@/components/ui/button';
import { getOfferBySlug, getOffers } from '@/lib/offers';
import { isLocale, type Locale } from '@/lib/locales';

export function generateStaticParams() {
  return getOffers().flatMap((offer) => ['en', 'fr', 'es', 'ar'].map((locale) => ({ locale, slug: offer.slug })));
}

export default function ExperienceDetailPage({ params }: { params: { locale: string; slug: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const offer = getOfferBySlug(params.slug);

  if (!offer) notFound();

  return (
    <>
      <PageHero eyebrow={offer.location} title={offer.title[locale]} subtitle={offer.description[locale]} />
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <GalleryGrid items={offer.gallery.map((src) => ({ src, alt: offer.title[locale] }))} />
            <Card>
              <Badge>{offer.duration[locale]}</Badge>
              <h2 className="mt-5 font-heading text-4xl text-charcoal dark:text-white">{offer.subtitle[locale]}</h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/70 dark:text-white/70">{offer.audience[locale]}</p>
              <div className="mt-6">
                <HighlightsList items={offer.includes[locale]} />
              </div>
              <div className="mt-8 flex items-center justify-between gap-4">
                <Price amount={offer.fromPrice} />
                <Button href={`/${locale}/booking?experience=${offer.slug}`}>Book this experience</Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <BookingCta locale={locale} />
        </Container>
      </Section>
    </>
  );
}
