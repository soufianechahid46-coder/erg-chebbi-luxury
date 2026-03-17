import { Card } from '@/components/ui/card';
import { Stars } from '@/components/ui/stars';
import type { Testimonial } from '@/types/site';

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <Card>
      <Stars count={item.rating} />
      <p className="mt-4 text-sm leading-7 text-charcoal/75 dark:text-white/75">“{item.quote}”</p>
      <div className="mt-6 text-sm font-medium text-charcoal dark:text-white">{item.guest}</div>
      <div className="text-xs uppercase tracking-[0.18em] text-charcoal/55 dark:text-white/55">{item.country}</div>
    </Card>
  );
}
