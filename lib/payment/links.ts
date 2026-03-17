export function paymentLinkFor(method: string) {
  if (method === 'stripe') return process.env.STRIPE_PAYMENT_LINK || '';
  if (method === 'paypal') return process.env.PAYPAL_PAYMENT_LINK || '';
  if (method === 'bank_transfer') return process.env.BANK_TRANSFER_REFERENCE || '';
  if (method === 'cmi') return process.env.CMI_PAYMENT_LINK || '';
  return '';
}
