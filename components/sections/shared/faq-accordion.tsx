'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import type { FaqItem } from '@/types/faq';

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <Card key={item.question} className="p-0">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-medium text-charcoal dark:text-white">{item.question}</span>
              <span className="text-xl text-gold">{open ? '−' : '+'}</span>
            </button>
            {open ? <div className="px-6 pb-6 text-sm leading-7 text-charcoal/70 dark:text-white/70">{item.answer}</div> : null}
          </Card>
        );
      })}
    </div>
  );
}
