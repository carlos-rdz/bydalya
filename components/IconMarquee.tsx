'use client';

// Repeating icon strip like the flower/star row in the inspo screenshots
export default function IconMarquee({ bg = 'var(--salmon)', color = 'var(--red)' }: { bg?: string; color?: string }) {
  const icons = ['✿', '✸', '❀', '✷', '●', '✿', '✸', '❀', '✷', '●'];

  return (
    <div className="overflow-hidden py-2" style={{ background: bg }}>
      <div className="animate-marquee whitespace-nowrap flex">
        {Array.from({ length: 4 }).map((_, repeat) => (
          <div key={repeat} className="flex items-center">
            {icons.map((icon, i) => (
              <span key={`${repeat}-${i}`} className="text-2xl mx-3" style={{ color }}>{icon}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
