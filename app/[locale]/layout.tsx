import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { TopBar } from '@/components/layout/top-bar';
import { FloatingContact } from '@/components/layout/floating-contact';
import { SiteTracker } from '@/components/tracking/site-tracker';
import { getDictionary } from '@/content/locales';
import { createMetadata } from '@/lib/metadata';
import { isLocale, localeDirection, type Locale } from '@/lib/locales';

type LocaleLayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'es' }, { locale: 'ar' }];
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return createMetadata('en');
  const dictionary = getDictionary(params.locale);
  return createMetadata(params.locale, dictionary.home.title, dictionary.home.subtitle);
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <div dir={localeDirection(locale)} className={locale === 'ar' ? 'locale-ar' : ''}>
      <SiteTracker />
      <TopBar utilityPromise={dictionary.common.utilityPromise} />
      <Navbar locale={locale} labels={{ nav: dictionary.common.nav, bookNow: dictionary.common.bookNow }} />
      <main id="main-content">{children}</main>
      <Footer
        locale={locale}
        labels={{
          title: dictionary.common.footerTitle,
          body: dictionary.common.footerBody,
          nav: dictionary.common.nav,
          bookNow: dictionary.common.bookNow
        }}
      />
      <FloatingContact bookingHref={`/${locale}/booking`} />
    </div>
  );
}
