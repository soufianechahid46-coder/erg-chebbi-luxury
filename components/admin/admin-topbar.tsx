'use client';

export function AdminTopbar() {
  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    window.location.href = '/admin/login';
  }

  return (
    <header className="border-b border-[#e8dcc4] bg-white/75 px-6 py-4 backdrop-blur md:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl text-charcoal">Owner dashboard</h1>
          <p className="text-sm text-charcoal/60">Bookings, messages, revenue estimates, and traffic signals.</p>
        </div>
        <button onClick={handleLogout} className="rounded-full border border-[#e8dcc4] bg-white px-4 py-2 text-sm">
          Log out
        </button>
      </div>
    </header>
  );
}
