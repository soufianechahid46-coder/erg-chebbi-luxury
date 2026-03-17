'use client';

import { useState } from 'react';
import type { NavLink } from '@/types/navigation';
import type { Locale } from '@/types/locale';
import { LocaleLink } from '@/components/layout/locale-link';
import { Button } from '@/components/ui/button';

type MobileMenuProps = {
  locale: Locale;
  labels: Record<string, string>;
  nav: NavLink[];
};

export function MobileMenu({ locale, labels, nav }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/70 dark:bg-white/5"
        aria-label="Toggle mobile menu"
      >
        <span className="space-y-1">
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
        </span>
      </button>

      {open ? (
        <div className="absolute left-4 right-4 top-24 z-40 rounded-[28px] border border-border bg-white/95 p-5 shadow-soft backdrop-blur dark:bg-[#111319]/95">
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <LocaleLink
                key={item.key}
                locale={locale}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm hover:bg-gold/10"
              >
                {labels[item.key] || item.key}
              </LocaleLink>
            ))}
          </nav>
          <div className="mt-4">
            <Button href={`/${locale}/booking`} className="w-full justify-center">
              {labels.booking || 'Booking'}
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
