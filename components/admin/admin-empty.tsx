export function AdminEmpty({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[28px] border border-dashed border-[#e8dcc4] bg-white p-8 text-center">
      <h3 className="font-heading text-3xl text-charcoal">{title}</h3>
      <p className="mt-3 text-sm text-charcoal/65">{description}</p>
    </div>
  );
}
