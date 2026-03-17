import type { Locale } from '@/types/locale';

export type OfferCategory =
  | 'camp'
  | 'camel'
  | 'quad'
  | 'tour'
  | 'private'
  | 'transfer';

export type LocalizedText = Record<Locale, string>;

export type ExperienceOffer = {
  slug: string;
  category: OfferCategory;
  featured: boolean;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  duration: LocalizedText;
  audience: LocalizedText;
  fromPrice: number;
  pricingModel: 'per_person' | 'per_vehicle' | 'nightly' | 'fixed';
  location: string;
  coverImage: string;
  gallery: string[];
  includes: Record<Locale, string[]>;
  addons?: {
    key: string;
    label: LocalizedText;
    price: number;
  }[];
};
