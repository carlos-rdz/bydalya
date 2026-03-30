'use client';

// Alternates between Mocha Bubble and Mocha Sans on every other letter
export default function MixedText({ text, className = '', bubbleClass = 'font-display', sansClass = 'font-mocha-sans' }: {
  text: string;
  className?: string;
  bubbleClass?: string;
  sansClass?: string;
}) {
  let letterIndex = 0;

  return (
    <span className={className}>
      {text.split('').map((char, i) => {
        if (char === ' ') {
          return <span key={i}>{' '}</span>;
        }
        const isBubble = letterIndex % 2 === 0;
        letterIndex++;
        return (
          <span key={i} className={isBubble ? bubbleClass : sansClass}>
            {char}
          </span>
        );
      })}
    </span>
  );
}
