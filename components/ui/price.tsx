import { formatMoney } from '@/lib/money';

export function Price({ amount }: { amount: number }) {
  return <span className="font-heading text-3xl text-charcoal dark:text-white">{formatMoney(amount)}</span>;
}
