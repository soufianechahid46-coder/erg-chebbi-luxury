export function SettingsPanel() {
  return (
    <div className="rounded-[28px] border border-[#e8dcc4] bg-white p-6 shadow-soft">
      <h3 className="font-heading text-3xl text-charcoal">Configuration pointers</h3>
      <ul className="mt-6 space-y-3 text-sm text-charcoal/70">
        <li>Images and videos: content/site/media.ts</li>
        <li>Offer prices and inclusions: content/site/offers/</li>
        <li>Translations: content/locales/</li>
        <li>Payments and email env vars: .env.local</li>
        <li>Supabase schema: supabase/schema.sql</li>
      </ul>
    </div>
  );
}
