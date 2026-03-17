'use client';

import { FloatingAction } from '@/components/ui/floating-action';
import { Button } from '@/components/ui/button';
import { WHATSAPP_LINK } from '@/lib/constants';

export function FloatingContact({ bookingHref }: { bookingHref: string }) {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <FloatingAction>
        <Button href={bookingHref} className="shadow-soft">
          Book now
        </Button>
      </FloatingAction>
      <FloatingAction>
        <Button href={WHATSAPP_LINK} variant="secondary" className="shadow-soft">
          Quick WhatsApp
        </Button>
      </FloatingAction>
    </div>
  );
}
