export function getRequiredPublicEnv() {
  return {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ergchebbiluxury.vercel.app'
  };
}

export function getSupabaseEnv() {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  };
}

export function getAdminEnv() {
  return {
    username: process.env.ADMIN_USERNAME || 'admin',
    password: process.env.ADMIN_PASSWORD || 'changeme',
    secret: process.env.ADMIN_SESSION_SECRET || 'change-this-secret'
  };
}

export function getEmailEnv() {
  return {
    from: process.env.BOOKING_FROM_EMAIL || 'onboarding@resend.dev',
    replyTo: process.env.BOOKING_REPLY_TO || 'soufianechahid80@gmail.com',
    owner: process.env.OWNER_NOTIFICATION_EMAIL || 'soufianechahid80@gmail.com',
    apiKey: process.env.RESEND_API_KEY || ''
  };
}
