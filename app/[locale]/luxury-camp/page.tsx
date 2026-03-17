import { PageHero } from '@/components/sections/shared/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { CampShowcase } from '@/components/sections/experience/camp-showcase';
import { TrustGrid } from '@/components/sections/shared/trust-grid';
import { BookingCta } from '@/components/sections/shared/booking-cta';
import { getDictionary } from '@/content/locales';
import { isLocale, type Locale } from '@/lib/locales';
import { notFound } from 'next/navigation';

export default function LuxuryCampPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero title={dictionary.luxuryCamp.title} subtitle={dictionary.luxuryCamp.subtitle} />
      <Section>
        <Container>
          <CampShowcase locale={locale} />
        </Container>
      </Section>
      <Section className="pt-0">
        <Container>
          <TrustGrid />
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
