import { PageHero } from '@/components/sections/shared/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { ExperienceCard } from '@/components/sections/shared/experience-card';
import { BookingCta } from '@/components/sections/shared/booking-cta';
import { getDictionary } from '@/content/locales';
import { getOffers } from '@/lib/offers';
import { isLocale, type Locale } from '@/lib/locales';
import { notFound } from 'next/navigation';

export default function ExperiencesPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);
  const offers = getOffers();

  return (
    <>
      <PageHero title={dictionary.experiences.title} subtitle={dictionary.experiences.subtitle} />
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {offers.map((offer) => (
              <ExperienceCard key={offer.slug} offer={offer} locale={locale} />
            ))}
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
