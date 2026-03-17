import type { ReactNode } from 'react';

export function IconCircle({ children }: { children: ReactNode }) {
  return <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">{children}</span>;
}
