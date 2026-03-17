import { PageHero } from '@/components/sections/shared/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Card } from '@/components/ui/card';
import { MetricsBand } from '@/components/sections/shared/metrics-band';
import { TrustGrid } from '@/components/sections/shared/trust-grid';
import { HomeTestimonials } from '@/components/sections/home/home-testimonials';
import { BookingCta } from '@/components/sections/shared/booking-cta';
import { getDictionary } from '@/content/locales';
import { isLocale, type Locale } from '@/lib/locales';
import { notFound } from 'next/navigation';

export default function AboutPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero title={dictionary.about.title} subtitle={dictionary.about.subtitle} />
      <Section>
        <Container>
          <Card>
            <h2 className="font-heading text-4xl text-charcoal dark:text-white">A desert host with a premium eye for detail</h2>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-charcoal/70 dark:text-white/70">
              Erg Chebbi Luxury is built around a simple promise: Merzouga should feel beautiful, calm, and easy from the moment a guest makes contact.
              That means thoughtful planning, elegant pacing, and the warmth of local hospitality without template tourism.
            </p>
          </Card>
        </Container>
      </Section>
      <Section className="pt-0">
        <Container>
          <MetricsBand />
        </Container>
      </Section>
      <Section className="pt-0">
        <Container>
          <TrustGrid />
        </Container>
      </Section>
      <HomeTestimonials />
      <Section>
        <Container>
          <BookingCta locale={locale} />
        </Container>
      </Section>
    </>
  );
}
