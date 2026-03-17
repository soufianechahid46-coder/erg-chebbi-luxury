import { PageHero } from '@/components/sections/shared/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { BookingForm } from '@/components/forms/booking-form';
import { getDictionary } from '@/content/locales';
import { isLocale, type Locale } from '@/lib/locales';
import { notFound } from 'next/navigation';

type BookingPageProps = {
  params: { locale: string };
  searchParams?: { experience?: string };
};

export default function BookingPage({ params, searchParams }: BookingPageProps) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero title={dictionary.booking.title} subtitle={dictionary.booking.subtitle} />
      <Section>
        <Container>
          <BookingForm locale={locale} initialExperience={searchParams?.experience} />
        </Container>
      </Section>
    </>
  );
}
