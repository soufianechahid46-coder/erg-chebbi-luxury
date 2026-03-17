import type { ReactNode } from 'react';

export function Pill({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-full bg-charcoal px-3 py-1 text-xs text-white dark:bg-gold/20 dark:text-white">{children}</span>;
}
