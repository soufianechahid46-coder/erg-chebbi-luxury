import { Card } from '@/components/ui/card';
import { EmailIcon, MapPinIcon, PhoneIcon } from '@/components/icons';
import { contactDetails } from '@/content/site/contact';
import { SocialLinks } from '@/components/layout/social-links';

export function ContactPanel() {
  return (
    <Card className="space-y-6">
      <div>
        <div className="text-xs uppercase tracking-[0.24em] text-charcoal/55 dark:text-white/55">Contact</div>
        <h3 className="mt-3 font-heading text-3xl text-charcoal dark:text-white">Plan your Merzouga stay</h3>
      </div>
      <div className="space-y-4 text-sm text-charcoal/70 dark:text-white/70">
        <div className="flex items-center gap-3"><MapPinIcon className="h-5 w-5 text-gold" /> {contactDetails.location}</div>
        <div className="flex items-center gap-3"><EmailIcon className="h-5 w-5 text-gold" /> {contactDetails.email}</div>
        <div className="flex items-center gap-3"><PhoneIcon className="h-5 w-5 text-gold" /> {contactDetails.whatsapp}</div>
      </div>
      <SocialLinks />
    </Card>
  );
}
