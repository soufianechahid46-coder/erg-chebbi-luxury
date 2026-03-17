import { Container } from '@/components/layout/container';
import { Logo } from '@/components/layout/logo';
import { SocialLinks } from '@/components/layout/social-links';
import type { Locale } from '@/types/locale';
import { contactDetails } from '@/content/site/contact';
import { LocaleLink } from '@/components/layout/locale-link';

type FooterProps = {
  locale: Locale;
  labels: {
    title: string;
    body: string;
    nav: Record<string, string>;
    bookNow: string;
  };
};

export function Footer({ locale, labels }: FooterProps) {
  return (
    <footer className="border-t border-border bg-[#111319] py-16 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <Logo locale={locale} dark />
            <h3 className="mt-6 font-heading text-3xl">{labels.title}</h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">{labels.body}</p>
            <div className="mt-6">
              <SocialLinks dark />
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-white/45">Explore</div>
            <div className="mt-5 space-y-3 text-sm text-white/80">
              <LocaleLink locale={locale} href="/experiences">{labels.nav.experiences}</LocaleLink><br />
              <LocaleLink locale={locale} href="/luxury-camp">{labels.nav.luxuryCamp}</LocaleLink><br />
              <LocaleLink locale={locale} href="/gallery">{labels.nav.gallery}</LocaleLink><br />
              <LocaleLink locale={locale} href="/booking">{labels.bookNow}</LocaleLink>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-white/45">Contact</div>
            <div className="mt-5 space-y-3 text-sm text-white/80">
              <div>{contactDetails.location}</div>
              <div>{contactDetails.email}</div>
              <div>{contactDetails.whatsapp}</div>
              <div>{contactDetails.responseTime}</div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
