import Link from 'next/link';
import { Card } from '@/components/ui/card';

export function NotFoundBlock() {
  return (
    <Card className="text-center">
      <h1 className="font-heading text-5xl text-charcoal dark:text-white">Not found</h1>
      <p className="mt-4 text-sm text-charcoal/70 dark:text-white/70">The requested page could not be found.</p>
      <Link href="/en" className="mt-6 inline-flex rounded-full bg-charcoal px-5 py-3 text-white">
        Return home
      </Link>
    </Card>
  );
}
