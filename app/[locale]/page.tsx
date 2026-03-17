import { HomeHero } from '@/components/sections/home/home-hero';
import { HomeTrustStrip } from '@/components/sections/home/home-trust-strip';
import { HomeExperienceGrid } from '@/components/sections/home/home-experience-grid';
import { HomeSignatureStay } from '@/components/sections/home/home-signature-stay';
import { HomePrivateJourneys } from '@/components/sections/home/home-private-journeys';
import { HomeTestimonials } from '@/components/sections/home/home-testimonials';
import { HomeGalleryPreview } from '@/components/sections/home/home-gallery-preview';
import { HomeFaqPreview } from '@/components/sections/home/home-faq-preview';
import { HomeCtaBand } from '@/components/sections/home/home-cta-band';
import { HomeJournalPreview } from '@/components/sections/home/home-journal-preview';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { TrustGrid } from '@/components/sections/shared/trust-grid';
import { MetricsBand } from '@/components/sections/shared/metrics-band';
import { getDictionary } from '@/content/locales';
import { faqJsonLd, organizationJsonLd } from '@/lib/jsonld';
import faqs from '@/content/site/faq';
import { isLocale, type Locale } from '@/lib/locales';
import { notFound } from 'next/navigation';

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <Section className="pb-0 pt-6">
        <Container>
          <HomeHero
            locale={locale}
            eyebrow={dictionary.home.eyebrow}
            title={dictionary.home.title}
            subtitle={dictionary.home.subtitle}
            ctaPrimary={dictionary.home.ctaPrimary}
            ctaSecondary={dictionary.home.ctaSecondary}
          />
        </Container>
      </Section>
      <HomeTrustStrip />
      <Section>
        <Container>
          <SectionHeading eyebrow="Why choose us" title="Luxury, warmth, and real Merzouga knowledge" description="Designed for international guests who want trusted local hosting, premium comfort, and emotionally memorable desert moments." />
          <TrustGrid />
        </Container>
      </Section>
      <Section className="pt-0">
        <Container>
          <MetricsBand />
        </Container>
      </Section>
      <HomeExperienceGrid locale={locale} />
      <HomeSignatureStay locale={locale} />
      <HomePrivateJourneys />
      <HomeGalleryPreview />
      <HomeTestimonials />
      <HomeFaqPreview />
      <HomeJournalPreview locale={locale} />
      <HomeCtaBand locale={locale} />
    </>
  );
}
