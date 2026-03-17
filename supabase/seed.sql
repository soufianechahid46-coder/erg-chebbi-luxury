insert into payment_links (provider, label, url, active) values
('stripe', 'Stripe placeholder', 'https://example.com/stripe', false),
('paypal', 'PayPal placeholder', 'https://example.com/paypal', false),
('bank_transfer', 'Bank transfer placeholder', 'https://example.com/bank', false),
('cmi', 'CMI placeholder', 'https://example.com/cmi', false)
on conflict do nothing;
