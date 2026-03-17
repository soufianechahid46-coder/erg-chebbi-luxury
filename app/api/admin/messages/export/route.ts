import { NextResponse } from 'next/server';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { fetchMessages } from '@/lib/supabase/queries/messages';
import { toCsv } from '@/lib/csv';

export async function GET() {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const messages = await fetchMessages();
  const csv = toCsv(messages as unknown as Array<Record<string, unknown>>);

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="messages.csv"'
    }
  });
}
