import type { JournalArticle } from '@/types/journal';
import type { Locale } from '@/types/locale';
import { Card } from '@/components/ui/card';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';

export function JournalCard({ article, locale }: { article: JournalArticle; locale: Locale }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative h-56">
        <ImageWithFallback src={article.coverImage} alt={article.title[locale]} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="p-6">
        <div className="text-xs uppercase tracking-[0.2em] text-charcoal/55 dark:text-white/55">{article.readTime}</div>
        <h3 className="mt-3 font-heading text-2xl text-charcoal dark:text-white">{article.title[locale]}</h3>
        <p className="mt-3 text-sm leading-7 text-charcoal/70 dark:text-white/70">{article.excerpt[locale]}</p>
      </div>
    </Card>
  );
}
