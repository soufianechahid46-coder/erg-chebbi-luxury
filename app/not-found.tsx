import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { NotFoundBlock } from '@/components/sections/shared/not-found-block';

export default function RootNotFound() {
  return (
    <Section>
      <Container>
        <NotFoundBlock />
      </Container>
    </Section>
  );
}
