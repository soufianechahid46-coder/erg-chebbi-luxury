import type { ReactNode } from 'react';
import { cn } from '@/lib/helpers';

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full border border-gold/25 bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-charcoal/70 dark:bg-white/5 dark:text-white/70',
        className
      )}
    >
      {children}
    </span>
  );
}
