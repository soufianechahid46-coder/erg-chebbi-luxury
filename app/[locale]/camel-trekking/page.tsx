import { PageHero } from '@/components/sections/shared/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { CamelShowcase } from '@/components/sections/experience/camel-showcase';
import { Timeline } from '@/components/sections/shared/timeline';
import { BookingCta } from '@/components/sections/shared/booking-cta';
import { getDictionary } from '@/content/locales';
import { Card } from '@/components/ui/card';
import { isLocale, type Locale } from '@/lib/locales';
import { notFound } from 'next/navigation';

export default function CamelPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero title={dictionary.camelTrekking.title} subtitle={dictionary.camelTrekking.subtitle} />
      <Section>
        <Container>
          <CamelShowcase locale={locale} />
        </Container>
      </Section>
      <Section className="pt-0">
        <Container>
          <Card>
            <h3 className="font-heading text-3xl text-charcoal dark:text-white">How the experience flows</h3>
            <div className="mt-6">
              <Timeline steps={['Meet your guide in Merzouga', 'Ride into the dunes at your chosen time', 'Pause for views and photographs', 'Return with tea or continue into camp depending on your package']} />
            </div>
          </Card>
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
