import type { Option } from '@/types/forms';

export const BRAND_NAME = 'Erg Chebbi Luxury';
export const BRAND_TAGLINE = 'Luxury desert camp and private Sahara experiences in Merzouga';
export const WHATSAPP_NUMBER = '+212691999897';
export const WHATSAPP_LINK = 'https://wa.me/212691999897';
export const OWNER_EMAIL = 'soufianechahid80@gmail.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/positano_store1?igsh=MTdybmxxaXozOHhkcw%3D%3D&utm_source=qr';
export const FACEBOOK_URL = 'https://www.facebook.com/share/18MJ4h2CHG/?mibextid=wwXIfr';
export const TIKTOK_URL = 'https://www.tiktok.com/@soufiane_ft10?_r=1&_t=ZN-94ghEwiTHDK';

export const COUNTRIES: Option[] = [
  { value: 'Morocco', label: 'Morocco' },
  { value: 'France', label: 'France' },
  { value: 'Spain', label: 'Spain' },
  { value: 'United Kingdom', label: 'United Kingdom' },
  { value: 'United States', label: 'United States' },
  { value: 'Germany', label: 'Germany' },
  { value: 'Italy', label: 'Italy' },
  { value: 'Netherlands', label: 'Netherlands' },
  { value: 'Belgium', label: 'Belgium' },
  { value: 'Canada', label: 'Canada' },
  { value: 'Australia', label: 'Australia' },
  { value: 'Other', label: 'Other' }
];

export const PAYMENT_OPTIONS: Option[] = [
  { value: 'pay_later', label: 'Reserve now, pay later' },
  { value: 'stripe', label: 'Stripe placeholder' },
  { value: 'paypal', label: 'PayPal placeholder' },
  { value: 'bank_transfer', label: 'Bank transfer placeholder' },
  { value: 'cmi', label: 'CMI Morocco placeholder' }
];
