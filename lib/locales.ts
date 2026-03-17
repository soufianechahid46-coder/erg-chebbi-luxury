import { locales, type Locale } from '@/types/locale';

export { locales, type Locale };

export const defaultLocale: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function resolveLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function localeDirection(locale: Locale) {
  return locale === 'ar' ? 'rtl' : 'ltr';
}
