import { PageHero } from '@/components/sections/shared/page-hero';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { GalleryGrid } from '@/components/sections/shared/gallery-grid';
import { galleryImages } from '@/content/site/gallery';
import { getDictionary } from '@/content/locales';
import { isLocale, type Locale } from '@/lib/locales';
import { notFound } from 'next/navigation';

export default function GalleryPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageHero title={dictionary.gallery.title} subtitle={dictionary.gallery.subtitle} />
      <Section>
        <Container>
          <GalleryGrid items={galleryImages} />
        </Container>
      </Section>
    </>
  );
}
