import Link from 'next/link';
import type { Locale } from '@/types/locale';

export function Logo({ locale = 'en', dark = false }: { locale?: Locale; dark?: boolean }) {
  const href = `/${locale}`;
  return (
    <Link href={href} className="inline-flex items-center gap-3">
      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full border ${dark ? 'border-white/15 bg-white/10 text-gold' : 'border-gold/20 bg-gold/10 text-gold'}`}>
        <svg viewBox="0 0 48 48" className="h-7 w-7" aria-hidden="true">
          <path d="M7 33c8-3 14-4 19-3 5 1 10 4 15 4 4 0 8-1 12-4-4 6-10 10-18 12H7v-9Z" fill="currentColor" />
          <path d="M14 25c4-6 8-10 12-13 4 3 8 7 12 13-3-1-5-2-8-2-1 0-3 .4-4 1-1-.6-3-1-4-1-3 0-5 .7-8 2Z" fill="currentColor" opacity=".45" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-heading text-2xl ${dark ? 'text-white' : 'text-charcoal dark:text-white'}`}>Erg Chebbi</span>
        <span className={`text-[10px] uppercase tracking-[0.32em] ${dark ? 'text-white/65' : 'text-charcoal/60 dark:text-white/60'}`}>Luxury</span>
      </span>
    </Link>
  );
}
