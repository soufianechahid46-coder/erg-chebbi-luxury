type TimelineProps = {
  steps: string[];
};

export function Timeline({ steps }: TimelineProps) {
  return (
    <ol className="space-y-4">
      {steps.map((step, index) => (
        <li key={step} className="flex gap-4">
          <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-xs font-medium text-gold">{index + 1}</span>
          <span className="text-sm leading-7 text-charcoal/70 dark:text-white/70">{step}</span>
        </li>
      ))}
    </ol>
  );
}
