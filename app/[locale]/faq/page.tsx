import { PageHero } from '@/components/sections/shared/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { FaqAccordion } from '@/components/sections/shared/faq-accordion';
import faqs from '@/content/site/faq';
import { getDictionary } from '@/content/locales';
import { faqJsonLd } from '@/lib/jsonld';
import { isLocale, type Locale } from '@/lib/locales';
import { notFound } from 'next/navigation';

export default function FaqPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <PageHero title={dictionary.faq.title} subtitle={dictionary.faq.subtitle} />
      <Section>
        <Container>
          <FaqAccordion items={faqs} />
        </Container>
      </Section>
    </>
  );
}
