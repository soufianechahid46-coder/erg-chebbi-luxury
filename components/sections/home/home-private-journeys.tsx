import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { FeatureCard } from '@/components/sections/shared/feature-card';
import { CamelIcon, QuadIcon, Vehicle4x4Icon } from '@/components/icons';

export function HomePrivateJourneys() {
  return (
    <Section>
      <Container>
        <div className="grid gap-5 md:grid-cols-3">
          <FeatureCard icon={<CamelIcon className="h-6 w-6" />} title="Camel moments" description="Sunrise and sunset crossings with a refined, photo-friendly rhythm." />
          <FeatureCard icon={<QuadIcon className="h-6 w-6" />} title="Adventure energy" description="Premium quad routes for guests who want pace, dunes, and excitement." />
          <FeatureCard icon={<Vehicle4x4Icon className="h-6 w-6" />} title="Private exploration" description="Comfort-first 4x4 and custom circuits beyond the main dune edge." />
        </div>
      </Container>
    </Section>
  );
}
