'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type VideoHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  videos: string[];
  poster: string;
};

export function VideoHero({ eyebrow, title, subtitle, primaryCta, secondaryCta, videos, poster }: VideoHeroProps) {
  const [failed, setFailed] = useState(false);
  const video = useMemo(() => videos[0], [videos]);

  return (
    <section className="relative isolate overflow-hidden rounded-[36px] border border-border bg-night text-white shadow-glow">
      {!failed ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-65"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          onError={() => setFailed(true)}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(190,152,72,0.32),transparent_28%)]" />

      <div className="relative z-10 mx-auto grid min-h-[74vh] max-w-7xl items-end px-6 py-14 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <Badge className="border-white/25 bg-white/10 text-white">{eyebrow}</Badge>
          <h1 className="mt-6 font-heading text-5xl leading-none sm:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            <Button href={secondaryCta.href} variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
              {secondaryCta.label}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
