import { Card } from '@/components/ui/card';
import { IconCircle } from '@/components/ui/icon-circle';
import type { ReactNode } from 'react';

export function FeatureCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <Card>
      <IconCircle>{icon}</IconCircle>
      <h3 className="mt-5 font-heading text-2xl text-charcoal dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-charcoal/70 dark:text-white/70">{description}</p>
    </Card>
  );
}
