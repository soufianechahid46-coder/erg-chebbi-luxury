import type { ExperienceOffer } from '@/types/offer';
import { Checkbox } from '@/components/ui/checkbox';
import type { Locale } from '@/types/locale';
import { formatMoney } from '@/lib/money';

type BookingAddonsProps = {
  offer?: ExperienceOffer;
  locale: Locale;
  value: string[];
  onToggle: (key: string) => void;
};

export function BookingAddons({ offer, locale, value, onToggle }: BookingAddonsProps) {
  if (!offer?.addons?.length) return null;
  return (
    <div className="grid gap-3">
      <div className="text-xs uppercase tracking-[0.2em] text-charcoal/55 dark:text-white/55">Add-ons</div>
      {offer.addons.map((addon) => {
        const checked = value.includes(addon.key);
        return (
          <label key={addon.key} className="flex items-center justify-between rounded-2xl border border-border bg-white/70 px-4 py-3 dark:bg-white/5">
            <span className="flex items-center gap-3 text-sm">
              <Checkbox checked={checked} onChange={() => onToggle(addon.key)} />
              <span>{addon.label[locale]}</span>
            </span>
            <span className="text-sm text-charcoal/70 dark:text-white/70">{formatMoney(addon.price)}</span>
          </label>
        );
      })}
    </div>
  );
}
