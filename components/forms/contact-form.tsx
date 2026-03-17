'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  preferredDate: ''
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(event: import('react').FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) throw new Error('Failed');
      setStatus('success');
      setForm(initialState);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <Card>
      {status === 'success' ? (
        <div className="mb-6 rounded-2xl bg-gold/10 px-4 py-3 text-sm text-charcoal dark:text-white">
          Thank you. Your message has been sent.
        </div>
      ) : null}
      {status === 'error' ? (
        <div className="mb-6 rounded-2xl bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
          Something went wrong. Please try again.
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Input placeholder="Full name" value={form.fullName} onChange={(event) => setForm({ ...form, fullName: event.target.value })} required />
          <Input type="email" placeholder="Email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Input placeholder="Phone / WhatsApp" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
          <Input placeholder="Preferred travel date" type="date" value={form.preferredDate} onChange={(event) => setForm({ ...form, preferredDate: event.target.value })} />
        </div>
        <Input placeholder="Subject" value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} required />
        <Textarea placeholder="Tell us what you would like to plan" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required />
        <Button type="submit">{status === 'loading' ? 'Sending...' : 'Send message'}</Button>
      </form>
    </Card>
  );
}
