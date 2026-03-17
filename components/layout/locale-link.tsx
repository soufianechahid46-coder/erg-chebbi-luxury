import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Locale } from '@/types/locale';

type LocaleLinkProps = {
  locale: Locale;
  href: string;
  children: ReactNode;
  className?: string;
};

export function LocaleLink({ locale, href, children, className }: LocaleLinkProps) {
  const path = href === '/' ? `/${locale}` : `/${locale}${href}`;
  return (
    <Link href={path} className={className}>
      {children}
    </Link>
  );
}
