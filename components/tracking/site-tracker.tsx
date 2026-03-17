'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { createSessionId, parseUtm } from '@/lib/analytics';
import { locales } from '@/lib/locales';

const storageKey = 'erg-chebbi-session-id';

export function SiteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    const stored = window.localStorage.getItem(storageKey);
    const sessionId = stored || createSessionId();
    if (!stored) {
      window.localStorage.setItem(storageKey, sessionId);
      const utm = parseUtm(new URLSearchParams(window.location.search));
      void fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'session',
          sessionId,
          source: utm.source,
          medium: utm.medium,
          campaign: utm.campaign,
          referrer: document.referrer || null,
          locale: localeFromPath(pathname),
          userAgent: navigator.userAgent
        })
      });
    }
  }, [pathname]);

  useEffect(() => {
    const sessionId = window.localStorage.getItem(storageKey) || createSessionId();
    window.localStorage.setItem(storageKey, sessionId);

    void fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'pageview',
        sessionId,
        path: `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ''}`,
        referrer: document.referrer || null,
        locale: localeFromPath(pathname)
      })
    });
  }, [pathname, searchParams]);

  return null;
}

function localeFromPath(pathname: string) {
  const segment = pathname.split('/').filter(Boolean)[0];
  return locales.includes(segment as (typeof locales)[number]) ? segment : 'en';
}
