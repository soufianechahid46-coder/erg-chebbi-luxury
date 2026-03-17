import type { Locale } from '@/types/locale';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/ui/section-heading';
import articles from '@/content/site/journal';
import { JournalCard } from '@/components/sections/blog/journal-card';

export function HomeJournalPreview({ locale }: { locale: Locale }) {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow="Travel notes" title="Plan more beautifully" description="A few thoughtful guides for packing, timing, and choosing your Merzouga experience." />
        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <JournalCard key={article.slug} article={article} locale={locale} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
