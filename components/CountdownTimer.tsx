'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calc = () => {
      const d = new Date(targetDate).getTime() - Date.now();
      if (d <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(d / 86400000),
        hours: Math.floor((d / 3600000) % 24),
        minutes: Math.floor((d / 60000) % 60),
        seconds: Math.floor((d / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const i = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(i);
  }, [targetDate]);

  if (!mounted) return null;

  const blocks = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hrs' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Sec' },
  ];

  return (
    <div className="flex gap-3">
      {blocks.map((b) => (
        <div key={b.label} className="text-center">
          <div className="bg-[--yellow] text-[--red] w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-[3px_3px_0px_var(--salmon)]">
            {String(b.value).padStart(2, '0')}
          </div>
          <p className="text-[9px] text-white/40 mt-1.5 tracking-[0.2em] uppercase font-bold">{b.label}</p>
        </div>
      ))}
    </div>
  );
}
