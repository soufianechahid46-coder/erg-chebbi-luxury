import { renderEmailLayout } from '@/lib/email/layout';
import { emailPanel } from '@/lib/email/templates/common-styles';
import { formatMoney } from '@/lib/money';
import { formatDate } from '@/lib/date';
import type { BookingRecord } from '@/types/booking';

export function customerBookingEmail(booking: BookingRecord) {
  const body = `
    <p>Hello ${booking.fullName},</p>
    <p>Thank you for choosing Erg Chebbi Luxury. Your request has been received and our team will confirm availability shortly.</p>
    <div style="${emailPanel}">
      <strong>Experience:</strong> ${booking.experienceSlug}<br/>
      <strong>Date:</strong> ${formatDate(booking.preferredDate || booking.checkIn)}<br/>
      <strong>Check-out:</strong> ${formatDate(booking.checkOut || undefined)}<br/>
      <strong>Guests:</strong> ${booking.adults} adults · ${booking.children} children<br/>
      <strong>Estimated total:</strong> ${formatMoney(booking.estimatedTotal)}
    </div>
    <p>For quick support, our team is also available on WhatsApp at +212 691 999 897.</p>
  `;

  return renderEmailLayout({
    title: 'Your desert experience request',
    preheader: 'Your booking request has been received.',
    body
  });
}
