'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';
import { mediaFallbacks } from '@/lib/fallbacks';

type ImageWithFallbackProps = ImageProps & {
  fallbackSrc?: string;
};

export function ImageWithFallback({ src, alt, fallbackSrc = mediaFallbacks.image, ...props }: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  return <Image {...props} src={currentSrc} alt={alt} onError={() => setCurrentSrc(fallbackSrc)} />;
}
