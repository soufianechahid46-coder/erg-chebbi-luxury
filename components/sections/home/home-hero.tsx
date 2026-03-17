import { VideoHero } from '@/components/ui/video-hero';
import { mediaAssets } from '@/content/site/media';

type HomeHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  locale: string;
};

export function HomeHero({ eyebrow, title, subtitle, ctaPrimary, ctaSecondary, locale }: HomeHeroProps) {
  return (
    <VideoHero
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      videos={mediaAssets.heroVideos}
      poster={mediaAssets.heroPoster}
      primaryCta={{ href: `/${locale}/booking`, label: ctaPrimary }}
      secondaryCta={{ href: `/${locale}/experiences`, label: ctaSecondary }}
    />
  );
}
