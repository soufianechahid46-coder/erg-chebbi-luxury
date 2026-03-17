import { renderEmailLayout } from '@/lib/email/layout';
import { emailPanel } from '@/lib/email/templates/common-styles';
import { formatMoney } from '@/lib/money';
import type { BookingRecord } from '@/types/booking';

export function ownerBookingEmail(booking: BookingRecord) {
  const body = `
    <p>A new booking request has been submitted.</p>
    <div style="${emailPanel}">
      <strong>Name:</strong> ${booking.fullName}<br/>
      <strong>Email:</strong> ${booking.email}<br/>
      <strong>Phone:</strong> ${booking.phone}<br/>
      <strong>Country:</strong> ${booking.country}<br/>
      <strong>Experience:</strong> ${booking.experienceSlug}<br/>
      <strong>Payment method:</strong> ${booking.paymentMethod}<br/>
      <strong>Total:</strong> ${formatMoney(booking.estimatedTotal)}<br/>
      <strong>Special requests:</strong> ${booking.specialRequests || '—'}
    </div>
  `;

  return renderEmailLayout({
    title: 'New booking request',
    preheader: 'A new booking request has arrived.',
    body
  });
}
