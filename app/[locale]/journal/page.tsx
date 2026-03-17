import { PageHero } from '@/components/sections/shared/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import articles from '@/content/site/journal';
import { JournalCard } from '@/components/sections/blog/journal-card';
import { getDictionary } from '@/content/locales';
import { isLocale, type Locale } from '@/lib/locales';
import { notFound } from 'next/navigation';

export default function JournalPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero title={dictionary.journal.title} subtitle={dictionary.journal.subtitle} />
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <JournalCard key={article.slug} article={article} locale={locale} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
