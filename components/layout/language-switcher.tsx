'use client';

import { usePathname } from 'next/navigation';
import { GlobeIcon } from '@/components/icons';
import { locales, type Locale } from '@/lib/locales';

const labels: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  es: 'ES',
  ar: 'AR'
};

export function LanguageSwitcher() {
  const pathname = usePathname();

  function hrefFor(locale: Locale) {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length && locales.includes(segments[0] as Locale)) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }
    return `/${segments.join('/')}`;
  }

  return (
    <div className="hidden items-center gap-2 md:flex">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/70 text-charcoal dark:bg-white/5 dark:text-white">
        <GlobeIcon className="h-5 w-5" />
      </span>
      <div className="flex rounded-full border border-border bg-white/70 p-1 dark:bg-white/5">
        {locales.map((locale) => (
          <a key={locale} href={hrefFor(locale)} className="rounded-full px-3 py-2 text-xs font-medium text-charcoal/70 transition hover:bg-charcoal/5 dark:text-white/70 dark:hover:bg-white/10">
            {labels[locale]}
          </a>
        ))}
      </div>
    </div>
  );
}
