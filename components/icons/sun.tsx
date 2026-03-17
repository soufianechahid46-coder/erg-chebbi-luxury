import type { SVGProps } from 'react';

export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" fill="none"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17 4.9 19.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
