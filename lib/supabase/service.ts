import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';
import { getSupabaseEnv } from '@/lib/env';

export function createServiceClient() {
  const { url, serviceRoleKey, anonKey } = getSupabaseEnv();
  const key = serviceRoleKey || anonKey;
  if (!url || !key) return null;
  return createClient<Database>(url, key, {
    auth: { persistSession: false }
  });
}
