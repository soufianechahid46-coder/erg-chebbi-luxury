import { PageHero } from '@/components/sections/shared/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Card } from '@/components/ui/card';
import { getDictionary } from '@/content/locales';
import { isLocale, type Locale } from '@/lib/locales';
import { notFound } from 'next/navigation';

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero title={dictionary.legal.privacyTitle} subtitle="We collect only the information needed to respond to enquiries, confirm bookings, and provide a smooth guest experience." />
      <Section>
        <Container>
          <Card>
            <p className="text-sm leading-8 text-charcoal/70 dark:text-white/70">
              Booking and contact details are used only for planning, confirmation, and communication related to your requested experience.
              Analytics events store lightweight session and page activity to improve the site and the booking journey.
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}
