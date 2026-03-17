import { siteConfig } from '@/lib/site';

export function TopBar({ utilityPromise }: { utilityPromise: string }) {
  return (
    <div className="border-b border-border bg-white/70 text-[11px] uppercase tracking-[0.18em] text-charcoal/55 dark:bg-black/20 dark:text-white/55">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 md:px-8 lg:px-12">
        <span>{siteConfig.location}</span>
        <span>{utilityPromise}</span>
      </div>
    </div>
  );
}
