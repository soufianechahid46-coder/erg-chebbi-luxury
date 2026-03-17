import type { ReactNode } from 'react';

export function Tag({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs text-charcoal/70 dark:text-white/70">{children}</span>;
}
