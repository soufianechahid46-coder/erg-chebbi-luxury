import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';
import { getSupabaseEnv } from '@/lib/env';

export function createBrowserClient() {
  const { url, anonKey } = getSupabaseEnv();
  if (!url || !anonKey) return null;
  return createClient<Database>(url, anonKey);
}
