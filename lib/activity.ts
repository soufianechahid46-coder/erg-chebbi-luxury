import { createServiceClient } from '@/lib/supabase/service';

export async function logActivity(type: string, message: string) {
  const client = createServiceClient();
  if (!client) return;
  await client.from('admin_recent_activity').insert({ type, message });
}
