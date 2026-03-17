import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Noto_Sans_Arabic } from 'next/font/google';
import './globals.css';
import { ThemeScript } from '@/components/layout/theme-script';
import { SkipLink } from '@/components/layout/skip-link';
import { createMetadata } from '@/lib/metadata';

const heading = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700']
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const arabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = createMetadata('en');

export default function RootLayout({ children }: { children: import('react').ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${heading.variable} ${body.variable} ${arabic.variable} bg-background text-foreground`}>
        <ThemeScript />
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
