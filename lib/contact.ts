import type { ContactPayload } from '@/types/contact';

export function normalizeContactPayload(payload: ContactPayload): ContactPayload {
  return {
    ...payload,
    phone: payload.phone || '',
    preferredDate: payload.preferredDate || ''
  };
}
