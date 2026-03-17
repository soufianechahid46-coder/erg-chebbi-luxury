'use client';

import { useState } from 'react';

type BookingStatusFormProps = {
  id: string;
  currentStatus: string;
};

export function BookingStatusForm({ id, currentStatus }: BookingStatusFormProps) {
  const [status, setStatus] = useState(currentStatus);
  const [saving, setSaving] = useState(false);

  async function save() {
    setSaving(true);
    try {
      await fetch(`/api/admin/bookings/${id}/status`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      window.location.reload();
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <select value={status} onChange={(event) => setStatus(event.target.value)} className="rounded-full border border-[#e8dcc4] bg-white px-3 py-2 text-xs">
        <option value="pending">pending</option>
        <option value="confirmed">confirmed</option>
        <option value="paid">paid</option>
        <option value="cancelled">cancelled</option>
      </select>
      <button type="button" onClick={save} disabled={saving} className="rounded-full bg-charcoal px-3 py-2 text-xs text-white">
        {saving ? 'Saving...' : 'Save'}
      </button>
    </div>
  );
}
