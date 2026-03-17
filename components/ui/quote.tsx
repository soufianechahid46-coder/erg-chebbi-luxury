import type { ReactNode } from 'react';

export function Quote({ children }: { children: ReactNode }) {
  return <blockquote className="font-heading text-3xl leading-tight text-charcoal dark:text-white">{children}</blockquote>;
}
