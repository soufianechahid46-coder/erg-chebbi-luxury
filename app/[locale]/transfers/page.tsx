import { PageHero } from '@/components/sections/shared/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { TransfersShowcase } from '@/components/sections/experience/transfers-showcase';
import { ContactPanel } from '@/components/sections/shared/contact-panel';
import { getDictionary } from '@/content/locales';
import { isLocale, type Locale } from '@/lib/locales';
import { notFound } from 'next/navigation';

export default function TransfersPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero title={dictionary.transfers.title} subtitle={dictionary.transfers.subtitle} />
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <TransfersShowcase locale={locale} />
            <ContactPanel />
          </div>
        </Container>
      </Section>
    </>
  );
}
