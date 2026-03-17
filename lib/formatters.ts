import { formatMoney } from '@/lib/money';
import { formatDate } from '@/lib/date';

export { formatMoney, formatDate };

export function formatGuests(adults: number, children: number) {
  return `${adults} adult${adults === 1 ? '' : 's'} · ${children} child${children === 1 ? '' : 'ren'}`;
}
