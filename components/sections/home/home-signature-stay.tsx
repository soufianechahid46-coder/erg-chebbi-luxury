import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { Button } from '@/components/ui/button';
import type { Locale } from '@/types/locale';
import { getOfferBySlug } from '@/lib/offers';

export function HomeSignatureStay({ locale }: { locale: Locale }) {
  const offer = getOfferBySlug('luxury-camp-2-nights');
  if (!offer) return null;

  return (
    <Section>
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-border shadow-soft">
            <ImageWithFallback src={offer.coverImage} alt={offer.title[locale]} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <Card className="flex flex-col justify-center">
            <SectionHeading eyebrow="Featured stay" title={offer.title[locale]} description={offer.description[locale]} />
            <ul className="space-y-3 text-sm leading-7 text-charcoal/70 dark:text-white/70">
              {offer.includes[locale].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={`/${locale}/booking?experience=${offer.slug}`}>Reserve this stay</Button>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
