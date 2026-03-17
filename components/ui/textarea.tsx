import type { TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/helpers';

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        'min-h-[140px] w-full rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm outline-none transition placeholder:text-charcoal/40 focus:border-gold/40 dark:bg-white/5 dark:text-white',
        props.className
      )}
    />
  );
}
