import type { ReactNode } from 'react';

export function FiltersBar({ children }: { children: ReactNode }) {
  return <div className="mb-5 flex flex-wrap items-center gap-3">{children}</div>;
}
