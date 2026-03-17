import type { MetadataRoute } from 'next';
import { locales } from '@/lib/locales';

const pages = [
  '',
  '/experiences',
  '/luxury-camp',
  '/camel-trekking',
  '/quad-atv',
  '/four-by-four-tours',
  '/gallery',
  '/about',
  '/faq',
  '/contact',
  '/booking',
  '/transfers',
  '/journal',
  '/privacy',
  '/terms',
  '/booking-policy'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ergchebbiluxury.vercel.app';
  return locales.flatMap((locale) =>
    pages.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: new Date()
    }))
  );
}
