import en from './en';
import fr from './fr';
import es from './es';
import ar from './ar';
import type { Locale } from '@/types/locale';

export const dictionaries = { en, fr, es, ar };

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.en;
}
