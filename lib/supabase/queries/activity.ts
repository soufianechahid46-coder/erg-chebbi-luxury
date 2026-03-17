import { createServiceClient } from '@/lib/supabase/service';

export async function fetchRecentActivity() {
  const client = createServiceClient();
  if (!client) return [];
  const { data } = await client.from('admin_recent_activity').select('*').order('created_at', { ascending: false }).limit(12);
  return data || [];
}

export async function insertActivity(row: { type: string; message: string }) {
  const client = createServiceClient();
  if (!client) return;
  await client.from('admin_recent_activity').insert(row);
}
