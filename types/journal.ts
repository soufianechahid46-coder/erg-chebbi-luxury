import type { Locale } from '@/types/locale';

export type JournalArticle = {
  slug: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  readTime: string;
  coverImage: string;
};
