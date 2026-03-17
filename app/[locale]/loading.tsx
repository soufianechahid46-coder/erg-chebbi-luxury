import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { LoadingBar } from '@/components/ui/loading-bar';

export default function LocaleLoading() {
  return (
    <Section>
      <Container>
        <LoadingBar />
      </Container>
    </Section>
  );
}
