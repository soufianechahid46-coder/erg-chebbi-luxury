import type { SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/helpers';

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={cn(
        'w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-gold/40 dark:bg-white/5 dark:text-white',
        props.className
      )}
    />
  );
}
