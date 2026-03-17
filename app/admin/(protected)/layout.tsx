import type { Metadata } from 'next';
import { requireAdmin } from '@/lib/admin-auth';
import { AdminShell } from '@/components/admin/admin-shell';

export const metadata: Metadata = {
  title: 'Admin | Erg Chebbi Luxury',
  robots: { index: false, follow: false }
};

export default function AdminProtectedLayout({ children }: { children: import('react').ReactNode }) {
  requireAdmin();
  return <AdminShell>{children}</AdminShell>;
}
