import { PageHero } from '@/components/sections/shared/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Card } from '@/components/ui/card';
import { getDictionary } from '@/content/locales';
import { isLocale, type Locale } from '@/lib/locales';
import { notFound } from 'next/navigation';

export default function BookingPolicyPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero title={dictionary.legal.bookingPolicyTitle} subtitle="Booking requests remain pending until our team confirms availability, pricing details, and the final guest count." />
      <Section>
        <Container>
          <Card>
            <p className="text-sm leading-8 text-charcoal/70 dark:text-white/70">
              Camp stays require check-in and check-out details. Private arrangements may require follow-up confirmation. You will always receive a human response before final commitment.
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}
