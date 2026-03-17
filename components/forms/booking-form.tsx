'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { getOffers } from '@/lib/offers';
import { estimateBookingTotal } from '@/lib/pricing';
import type { BookingPayload, PaymentMethod } from '@/types/booking';
import type { Locale } from '@/types/locale';
import { CountrySelect } from '@/components/forms/country-select';
import { LanguageSelect } from '@/components/forms/language-select';
import { PhoneInput } from '@/components/forms/phone-input';
import { SpecialRequests } from '@/components/forms/special-requests';
import { BookingDatePicker } from '@/components/forms/booking-date-picker';
import { BookingGuestSelector } from '@/components/forms/booking-guest-selector';
import { BookingAddons } from '@/components/forms/booking-addons';
import { BookingPaymentOptions } from '@/components/forms/booking-payment-options';
import { BookingSummary } from '@/components/forms/booking-summary';
import { BookingSuccess } from '@/components/forms/booking-success';
import { BookingStepper } from '@/components/forms/booking-stepper';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { todayPlus } from '@/lib/date';

const basePayload: BookingPayload = {
  fullName: '',
  email: '',
  phone: '',
  country: 'France',
  preferredLanguage: 'en',
  experienceSlug: 'luxury-camp-1-night',
  preferredDate: '',
  checkIn: todayPlus(14),
  checkOut: todayPlus(15),
  adults: 2,
  children: 0,
  addons: [],
  specialRequests: '',
  paymentMethod: 'pay_later',
  estimatedTotal: 0
};

type BookingFormProps = {
  locale: Locale;
  initialExperience?: string;
};

export function BookingForm({ locale, initialExperience }: BookingFormProps) {
  const offers = getOffers();
  const [payload, setPayload] = useState<BookingPayload>({
    ...basePayload,
    preferredLanguage: locale,
    experienceSlug: initialExperience || basePayload.experienceSlug
  });
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const offer = useMemo(() => offers.find((item) => item.slug === payload.experienceSlug), [offers, payload.experienceSlug]);
  const isCamp = offer?.category === 'camp';
  const estimatedTotal = useMemo(() => estimateBookingTotal(payload), [payload]);

  function update<K extends keyof BookingPayload>(key: K, value: BookingPayload[K]) {
    setPayload((current) => ({
      ...current,
      [key]: value,
      estimatedTotal: key === 'estimatedTotal' ? Number(value) : current.estimatedTotal
    }));
  }

  function toggleAddon(addonKey: string) {
    setPayload((current) => {
      const addons = current.addons.includes(addonKey)
        ? current.addons.filter((item) => item !== addonKey)
        : [...current.addons, addonKey];
      return { ...current, addons };
    });
  }

  async function handleSubmit(event: import('react').FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('loading');

    const requestBody = { ...payload, estimatedTotal };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) throw new Error('Booking failed');

      try {
        const sessionId = window.localStorage.getItem('erg-chebbi-session-id');
        if (sessionId) {
          await fetch('/api/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              type: 'conversion',
              sessionId,
              path: window.location.pathname,
              value: estimatedTotal
            })
          });
        }
      } catch {}

      setState('success');
      setPayload({ ...basePayload, preferredLanguage: locale, experienceSlug: initialExperience || basePayload.experienceSlug });
    } catch {
      setState('error');
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <ScrollToTop active={state === 'success'} />
      <Card>
        {state === 'success' ? <div className="mb-6"><BookingSuccess /></div> : null}
        {state === 'error' ? (
          <div className="mb-6 rounded-2xl bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
            We could not submit your request. Please review the form and try again.
          </div>
        ) : null}

        <BookingStepper />

        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-charcoal/55 dark:text-white/55">Full name</span>
              <Input value={payload.fullName} onChange={(event) => update('fullName', event.target.value)} required />
            </label>
            <label className="grid gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-charcoal/55 dark:text-white/55">Email</span>
              <Input type="email" value={payload.email} onChange={(event) => update('email', event.target.value)} required />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-charcoal/55 dark:text-white/55">Phone / WhatsApp</span>
              <PhoneInput value={payload.phone} onChange={(value) => update('phone', value)} />
            </label>
            <label className="grid gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-charcoal/55 dark:text-white/55">Country</span>
              <CountrySelect value={payload.country} onChange={(value) => update('country', value)} />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-charcoal/55 dark:text-white/55">Preferred language</span>
              <LanguageSelect value={payload.preferredLanguage} onChange={(value) => update('preferredLanguage', value as BookingPayload['preferredLanguage'])} />
            </label>
            <label className="grid gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-charcoal/55 dark:text-white/55">Experience</span>
              <Select value={payload.experienceSlug} onChange={(event) => update('experienceSlug', event.target.value)}>
                {offers.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.title[locale]}
                  </option>
                ))}
              </Select>
            </label>
          </div>

          {isCamp ? (
            <div className="grid gap-4 md:grid-cols-2">
              <BookingDatePicker label="Check-in" min={todayPlus(1)} value={payload.checkIn || ''} onChange={(value) => update('checkIn', value)} />
              <BookingDatePicker label="Check-out" min={payload.checkIn || todayPlus(2)} value={payload.checkOut || ''} onChange={(value) => update('checkOut', value)} />
            </div>
          ) : (
            <BookingDatePicker label="Preferred date" min={todayPlus(1)} value={payload.preferredDate || ''} onChange={(value) => update('preferredDate', value)} />
          )}

          <BookingGuestSelector adults={payload.adults} children={payload.children} onAdults={(value) => update('adults', value)} onChildren={(value) => update('children', value)} />

          <BookingAddons offer={offer} locale={locale} value={payload.addons} onToggle={toggleAddon} />

          <div className="grid gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-charcoal/55 dark:text-white/55">Special requests</span>
            <SpecialRequests value={payload.specialRequests || ''} onChange={(value) => update('specialRequests', value)} />
          </div>

          <div className="grid gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-charcoal/55 dark:text-white/55">Payment method</span>
            <BookingPaymentOptions value={payload.paymentMethod as PaymentMethod} onChange={(value) => update('paymentMethod', value)} />
          </div>

          <Button type="submit">{state === 'loading' ? 'Sending request...' : 'Submit booking request'}</Button>
        </form>
      </Card>

      <BookingSummary payload={{ ...payload, estimatedTotal }} offer={offer} locale={locale} />
    </div>
  );
}
