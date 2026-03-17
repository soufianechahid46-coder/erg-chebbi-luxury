# Erg Chebbi Luxury

A premium multilingual Next.js booking website for luxury desert experiences in Merzouga, Morocco.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase
- Resend

## Included

- Public multilingual site: English, French, Spanish, Arabic
- Light mode by default with luxury dark mode
- On-site booking form with date logic and estimated totals
- Contact form
- Admin dashboard with login
- Supabase schema and seed files
- Analytics tracking routes
- Remote royalty-free media with graceful fallbacks

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Files to edit later

- Images and videos: `content/site/media.ts`
- Prices and offer details: `content/site/offers/*.ts`
- Text and translations: `content/locales/*`
- Payment links: `.env.local` and `content/site/payment.ts`
- Email sender and notification address: `.env.local`
- Admin credentials: `.env.local`

## Deployment

1. Push the project to GitHub
2. Import the repo in Vercel
3. Add the environment variables from `.env.example`
4. Create the Supabase tables using `supabase/schema.sql`
5. Redeploy

See the `docs/` folder for step-by-step guides.
