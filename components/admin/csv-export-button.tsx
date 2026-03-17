export function CsvExportButton({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="rounded-full border border-[#e8dcc4] bg-white px-4 py-2 text-sm text-charcoal">
      {label}
    </a>
  );
}
