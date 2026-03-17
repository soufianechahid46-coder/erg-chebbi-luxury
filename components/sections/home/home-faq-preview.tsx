import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { FaqAccordion } from '@/components/sections/shared/faq-accordion';
import faqs from '@/content/site/faq';

export function HomeFaqPreview() {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow="Plan with clarity" title="Before you arrive" description="A few helpful answers about transfers, activities, camp comfort, and confirmations." />
        <FaqAccordion items={faqs.slice(0, 4)} />
      </Container>
    </Section>
  );
}
