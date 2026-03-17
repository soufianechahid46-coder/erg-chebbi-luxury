import { getEmailEnv } from '@/lib/env';
import { getResendClient } from '@/lib/resend';
import { customerBookingEmail } from '@/lib/email/templates/customer-booking';
import { ownerBookingEmail } from '@/lib/email/templates/owner-booking';
import { ownerContactEmail } from '@/lib/email/templates/contact-owner';
import type { BookingRecord } from '@/types/booking';
import type { ContactPayload } from '@/types/contact';

export async function sendBookingEmails(booking: BookingRecord) {
  const resend = getResendClient();
  const { from, replyTo, owner } = getEmailEnv();
  if (!resend) return;

  await resend.emails.send({
    from,
    to: booking.email,
    subject: 'Your Erg Chebbi Luxury booking request',
    html: customerBookingEmail(booking),
    replyTo
  });

  await resend.emails.send({
    from,
    to: owner,
    subject: `New booking request · ${booking.fullName}`,
    html: ownerBookingEmail(booking),
    replyTo: booking.email
  });
}

export async function sendContactEmail(message: ContactPayload) {
  const resend = getResendClient();
  const { from, replyTo, owner } = getEmailEnv();
  if (!resend) return;

  await resend.emails.send({
    from,
    to: owner,
    subject: `Website contact · ${message.subject}`,
    html: ownerContactEmail(message),
    replyTo: message.email || replyTo
  });
}
