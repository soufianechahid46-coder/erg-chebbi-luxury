import { ImageWithFallback } from '@/components/ui/image-with-fallback';

type GalleryGridProps = {
  items: Array<{ src: string; alt: string }>;
};

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.src} className="relative overflow-hidden rounded-[28px] border border-border bg-white/70 shadow-soft">
          <div className="relative h-72">
            <ImageWithFallback src={item.src} alt={item.alt} fill className="object-cover transition duration-700 hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
        </div>
      ))}
    </div>
  );
}
