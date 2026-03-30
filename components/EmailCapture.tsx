'use client';

import { useState } from 'react';

export default function EmailCapture({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setStatus('success'); setEmail(''); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  if (status === 'success') {
    return <p className={`font-sans font-bold text-xl ${variant === 'dark' ? 'text-[--yellow]' : 'text-[--red]'}`}>you&apos;re on the list!!!</p>;
  }

  const dark = variant === 'dark';

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className={`flex-1 px-4 py-3 rounded-full border-2 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[--red]/50 ${
          dark ? 'bg-white/10 border-white/15 text-white placeholder:text-white/30' : 'bg-white border-[--red]/20 text-[--text] placeholder:text-[--text]/30'
        }`}
      />
      <button type="submit" className={`px-6 py-3 rounded-full text-sm font-bold active:scale-95 transition-all ${
        dark ? 'bg-[--yellow] text-[--red]' : 'bg-[--red] text-white'
      }`}>
        JOIN
      </button>
    </form>
  );
}
