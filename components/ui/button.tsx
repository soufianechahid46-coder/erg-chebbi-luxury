import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/helpers';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const styles = {
  primary: 'bg-charcoal text-white hover:bg-black shadow-glow',
  secondary: 'bg-gold/15 text-charcoal border border-gold/30 hover:bg-gold/20',
  ghost: 'bg-transparent text-charcoal hover:bg-black/5 dark:text-white dark:hover:bg-white/10'
};

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  type = 'button'
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-300',
    styles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
