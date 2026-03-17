import { mediaAssets } from '@/content/site/media';

export function getCategoryFallback(category: string) {
  if (category in mediaAssets.categoryFallbacks) {
    return mediaAssets.categoryFallbacks[category as keyof typeof mediaAssets.categoryFallbacks];
  }
  return mediaAssets.categoryFallbacks.generic;
}
