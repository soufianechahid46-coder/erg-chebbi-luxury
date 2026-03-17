import type { Locale } from '@/types/locale';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { BookingCta } from '@/components/sections/shared/booking-cta';

export function HomeCtaBand({ locale }: { locale: Locale }) {
  return (
    <Section>
      <Container>
        <BookingCta locale={locale} />
      </Container>
    </Section>
  );
}
