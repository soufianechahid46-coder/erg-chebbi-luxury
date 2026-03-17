import { createClient } from '@/lib/supabase/server';

export type AdminPageEvent = {
  id: string;
  event_name: string;
  path: string | null;
  created_at: string;
  referrer?: string | null;
};

export type AdminVisitorSession = {
  id: string;
  session_id: string;
  created_at: string;
};

export async function fetchPageEvents(): Promise<AdminPageEvent[]> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('page_events')
    .select('id, event_name, path, created_at, referrer')
    .order('created_at', { ascending: false });

  if (error || !data) {
    return [];
  }

  return data as AdminPageEvent[];
}

export async function fetchSessions(): Promise<AdminVisitorSession[]> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('visitor_sessions')
    .select('id, session_id, created_at')
    .order('created_at', { ascending: false });

  if (error || !data) {
    return [];
  }

  return data as AdminVisitorSession[];
}