export function WavyDividerTop({ color = 'var(--yellow)', className = '' }: { color?: string; className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none -mb-px ${className}`}>
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-8 md:h-12" fill={color}>
        <path d="M0 30 Q150 0 300 30 Q450 60 600 30 Q750 0 900 30 Q1050 60 1200 30 L1200 60 L0 60Z" />
      </svg>
    </div>
  );
}

export function WavyDividerBottom({ color = 'var(--yellow)', className = '' }: { color?: string; className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none -mt-px ${className}`}>
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-8 md:h-12" fill={color}>
        <path d="M0 30 Q150 60 300 30 Q450 0 600 30 Q750 60 900 30 Q1050 0 1200 30 L1200 0 L0 0Z" />
      </svg>
    </div>
  );
}
