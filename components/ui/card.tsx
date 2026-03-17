import type { ReactNode } from 'react';
import { cn } from '@/lib/helpers';

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('rounded-[28px] border border-border bg-panel/90 p-6 shadow-soft backdrop-blur', className)}>
      {children}
    </div>
  );
}
