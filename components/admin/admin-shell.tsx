import type { ReactNode } from 'react';
import { AdminSidebar } from '@/components/admin/admin-sidebar';
import { AdminTopbar } from '@/components/admin/admin-topbar';

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f6f1e8] text-charcoal">
      <div className="mx-auto grid min-h-screen max-w-[1600px] gap-0 lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div className="min-w-0">
          <AdminTopbar />
          <main className="p-6 md:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
