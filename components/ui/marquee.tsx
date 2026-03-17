import type { ReactNode } from 'react';

export function Marquee({ children }: { children: ReactNode }) {
  return <div className="overflow-hidden rounded-full border border-border bg-white/70 px-4 py-3 text-sm text-charcoal/70 dark:bg-white/5 dark:text-white/70">{children}</div>;
}
