import { trustPoints } from '@/content/site/trust';
import { Card } from '@/components/ui/card';
import { ShieldIcon, SparklesIcon } from '@/components/icons';

export function TrustGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {trustPoints.map((item, index) => (
        <Card key={item.title}>
          {index % 2 === 0 ? <ShieldIcon className="h-6 w-6 text-gold" /> : <SparklesIcon className="h-6 w-6 text-gold" />}
          <h3 className="mt-5 font-heading text-2xl text-charcoal dark:text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-charcoal/70 dark:text-white/70">{item.description}</p>
        </Card>
      ))}
    </div>
  );
}
