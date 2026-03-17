import type { Locale } from '@/types/locale';

export type PaymentMethod = 'pay_later' | 'stripe' | 'paypal' | 'bank_transfer' | 'cmi';
export type BookingStatus = 'pending' | 'confirmed' | 'paid' | 'cancelled';

export type BookingPayload = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  preferredLanguage: Locale;
  experienceSlug: string;
  preferredDate?: string;
  checkIn?: string;
  checkOut?: string;
  adults: number;
  children: number;
  addons: string[];
  specialRequests?: string;
  paymentMethod: PaymentMethod;
  estimatedTotal: number;
};

export type BookingRecord = BookingPayload & {
  id: string;
  bookingStatus: BookingStatus;
  paymentStatus: 'unpaid' | 'partially_paid' | 'paid';
  createdAt: string;
  source?: string | null;
};
