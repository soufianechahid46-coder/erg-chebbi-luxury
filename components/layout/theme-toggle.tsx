'use client';

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@/components/icons';
import { themeStorageKey } from '@/lib/theme';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    document.documentElement.dataset.theme = next;
    localStorage.setItem(themeStorageKey, next);
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/70 text-charcoal transition hover:border-gold/35 dark:bg-white/5 dark:text-white"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
}
