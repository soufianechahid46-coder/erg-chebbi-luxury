import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { GalleryGrid } from '@/components/sections/shared/gallery-grid';
import { galleryImages } from '@/content/site/gallery';

export function HomeGalleryPreview() {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow="Visual atmosphere" title="A glimpse of the desert mood" description="Golden dunes, soft interiors, calm mornings, and atmospheric evenings in the Sahara." />
        <GalleryGrid items={galleryImages.slice(0, 6)} />
      </Container>
    </Section>
  );
}
