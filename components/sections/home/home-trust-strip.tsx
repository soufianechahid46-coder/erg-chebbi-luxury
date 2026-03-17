import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Marquee } from '@/components/ui/marquee';

export function HomeTrustStrip() {
  return (
    <Section className="py-8">
      <Container>
        <Marquee>Luxury camp comfort · Camel trekking · Quad adventures · Private 4x4 tours · Tailored desert escapes</Marquee>
      </Container>
    </Section>
  );
}
