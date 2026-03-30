'use client';

export default function ScrollArrow({ targetId }: { targetId: string }) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group"
    >
      <span className="text-[--red]/40 text-[10px] tracking-[0.3em] uppercase font-bold group-hover:text-[--red] transition-colors">
        SCROLL
      </span>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[--red]/40 group-hover:text-[--red] transition-colors animate-bounce">
        <path d="M4 8L10 14L16 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
