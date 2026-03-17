import { CheckIcon } from '@/components/icons';

export function HighlightsList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-charcoal/70 dark:text-white/70">
          <CheckIcon className="mt-1 h-4 w-4 text-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
