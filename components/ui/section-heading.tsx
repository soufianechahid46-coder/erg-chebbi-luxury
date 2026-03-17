import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  action?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, align = 'left', action }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <div className={`mb-8 flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <div className="flex w-full items-end justify-between gap-4">
        <div>
          <h2 className="font-heading text-4xl text-charcoal dark:text-white sm:text-5xl">{title}</h2>
          {description ? <p className="mt-3 max-w-3xl text-sm leading-7 text-charcoal/70 dark:text-white/70">{description}</p> : null}
        </div>
        {action}
      </div>
    </div>
  );
}
