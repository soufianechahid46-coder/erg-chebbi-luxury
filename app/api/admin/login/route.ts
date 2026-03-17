import { NextResponse } from 'next/server';
import { createAdminToken, getAdminCredentials } from '@/lib/admin-auth';
import { ADMIN_COOKIE } from '@/lib/cookies';

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = getAdminCredentials();

  if (body.username !== username || body.password !== password) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_COOKIE, createAdminToken(username), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 12
  });

  return response;
}
