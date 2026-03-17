import type { ReactNode } from 'react';

export function Chip({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-full bg-gold/10 px-3 py-1 text-xs text-charcoal dark:text-white">{children}</span>;
}
