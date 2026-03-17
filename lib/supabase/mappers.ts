import type { BookingRecord } from '@/types/booking';

export function mapBookingRow(row: Record<string, unknown>): BookingRecord {
  return {
    id: String(row.id ?? ''),
    fullName: String(row.full_name ?? ''),
    email: String(row.email ?? ''),
    phone: String(row.phone ?? ''),
    country: String(row.country ?? ''),
    preferredLanguage: String(row.preferred_language ?? 'en') as BookingRecord['preferredLanguage'],
    experienceSlug: String(row.experience_slug ?? ''),
    preferredDate: row.preferred_date ? String(row.preferred_date) : '',
    checkIn: row.check_in ? String(row.check_in) : '',
    checkOut: row.check_out ? String(row.check_out) : '',
    adults: Number(row.adults ?? 1),
    children: Number(row.children ?? 0),
    addons: Array.isArray(row.addons) ? row.addons.map(String) : [],
    specialRequests: row.special_requests ? String(row.special_requests) : '',
    paymentMethod: String(row.payment_method ?? 'pay_later') as BookingRecord['paymentMethod'],
    estimatedTotal: Number(row.estimated_total ?? 0),
    bookingStatus: String(row.booking_status ?? 'pending') as BookingRecord['bookingStatus'],
    paymentStatus: String(row.payment_status ?? 'unpaid') as BookingRecord['paymentStatus'],
    createdAt: String(row.created_at ?? ''),
    source: row.source ? String(row.source) : ''
  };
}
