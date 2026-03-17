import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/helpers';
import { BRAND_NAME, BRAND_TAGLINE } from '@/lib/constants';
import type { Locale } from '@/types/locale';

export function createMetadata(locale: Locale, title?: string, description?: string): Metadata {
  const resolvedTitle = title ? `${title} | ${BRAND_NAME}` : `${BRAND_NAME} | ${BRAND_TAGLINE}`;
  const resolvedDescription =
    description ||
    'Luxury desert camp stays, camel trekking, quad adventures, 4x4 tours, and private Sahara experiences in Merzouga, Morocco.';

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ergchebbiluxury.vercel.app'),
    alternates: {
      canonical: absoluteUrl(`/${locale}`),
      languages: {
        en: absoluteUrl('/en'),
        fr: absoluteUrl('/fr'),
        es: absoluteUrl('/es'),
        ar: absoluteUrl('/ar')
      }
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: absoluteUrl(`/${locale}`),
      siteName: BRAND_NAME,
      images: [absoluteUrl('/placeholders/og-image.svg')],
      locale,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: resolvedDescription,
      images: [absoluteUrl('/placeholders/og-image.svg')]
    }
  };
}
