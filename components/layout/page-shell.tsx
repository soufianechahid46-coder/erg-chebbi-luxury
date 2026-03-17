import type { ReactNode } from 'react';
import { Container } from '@/components/layout/container';

export function PageShell({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
