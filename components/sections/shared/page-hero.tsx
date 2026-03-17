import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Badge } from '@/components/ui/badge';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
};

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <Section className="pb-10 pt-12">
      <Container>
        <div className="rounded-[36px] border border-border bg-dune p-10 shadow-soft dark:bg-night">
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}
          <h1 className="mt-5 max-w-4xl font-heading text-5xl text-charcoal dark:text-white sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-charcoal/70 dark:text-white/70">{subtitle}</p>
        </div>
      </Container>
    </Section>
  );
}
