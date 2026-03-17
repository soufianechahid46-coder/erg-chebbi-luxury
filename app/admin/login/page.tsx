import { isAdminAuthenticated } from '@/lib/admin-auth';
import { redirect } from 'next/navigation';
import { LoginForm } from '@/components/admin/login-form';

export default function AdminLoginPage() {
  if (isAdminAuthenticated()) {
    redirect('/admin');
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[#f6f1e8] px-6">
      <div className="w-full max-w-md rounded-[32px] border border-border bg-white p-8 shadow-soft">
        <div className="text-xs uppercase tracking-[0.28em] text-charcoal/50">Private access</div>
        <h1 className="mt-3 font-heading text-5xl text-charcoal">Owner login</h1>
        <p className="mt-4 text-sm leading-7 text-charcoal/65">Use your secure admin credentials to access bookings, messages, and analytics.</p>
        <div className="mt-8">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
