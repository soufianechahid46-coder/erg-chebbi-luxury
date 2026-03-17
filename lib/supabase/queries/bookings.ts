import { createServiceClient } from '@/lib/supabase/service';

export async function insertBooking(row: {
  full_name: string;
  email: string;
  phone: string;
  country: string;
  preferred_language: string;
  experience_slug: string;
  preferred_date?: string | null;
  check_in?: string | null;
  check_out?: string | null;
  adults: number;
  children: number;
  addons?: string[] | null;
  special_requests?: string | null;
  payment_method: string;
  estimated_total: number;
  booking_status?: string;
  payment_status?: string;
  source?: string | null;
}) {
  const client = createServiceClient();
  if (!client) return { data: null, error: null };
  return client.from('booking_requests').insert(row).select('*').single();
}

export async function fetchBookings() {
  const client = createServiceClient();
  if (!client) return [];
  const { data } = await client.from('booking_requests').select('*').order('created_at', { ascending: false });
  return data || [];
}

export async function updateBookingStatus(id: string, status: string) {
  const client = createServiceClient();
  if (!client) return { error: null };
  return client.from('booking_requests').update({ booking_status: status }).eq('id', id);
}
