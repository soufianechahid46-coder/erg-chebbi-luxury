import offers from '@/content/site/offers';
import type { ExperienceOffer } from '@/types/offer';

export function getOffers() {
  return offers;
}

export function getFeaturedOffers() {
  return offers.filter((offer) => offer.featured);
}

export function getOfferBySlug(slug: string): ExperienceOffer | undefined {
  return offers.find((offer) => offer.slug === slug);
}

export function getOffersByCategory(category: ExperienceOffer['category']) {
  return offers.filter((offer) => offer.category === category);
}
