import { createServiceClient } from '@/lib/supabase/service';

export async function insertMessage(row: {
  full_name: string;
  email: string;
  phone?: string | null;
  subject: string;
  message: string;
  preferred_date?: string | null;
}) {
  const client = createServiceClient();
  if (!client) return { data: null, error: null };
  return client.from('contact_messages').insert(row).select('*').single();
}

export async function fetchMessages() {
  const client = createServiceClient();
  if (!client) return [];
  const { data } = await client.from('contact_messages').select('*').order('created_at', { ascending: false });
  return data || [];
}
