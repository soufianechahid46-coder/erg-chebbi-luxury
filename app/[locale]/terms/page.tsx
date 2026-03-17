import { PageHero } from '@/components/sections/shared/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Card } from '@/components/ui/card';
import { getDictionary } from '@/content/locales';
import { isLocale, type Locale } from '@/lib/locales';
import { notFound } from 'next/navigation';

export default function TermsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero title={dictionary.legal.termsTitle} subtitle="Details are confirmed manually after each request. Final payment timing, private routing, and add-ons are reconfirmed before arrival." />
      <Section>
        <Container>
          <Card>
            <p className="text-sm leading-8 text-charcoal/70 dark:text-white/70">
              Rates shown on the website are estimated starting prices. Final availability, weather conditions, vehicle requirements, and special setups may affect confirmation.
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}
