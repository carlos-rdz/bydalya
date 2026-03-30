import Link from 'next/link';
import { getFeaturedProducts, getAllProducts } from '@/lib/products';
import config from '@/data/config.json';
import ProductCard from '@/components/ProductCard';
import CountdownTimer from '@/components/CountdownTimer';
import EmailCapture from '@/components/EmailCapture';
import ScrollArrow from '@/components/ScrollArrow';
import { ScatteredDeco, Star4, Star5, Dot, XMark, Ring } from '@/components/Stickers';
import { WavyDividerTop, WavyDividerBottom } from '@/components/WavyDivider';
import IconMarquee from '@/components/IconMarquee';
import MixedText from '@/components/MixedText';

export default function Home() {
  const featured = getFeaturedProducts();
  const allProducts = getAllProducts();

  return (
    <div>
      {/* ═══ HERO — FULL RED like the inspo ═══ */}
      <section id="hero" className="snap-section relative flex flex-col items-center justify-center bg-[--red] px-6 overflow-hidden">
        {/* Drifting watermark */}
        <div className="absolute inset-[-50px] flex flex-col justify-center items-center opacity-[0.08] pointer-events-none overflow-hidden -rotate-6 animate-drift">
          {Array.from({ length: 10 }).map((_, i) => (
            <p key={i} className="font-display text-[--yellow] text-[5rem] leading-none whitespace-nowrap">
              bydalya bydalya bydalya bydalya
            </p>
          ))}
        </div>

        <p className="text-[--yellow] text-sm tracking-[0.4em] uppercase font-black relative z-10">
          HANDCRAFTED IN NYC
        </p>
        <h1 className="font-display text-[--yellow] text-[4.5rem] sm:text-[7rem] md:text-[10rem] leading-[0.8] text-center relative z-10 mt-4">
          bydalya
        </h1>
        <p className="text-white text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] uppercase font-bold relative z-10 mt-4">
          <MixedText text="ONE OF A KIND" />
        </p>

        <p className="mt-6 text-white/60 text-base max-w-[300px] mx-auto text-center leading-relaxed relative z-10">
          {config.description}
        </p>
        <Link
          href="/shop"
          className="mt-10 px-12 py-5 bg-[--yellow] text-[--red] rounded-full text-base tracking-[0.3em] uppercase font-bold hover:scale-110 active:scale-95 transition-all animate-bounce-pulse shadow-[0_0_30px_rgba(255,244,204,0.4)] relative z-10"
        >
          SHOP NOW
        </Link>

        <ScrollArrow targetId="featured" />
      </section>

      {/* ═══ ICON MARQUEE — flower/star strip like inspo ═══ */}
      <IconMarquee />

      {/* ═══ FEATURED — yellow bg ═══ */}
      <section id="featured" className="bg-[--yellow] py-16 md:py-24 relative overflow-hidden">
        <ScatteredDeco seed={2} />

        <div className="px-6 mb-8 relative z-10">
          <p className="text-[--red] text-xs tracking-[0.4em] uppercase font-bold mb-2">NEW IN</p>
          <h2 className="font-serif text-[--red] text-5xl md:text-7xl italic font-black">Latest Pieces</h2>
        </div>

        <div className="h-scroll md:hidden relative z-10">
          {featured.map((p) => (
            <div key={p.slug} className="w-[75vw] max-w-[300px]">
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-3 gap-5 px-10 max-w-[1200px] mx-auto stagger-grid relative z-10">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <div className="px-6 mt-8 relative z-10">
          <Link href="/shop" className="text-sm tracking-[0.3em] uppercase text-[--red] font-bold hover:underline">
            VIEW ALL &rarr;
          </Link>
        </div>
      </section>

      {/* ═══ TEXT MARQUEE — reversed ═══ */}
      <div className="bg-[--red] py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="font-mocha-sans text-[--yellow] text-xl mx-4 font-bold">
              ONE OF A KIND &bull; HANDMADE WITH LOVE &bull; NO TWO ALIKE &bull; NYC &bull;
            </span>
          ))}
        </div>
      </div>

      {/* ═══ STATEMENT — cream bg, rotated text ═══ */}
      <section className="bg-[--cream] py-14 md:py-20 px-6 relative overflow-hidden">
        <ScatteredDeco seed={3} />
        <Star4 className="absolute top-10 left-[45%] w-6 h-6 text-[--red]/15 animate-twinkle" />
        <XMark className="absolute bottom-16 right-[15%] w-4 h-4 text-[--red]/10 animate-twinkle-d2" />

        <div className="text-center max-w-3xl mx-auto relative z-10">
          <p className="text-[--text] text-4xl sm:text-5xl md:text-7xl leading-[1.05]">
            <MixedText text="Every bead is" />
          </p>
          <p className="text-[--red] text-5xl sm:text-6xl md:text-8xl leading-[0.9] -rotate-2 my-2">
            <MixedText text="hand-selected." />
          </p>
          <p className="text-[--text] text-4xl sm:text-5xl md:text-7xl leading-[1.05]">
            <MixedText text="Every piece is" />
          </p>
          <p className="text-[--red] text-5xl sm:text-6xl md:text-8xl leading-[0.9] rotate-1 mt-2">
            <MixedText text="unique!" />
          </p>
        </div>
      </section>

      {/* ═══ ICON MARQUEE — reversed ═══ */}
      <IconMarquee bg="var(--yellow)" color="var(--red)" />

      {/* ═══ BYDALYA STACKED — wavy SVG text on full red ═══ */}
      <section className="bg-[--red] py-10 overflow-hidden relative">
        <Star5 className="absolute top-4 right-8 w-5 h-5 text-[--yellow]/30 animate-twinkle" />
        <Dot className="absolute bottom-4 left-10 w-2 h-2 text-[--yellow]/25 animate-twinkle-d1" />
        <Ring className="absolute top-[50%] left-4 w-4 h-4 text-[--yellow]/20 animate-twinkle-d3" />
        <svg viewBox="0 0 900 300" className="w-full h-auto relative z-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path id="wave1" d="M0,80 Q200,20 450,80 Q700,140 950,80" />
            <path id="wave2" d="M0,160 Q250,220 450,160 Q650,100 950,160" />
            <path id="wave3" d="M0,240 Q200,180 450,240 Q700,300 950,240" />
          </defs>
          <text fontSize="70" fontWeight="bold" fill="var(--yellow)" fontFamily="var(--font-mocha)">
            <textPath href="#wave1">bydalya bydalya bydalya bydalya</textPath>
          </text>
          <text fontSize="70" fontWeight="bold" fill="rgba(255,244,204,0.3)" fontFamily="var(--font-mocha)">
            <textPath href="#wave2">bydalya bydalya bydalya bydalya</textPath>
          </text>
          <text fontSize="70" fontWeight="bold" fill="var(--yellow)" fontFamily="var(--font-mocha)">
            <textPath href="#wave3">bydalya bydalya bydalya bydalya</textPath>
          </text>
        </svg>
      </section>

      {/* ═══ ICON MARQUEE ═══ */}
      <IconMarquee bg="var(--yellow-warm)" color="var(--red-bright)" />

      {/* ═══ DROP COUNTDOWN — deep burgundy ═══ */}
      <WavyDividerBottom color="var(--red-dark)" />
      <section className="bg-[--red-dark] py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, var(--yellow) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px'
        }} />
        <Star4 className="absolute top-10 right-10 w-5 h-5 text-[--yellow]/30 animate-twinkle" />
        <Dot className="absolute bottom-16 left-8 w-2.5 h-2.5 text-[--yellow]/40 animate-twinkle-d3" />
        <XMark className="absolute top-[50%] right-6 w-3 h-3 text-[--yellow]/25 animate-twinkle-d5" />
        <Ring className="absolute top-[30%] left-6 w-4 h-4 text-[--yellow]/20 animate-twinkle-d2" />
        <Star5 className="absolute bottom-[35%] right-[20%] w-4 h-4 text-[--yellow]/30 animate-twinkle-d4" />

        <div className="text-center relative z-10">
          <p className="text-[--salmon] text-xs tracking-[0.4em] uppercase font-bold mb-4">NEXT DROP</p>
          <h2 className="font-serif text-white text-4xl md:text-7xl italic font-black mb-2">
            {config.nextDrop.teaser}
          </h2>
          <p className="text-white/30 text-xs tracking-[0.25em] uppercase font-bold mb-10">
            {new Date(config.nextDrop.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
          <div className="flex justify-center mb-12">
            <CountdownTimer targetDate={config.nextDrop.date} />
          </div>
          <div className="max-w-sm mx-auto">
            <p className="text-[--salmon]/80 text-sm font-bold mb-3 uppercase tracking-[0.2em]">GET EARLY ACCESS</p>
            <EmailCapture variant="dark" />
          </div>
        </div>
      </section>
      <WavyDividerTop color="var(--yellow)" />

      {/* ═══ SOCIAL PROOF ═══ */}
      <section className="bg-[--yellow] py-16 px-6 relative overflow-hidden">
        <ScatteredDeco seed={5} />

        <div className="text-center mb-10 relative z-10">
          <p className="text-[--red] text-xs tracking-[0.4em] uppercase font-bold mb-2">WHAT PEOPLE SAY</p>
          <h2 className="font-serif text-[--red] text-5xl md:text-6xl italic font-black">5.0 Stars</h2>
          <div className="flex justify-center gap-1 mt-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-[--red] text-3xl">&#9733;</span>
            ))}
          </div>
        </div>

        <div className="h-scroll md:flex md:justify-center md:gap-6 md:overflow-visible md:px-0 relative z-10">
          {[
            { text: "Beautiful necklace! The quality is amazing and it looks even better in person. Dalya is so talented!", name: "Sarah M.", piece: "Limoncello Hour" },
            { text: "I get compliments EVERY time I wear this. Truly one of a kind. Already eyeing my next piece!", name: "Jen R.", piece: "Turquoise Ibiza" },
            { text: "The craftsmanship is incredible. You can tell how much love goes into each piece!", name: "Maya L.", piece: "Funky Heart" },
          ].map((review) => (
            <div key={review.name} className="w-[80vw] max-w-[320px] md:w-auto md:max-w-[300px] bg-white rounded-2xl p-6 border-[3px] border-[--red]/20 shadow-[4px_4px_0px_var(--red)] flex-shrink-0 hover:animate-jelly transition-transform animate-tilt">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-[--red] text-sm">&#9733;</span>
                ))}
              </div>
              <p className="text-[--text]/60 text-sm leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
              <p className="font-bold text-sm">{review.name}</p>
              <p className="text-[--red]/50 text-xs font-bold tracking-[0.1em] uppercase mt-0.5">Purchased: {review.piece}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 relative z-10">
          <a href="https://www.etsy.com/shop/byDALYA" target="_blank" rel="noopener noreferrer"
            className="text-xs tracking-[0.2em] uppercase text-[--red] font-bold hover:underline">
            SEE ALL REVIEWS ON ETSY &rarr;
          </a>
        </div>
      </section>

      {/* ═══ ICON MARQUEE ═══ */}
      <IconMarquee bg="var(--red)" color="var(--yellow)" />

      {/* ═══ ALL PIECES ═══ */}
      <section className="bg-[--cream] px-4 py-16 md:py-24 relative overflow-hidden">
        <ScatteredDeco seed={6} />

        <div className="px-2 mb-8 relative z-10">
          <p className="text-[--red] text-xs tracking-[0.4em] uppercase font-bold mb-2">EXPLORE</p>
          <h2 className="font-serif text-[--red] text-5xl md:text-7xl italic font-black">All Pieces</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5 md:max-w-[1200px] md:mx-auto stagger-grid relative z-10">
          {allProducts.slice(0, 8).map((p, i) => (
            <ProductCard key={p.slug} product={p} size={i === 0 ? 'wide' : i === 3 ? 'tall' : 'default'} />
          ))}
        </div>

        <div className="mt-10 text-center relative z-10">
          <Link href="/shop" className="px-12 py-5 bg-[--red] text-[--yellow] rounded-full text-base tracking-[0.3em] uppercase font-bold hover:scale-105 active:scale-95 transition-all shadow-[4px_4px_0px_var(--red-dark)] inline-block animate-glow">
            SEE EVERYTHING
          </Link>
        </div>
      </section>

      {/* ═══ INSTAGRAM CTA — full red ═══ */}
      <WavyDividerBottom color="var(--red)" />
      <section className="bg-[--red] py-16 px-6 relative overflow-hidden">
        <Star4 className="absolute top-[25%] right-[8%] w-6 h-6 text-[--yellow]/20 animate-twinkle" />
        <Dot className="absolute bottom-[18%] left-[8%] w-3 h-3 text-[--yellow]/25 animate-twinkle-d2" />
        <Ring className="absolute top-8 left-[30%] w-5 h-5 text-[--yellow]/20 animate-twinkle-d1" />
        <XMark className="absolute top-[55%] left-4 w-3 h-3 text-[--yellow]/15 animate-twinkle-d4" />
        <Star5 className="absolute bottom-[35%] right-6 w-4 h-4 text-[--yellow]/20 animate-twinkle-d3" />

        <div className="text-center relative z-10">
          <p className="text-[--yellow] text-xs tracking-[0.4em] uppercase font-bold mb-2">FOLLOW THE JOURNEY</p>
          <h2 className="font-serif text-white text-5xl md:text-7xl italic font-black mb-4">@itsbydalya</h2>
          <p className="text-white/50 text-sm mb-8 max-w-xs mx-auto">
            New pieces first, behind-the-scenes, pop-ups, and more.
          </p>
          <a href="https://www.instagram.com/itsbydalya" target="_blank" rel="noopener noreferrer"
            className="px-10 py-5 bg-[--yellow] text-[--red] rounded-full text-base tracking-[0.25em] uppercase font-bold hover:scale-105 active:scale-95 transition-all shadow-[4px_4px_0px_var(--red-dark)] inline-block">
            FOLLOW ON INSTAGRAM
          </a>
        </div>
      </section>

      {/* ═══ ICON MARQUEE ═══ */}
      <IconMarquee bg="var(--yellow)" color="var(--red)" />

      {/* ═══ VALUES ═══ */}
      <section className="bg-[--yellow] px-6 py-12 md:py-20 relative overflow-hidden">
        <ScatteredDeco seed={1} />
        <div className="space-y-10 md:grid md:grid-cols-3 md:gap-8 md:space-y-0 md:max-w-[1000px] md:mx-auto relative z-10">
          {[
            { num: '01', title: 'ONE OF A KIND', desc: 'Every piece is unique. When it\'s gone, it\'s gone forever.' },
            { num: '02', title: 'HANDCRAFTED', desc: 'Made by hand in NYC. Every stone hand-selected.' },
            { num: '03', title: 'MADE WITH LOVE', desc: 'Designed with intention, care, and heart.' },
          ].map((item) => (
            <div key={item.num}>
              <span className="text-[--red]/15 font-serif text-8xl italic font-black">{item.num}</span>
              <h3 className="text-lg font-bold tracking-[0.15em] uppercase -mt-4 mb-2">{item.title}</h3>
              <p className="text-sm text-[--text]/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
