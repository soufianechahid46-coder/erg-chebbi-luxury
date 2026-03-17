import { PageHero } from '@/components/sections/shared/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { FourByFourShowcase } from '@/components/sections/experience/four-by-four-showcase';
import { BookingCta } from '@/components/sections/shared/booking-cta';
import { MetricsBand } from '@/components/sections/shared/metrics-band';
import { getDictionary } from '@/content/locales';
import { isLocale, type Locale } from '@/lib/locales';
import { notFound } from 'next/navigation';

export default function FourByFourPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero title={dictionary.fourByFourTours.title} subtitle={dictionary.fourByFourTours.subtitle} />
      <Section>
        <Container>
          <FourByFourShowcase locale={locale} />
        </Container>
      </Section>
      <Section className="pt-0">
        <Container>
          <MetricsBand />
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
