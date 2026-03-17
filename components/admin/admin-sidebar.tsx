import Link from 'next/link';

const links = [
  { href: '/admin', label: 'Overview' },
  { href: '/admin/bookings', label: 'Bookings' },
  { href: '/admin/messages', label: 'Messages' },
  { href: '/admin/analytics', label: 'Analytics' },
  { href: '/admin/settings', label: 'Settings' }
];

export function AdminSidebar() {
  return (
    <aside className="border-r border-[#e8dcc4] bg-white/75 p-6 backdrop-blur">
      <div className="font-heading text-3xl text-charcoal">Erg Chebbi Luxury</div>
      <div className="mt-1 text-xs uppercase tracking-[0.26em] text-charcoal/50">Private admin</div>
      <nav className="mt-8 grid gap-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-2xl px-4 py-3 text-sm text-charcoal/75 transition hover:bg-gold/10 hover:text-charcoal">
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
