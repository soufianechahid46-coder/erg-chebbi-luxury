export function formatMoney(value: number, currency = 'EUR') {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(value);
}
