import { renderEmailLayout } from '@/lib/email/layout';
import { emailPanel } from '@/lib/email/templates/common-styles';
import type { ContactPayload } from '@/types/contact';

export function ownerContactEmail(message: ContactPayload) {
  const body = `
    <p>A new contact message was sent from the website.</p>
    <div style="${emailPanel}">
      <strong>Name:</strong> ${message.fullName}<br/>
      <strong>Email:</strong> ${message.email}<br/>
      <strong>Phone:</strong> ${message.phone || '—'}<br/>
      <strong>Subject:</strong> ${message.subject}<br/>
      <strong>Preferred date:</strong> ${message.preferredDate || '—'}<br/>
      <strong>Message:</strong><br/>${message.message}
    </div>
  `;

  return renderEmailLayout({
    title: 'New website message',
    preheader: 'A new website message has arrived.',
    body
  });
}
