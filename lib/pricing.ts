import { nightsBetween } from '@/lib/date';
import { getOfferBySlug } from '@/lib/offers';
import type { BookingPayload } from '@/types/booking';

export function estimateBookingTotal(payload: BookingPayload) {
  const offer = getOfferBySlug(payload.experienceSlug);
  if (!offer) return 0;

  const adults = Math.max(payload.adults, 1);
  const children = Math.max(payload.children, 0);
  const addonsTotal = (offer.addons || [])
    .filter((addon) => payload.addons.includes(addon.key))
    .reduce((sum, addon) => sum + addon.price, 0);

  let total = offer.fromPrice;

  if (offer.pricingModel === 'nightly') {
    const nights = nightsBetween(payload.checkIn, payload.checkOut) || 1;
    total = offer.fromPrice * nights * adults + children * offer.fromPrice * nights * 0.5;
  } else if (offer.pricingModel === 'per_person') {
    total = offer.fromPrice * adults + children * offer.fromPrice * 0.5;
  } else if (offer.pricingModel === 'per_vehicle') {
    total = offer.fromPrice + Math.max(adults + children - 4, 0) * 60;
  } else if (offer.pricingModel === 'fixed') {
    total = offer.fromPrice;
  }

  return Math.round(total + addonsTotal);
}
