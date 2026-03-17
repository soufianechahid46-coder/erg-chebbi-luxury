'use client';

import { useEffect } from 'react';

export function ScrollToTop({ active }: { active: boolean }) {
  useEffect(() => {
    if (active) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [active]);

  return null;
}
