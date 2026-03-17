import type { ReactNode } from 'react';

export function Breadcrumbs({ children }: { children: ReactNode }) {
  return <div className="mb-6 text-sm text-charcoal/55 dark:text-white/55">{children}</div>;
}
