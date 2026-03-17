export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[28px] border border-dashed border-border bg-white/60 p-8 text-center dark:bg-white/5">
      <h3 className="font-heading text-2xl text-charcoal dark:text-white">{title}</h3>
      <p className="mt-3 text-sm text-charcoal/70 dark:text-white/70">{description}</p>
    </div>
  );
}
