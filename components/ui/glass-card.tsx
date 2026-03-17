import type { ReactNode } from 'react';
import { cn } from '@/lib/helpers';

export function GlassCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('rounded-[28px] border border-white/20 bg-white/55 p-6 shadow-glow backdrop-blur dark:bg-white/10', className)}>
      {children}
    </div>
  );
}
