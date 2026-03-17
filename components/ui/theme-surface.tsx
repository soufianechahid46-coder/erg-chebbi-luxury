import type { ReactNode } from 'react';

export function ThemeSurface({ children }: { children: ReactNode }) {
  return <div className="rounded-[28px] border border-border bg-panel/95 p-6 shadow-soft">{children}</div>;
}
