create extension if not exists pgcrypto;

create table if not exists visitor_sessions (
  id uuid primary key default gen_random_uuid(),
  session_id text not null,
  source text,
  medium text,
  campaign text,
  referrer text,
  locale text,
  user_agent text,
  created_at timestamptz not null default now()
);

create table if not exists page_events (
  id uuid primary key default gen_random_uuid(),
  session_id text not null,
  path text not null,
  event_name text not null,
  value numeric,
  referrer text,
  locale text,
  created_at timestamptz not null default now()
);

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  preferred_date date,
  created_at timestamptz not null default now()
);

create table if not exists booking_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  country text not null,
  preferred_language text not null,
  experience_slug text not null,
  preferred_date date,
  check_in date,
  check_out date,
  adults integer not null default 1,
  children integer not null default 0,
  addons text[] default '{}',
  special_requests text,
  payment_method text not null,
  estimated_total numeric not null default 0,
  booking_status text not null default 'pending',
  payment_status text not null default 'unpaid',
  source text,
  created_at timestamptz not null default now()
);

create table if not exists booking_status_history (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references booking_requests(id) on delete cascade,
  status text not null,
  note text,
  created_at timestamptz not null default now()
);

create table if not exists payment_links (
  id uuid primary key default gen_random_uuid(),
  provider text not null,
  label text not null,
  url text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists availability_calendar (
  id uuid primary key default gen_random_uuid(),
  experience_slug text not null,
  blocked_date date not null,
  reason text,
  created_at timestamptz not null default now()
);

create table if not exists media_assets (
  id uuid primary key default gen_random_uuid(),
  key text not null,
  url text not null,
  kind text not null,
  created_at timestamptz not null default now()
);

create table if not exists admin_recent_activity (
  id uuid primary key default gen_random_uuid(),
  type text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_booking_requests_created_at on booking_requests(created_at desc);
create index if not exists idx_page_events_created_at on page_events(created_at desc);
create index if not exists idx_visitor_sessions_created_at on visitor_sessions(created_at desc);
