import { absoluteUrl } from '@/lib/helpers';
import type { FaqItem } from '@/types/faq';

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Erg Chebbi Luxury',
    url: absoluteUrl('/'),
    areaServed: 'Merzouga, Morocco',
    email: 'soufianechahid80@gmail.com',
    telephone: '+212691999897'
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}
