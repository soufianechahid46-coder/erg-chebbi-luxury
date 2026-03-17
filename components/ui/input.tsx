import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/helpers';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        'w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none ring-0 transition placeholder:text-charcoal/40 focus:border-gold/40 dark:bg-white/5 dark:text-white',
        props.className
      )}
    />
  );
}
