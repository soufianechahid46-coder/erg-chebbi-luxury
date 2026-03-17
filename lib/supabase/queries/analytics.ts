import { createServiceClient } from '@/lib/supabase/service';

export async function insertSession(row: {
  session_id: string;
  source?: string | null;
  medium?: string | null;
  campaign?: string | null;
  referrer?: string | null;
  locale?: string | null;
  user_agent?: string | null;
}) {
  const client = createServiceClient();
  if (!client) return;
  await client.from('visitor_sessions').insert(row);
}

export async function insertPageEvent(row: {
  session_id: string;
  path: string;
  event_name: string;
  value?: number | null;
  referrer?: string | null;
  locale?: string | null;
}) {
  const client = createServiceClient();
  if (!client) return;
  await client.from('page_events').insert(row);
}

export async function fetchSessions() {
  const client = createServiceClient();
  if (!client) return [];
  const { data } = await client.from('visitor_sessions').select('*').order('created_at', { ascending: false });
  return data || [];
}

export async function fetchPageEvents() {
  const client = createServiceClient();
  if (!client) return [];
  const { data } = await client.from('page_events').select('*').order('created_at', { ascending: false });
  return data || [];
}
