import { PageHero } from '@/components/sections/shared/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { QuadShowcase } from '@/components/sections/experience/quad-showcase';
import { Card } from '@/components/ui/card';
import { HighlightsList } from '@/components/sections/shared/highlights-list';
import { BookingCta } from '@/components/sections/shared/booking-cta';
import { getDictionary } from '@/content/locales';
import { isLocale, type Locale } from '@/lib/locales';
import { notFound } from 'next/navigation';

export default function QuadPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero title={dictionary.quadAtv.title} subtitle={dictionary.quadAtv.subtitle} />
      <Section>
        <Container>
          <QuadShowcase locale={locale} />
        </Container>
      </Section>
      <Section className="pt-0">
        <Container>
          <Card>
            <h3 className="font-heading text-3xl text-charcoal dark:text-white">Before you ride</h3>
            <div className="mt-6">
              <HighlightsList items={['Briefing and route adaptation for comfort level', 'Protective helmet and goggles provided', 'Private pacing available on request']} />
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
