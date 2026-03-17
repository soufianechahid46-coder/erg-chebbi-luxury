import type { ReactNode } from 'react';
import { cn } from '@/lib/helpers';

export function Section({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={cn('py-16 sm:py-20', className)}>{children}</section>;
}
