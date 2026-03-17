import Link from 'next/link';

export function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-sm text-charcoal/75 transition hover:text-charcoal dark:text-white/75 dark:hover:text-white">
      {label}
    </Link>
  );
}
