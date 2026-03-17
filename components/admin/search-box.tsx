'use client';

export function SearchBox({ placeholder = 'Search...' }: { placeholder?: string }) {
  return <input className="w-full rounded-2xl border border-[#e8dcc4] bg-white px-4 py-3 text-sm" placeholder={placeholder} />;
}
