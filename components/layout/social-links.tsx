import { FacebookIcon, InstagramIcon, TiktokIcon, WhatsappIcon } from '@/components/icons';
import { FACEBOOK_URL, INSTAGRAM_URL, TIKTOK_URL, WHATSAPP_LINK } from '@/lib/constants';

const items = [
  { href: INSTAGRAM_URL, label: 'Instagram', icon: InstagramIcon },
  { href: FACEBOOK_URL, label: 'Facebook', icon: FacebookIcon },
  { href: TIKTOK_URL, label: 'TikTok', icon: TiktokIcon },
  { href: WHATSAPP_LINK, label: 'WhatsApp', icon: WhatsappIcon }
];

export function SocialLinks({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border ${
            dark ? 'border-white/15 bg-white/10 text-white' : 'border-border bg-white/70 text-charcoal dark:border-white/15 dark:bg-white/5 dark:text-white'
          } transition hover:border-gold/35 hover:text-gold`}
          aria-label={item.label}
        >
          <item.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
