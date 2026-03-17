import { publicNavigation } from '@/content/site/navigation';
import type { Locale } from '@/types/locale';
import { Container } from '@/components/layout/container';
import { LocaleLink } from '@/components/layout/locale-link';
import { Logo } from '@/components/layout/logo';
import { MobileMenu } from '@/components/layout/mobile-menu';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { LanguageSwitcher } from '@/components/layout/language-switcher';
import { Button } from '@/components/ui/button';

type NavbarProps = {
  locale: Locale;
  labels: {
    nav: Record<string, string>;
    bookNow: string;
  };
};

export function Navbar({ locale, labels }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-white/80 backdrop-blur-xl dark:bg-[#111319]/80">
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <Logo locale={locale} />
          <nav className="hidden items-center gap-6 lg:flex">
            {publicNavigation.map((item) => (
              <LocaleLink
                key={item.key}
                locale={locale}
                href={item.href}
                className="text-sm text-charcoal/75 transition hover:text-charcoal dark:text-white/75 dark:hover:text-white"
              >
                {labels.nav[item.key] || item.key}
              </LocaleLink>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button href={`/${locale}/booking`}>{labels.bookNow}</Button>
          </div>
          <MobileMenu locale={locale} labels={{ ...labels.nav, booking: labels.bookNow }} nav={publicNavigation} />
        </div>
      </Container>
    </header>
  );
}
