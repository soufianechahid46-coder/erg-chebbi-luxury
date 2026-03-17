import type { ReactNode } from 'react';

type RadioCardProps = {
  checked?: boolean;
  title: string;
  description: string;
  onClick?: () => void;
  children?: ReactNode;
};

export function RadioCard({ checked, title, description, onClick, children }: RadioCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-3xl border p-4 text-left transition ${
        checked ? 'border-gold bg-gold/10' : 'border-border bg-white/70 dark:bg-white/5'
      }`}
    >
      <div className="font-medium text-charcoal dark:text-white">{title}</div>
      <div className="mt-2 text-sm text-charcoal/70 dark:text-white/70">{description}</div>
      {children}
    </button>
  );
}
