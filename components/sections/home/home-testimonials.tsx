import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/ui/section-heading';
import testimonials from '@/content/site/testimonials';
import { TestimonialCard } from '@/components/sections/shared/testimonial-card';

export function HomeTestimonials() {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow="Guest impressions" title="Trust built through hospitality" description="The best stays feel effortless. Guests remember the calm, the warmth, and the details." />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.guest} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
