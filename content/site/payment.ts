export const paymentMethods = [
  {
    value: 'pay_later',
    title: 'Reserve now, pay later',
    description: 'Hold your dates while our team confirms every detail.'
  },
  {
    value: 'stripe',
    title: 'Stripe placeholder',
    description: 'Ready for direct payment link integration later.'
  },
  {
    value: 'paypal',
    title: 'PayPal placeholder',
    description: 'Ready for a future PayPal confirmation workflow.'
  },
  {
    value: 'bank_transfer',
    title: 'Bank transfer placeholder',
    description: 'Useful for longer private journeys and tailored invoices.'
  },
  {
    value: 'cmi',
    title: 'CMI Morocco placeholder',
    description: 'Prepared for future local card processing in Morocco.'
  }
] as const;
