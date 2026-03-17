import crypto from 'node:crypto';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ADMIN_COOKIE } from '@/lib/cookies';
import { getAdminEnv } from '@/lib/env';

function sign(username: string) {
  const { secret } = getAdminEnv();
  return crypto.createHmac('sha256', secret).update(username).digest('hex');
}

export function createAdminToken(username: string) {
  return `${username}.${sign(username)}`;
}

export function isValidAdminToken(token?: string | null) {
  if (!token) return false;
  const [username, signature] = token.split('.');
  if (!username || !signature) return false;
  return sign(username) === signature;
}

export function getAdminCookieValue() {
  return cookies().get(ADMIN_COOKIE)?.value || null;
}

export function isAdminAuthenticated() {
  return isValidAdminToken(getAdminCookieValue());
}

export function requireAdmin() {
  if (!isAdminAuthenticated()) {
    redirect('/admin/login');
  }
}

export function getAdminCredentials() {
  const { username, password } = getAdminEnv();
  return { username, password };
}
