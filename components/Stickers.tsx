'use client';

// 4-point star — editorial, fashion-forward
export function Star4({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={`pointer-events-none ${className}`} fill="currentColor" style={style}>
      <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
    </svg>
  );
}

// Classic 5-point star
export function Star5({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={`pointer-events-none ${className}`} fill="currentColor" style={style}>
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}

// Small dot
export function Dot({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 8 8" className={`pointer-events-none ${className}`} fill="currentColor" style={style}>
      <circle cx="4" cy="4" r="4" />
    </svg>
  );
}

// X mark
export function XMark({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 16 16" className={`pointer-events-none ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={style}>
      <line x1="2" y1="2" x2="14" y2="14" />
      <line x1="14" y1="2" x2="2" y2="14" />
    </svg>
  );
}

// Thin ring / circle outline
export function Ring({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 20 20" className={`pointer-events-none ${className}`} fill="none" stroke="currentColor" strokeWidth="2" style={style}>
      <circle cx="10" cy="10" r="8" />
    </svg>
  );
}

// Diagonal arrow
export function Arrow({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 16 16" className={`pointer-events-none ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <line x1="4" y1="12" x2="12" y2="4" />
      <polyline points="6 4 12 4 12 10" />
    </svg>
  );
}

// Scattered decorations — editorial, not kidcore
export function ScatteredDeco({ seed = 0, color = 'text-[--red]/20' }: { seed?: number; color?: string }) {
  const items = [
    { El: Star4, cls: 'w-4 h-4 animate-twinkle', pos: 'top-10 right-6' },
    { El: Dot, cls: 'w-2 h-2 animate-twinkle-d1', pos: 'top-[22%] left-5' },
    { El: Star5, cls: 'w-3 h-3 animate-twinkle-d2', pos: 'top-[40%] right-10' },
    { El: XMark, cls: 'w-3 h-3 animate-twinkle-d3', pos: 'bottom-[32%] left-8' },
    { El: Dot, cls: 'w-1.5 h-1.5 animate-twinkle-d4', pos: 'bottom-16 right-12' },
    { El: Ring, cls: 'w-4 h-4 animate-twinkle-d5', pos: 'top-[58%] left-12' },
    { El: Star4, cls: 'w-3 h-3 animate-twinkle-d2', pos: 'top-16 left-[40%]' },
    { El: Dot, cls: 'w-2 h-2 animate-twinkle-d4', pos: 'bottom-[24%] left-[45%]' },
    { El: Star5, cls: 'w-3 h-3 animate-twinkle', pos: 'top-[35%] right-[22%]' },
    { El: XMark, cls: 'w-2.5 h-2.5 animate-twinkle-d3', pos: 'bottom-[45%] right-5' },
    { El: Dot, cls: 'w-1.5 h-1.5 animate-twinkle-d1', pos: 'top-12 left-[62%]' },
    { El: Ring, cls: 'w-3 h-3 animate-twinkle-d5', pos: 'bottom-10 left-[28%]' },
  ];

  const shifted = [...items.slice(seed % items.length), ...items.slice(0, seed % items.length)];

  return (
    <>
      {shifted.map((item, i) => (
        <item.El key={i} className={`absolute ${item.pos} ${item.cls} ${color}`} />
      ))}
    </>
  );
}
