import { estimateBookingTotal } from '@/lib/pricing';
import type { BookingPayload } from '@/types/booking';

export function normalizeBookingPayload(payload: BookingPayload): BookingPayload {
  return {
    ...payload,
    addons: payload.addons || [],
    specialRequests: payload.specialRequests || '',
    estimatedTotal: estimateBookingTotal(payload)
  };
}
