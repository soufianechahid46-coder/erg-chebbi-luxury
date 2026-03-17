'use client';

import { useState } from 'react';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event: import('react').FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      setError('Invalid credentials');
      return;
    }

    window.location.href = '/admin';
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {error ? <div className="rounded-2xl bg-red-500/10 px-4 py-3 text-sm text-red-700">{error}</div> : null}
      <input className="rounded-2xl border border-border bg-white px-4 py-3" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
      <input className="rounded-2xl border border-border bg-white px-4 py-3" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <button className="rounded-full bg-charcoal px-4 py-3 text-white">Sign in</button>
    </form>
  );
}
