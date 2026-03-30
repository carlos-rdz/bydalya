export default function FontTest() {
  return (
    <div className="pt-20 pb-20 px-6 bg-[--red] min-h-screen">
      <p className="text-[--yellow] text-xs tracking-[0.4em] uppercase font-bold mb-10 text-center">PICK YOUR FAVORITE</p>

      {/* Option 1: Mocha Bubble (current) */}
      <div className="mb-14 text-center">
        <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-bold mb-3">1 — MOCHA BUBBLE (CURRENT)</p>
        <h1 className="font-display text-[--yellow] text-[4rem] leading-[0.85]">
          ONE OF
          <br />
          <span className="text-white">A KIND.</span>
        </h1>
      </div>

      <div className="border-t border-white/10 mb-14" />

      {/* Option 2: Mocha Sans */}
      <div className="mb-14 text-center">
        <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-bold mb-3">2 — MOCHA SANS</p>
        <h1 className="font-mocha-sans text-[--yellow] text-[4rem] leading-[0.85]">
          ONE OF
          <br />
          <span className="text-white">A KIND.</span>
        </h1>
      </div>

      <div className="border-t border-white/10 mb-14" />

      {/* Option 3: Mocha Outline */}
      <div className="mb-14 text-center">
        <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-bold mb-3">3 — MOCHA OUTLINE</p>
        <h1 className="font-mocha-outline text-[--yellow] text-[4rem] leading-[0.85]">
          ONE OF
          <br />
          <span className="text-white">A KIND.</span>
        </h1>
      </div>

      <div className="border-t border-white/10 mb-14" />

      {/* Option 4: Mix — Bubble for "ONE OF" + Sans for "A KIND" */}
      <div className="mb-14 text-center">
        <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-bold mb-3">4 — MIX (BUBBLE + SANS)</p>
        <h1 className="text-[4rem] leading-[0.85]">
          <span className="font-display text-[--yellow]">ONE OF</span>
          <br />
          <span className="font-mocha-sans text-white">A KIND.</span>
        </h1>
      </div>

      <div className="border-t border-white/10 mb-14" />

      {/* Option 5: Mix — Sans for "ONE OF" + Bubble for "A KIND" */}
      <div className="mb-8 text-center">
        <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-bold mb-3">5 — MIX (SANS + BUBBLE)</p>
        <h1 className="text-[4rem] leading-[0.85]">
          <span className="font-mocha-sans text-[--yellow]">ONE OF</span>
          <br />
          <span className="font-display text-white">A KIND.</span>
        </h1>
      </div>
    </div>
  );
}
