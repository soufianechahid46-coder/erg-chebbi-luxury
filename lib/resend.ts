import { Resend } from 'resend';
import { getEmailEnv } from '@/lib/env';

export function getResendClient() {
  const { apiKey } = getEmailEnv();
  if (!apiKey) return null;
  return new Resend(apiKey);
}
