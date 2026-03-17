import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { ExperienceCard } from '@/components/sections/shared/experience-card';
import { getFeaturedOffers } from '@/lib/offers';
import type { Locale } from '@/types/locale';

export function HomeExperienceGrid({ locale }: { locale: Locale }) {
  const offers = getFeaturedOffers().slice(0, 6);

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Signature collection"
          title="The experiences guests book first"
          description="A curated selection of desert stays and adventures with premium pacing, private options, and warm Merzouga hosting."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer) => (
            <ExperienceCard key={offer.slug} offer={offer} locale={locale} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
