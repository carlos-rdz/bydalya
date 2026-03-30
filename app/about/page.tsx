import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-14 relative overflow-hidden bg-[--cream]">
      <div className="px-6 md:px-10 pt-8 pb-20 md:max-w-[1100px] md:mx-auto">
        <p className="text-[--red] text-xs tracking-[0.4em] uppercase font-bold mb-2">THE STORY</p>
        <h1 className="font-serif text-4xl md:text-7xl italic font-black leading-tight">
          The story behind every bead.
        </h1>

        <div className="md:grid md:grid-cols-2 md:gap-12 mt-10">
          {/* Bio photo */}
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
            <Image
              src="/products/dalya-bio.jpg"
              alt="Dalya"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="mt-8 md:mt-0 md:flex md:flex-col md:justify-center">
            <h2 className="font-serif text-3xl md:text-4xl italic font-black">Hi, I&apos;m Dalya</h2>
            <p className="text-[--red] text-xs tracking-[0.3em] uppercase font-bold mt-1 mb-5">NICE TO MEET YOU</p>
            <div className="space-y-4 text-[--text]/50 text-sm leading-relaxed">
              <p>
                What started as a creative outlet quickly became a passion. I hand-select every
                stone, pearl, and bead — visiting gem shows, sourcing from artisan suppliers,
                always looking for that perfect combination of color and texture.
              </p>
              <p>
                Every piece is truly one of a kind. No molds, no mass-production. Each necklace
                and bracelet is designed and assembled by hand in my NYC studio.
              </p>
              <p>
                I believe jewelry should be fun, colorful, and make you feel amazing. Whether
                you&apos;re layering pieces or wearing a single statement necklace, I want my
                work to bring you joy.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="px-8 py-4 bg-[--red] text-white rounded-full text-xs tracking-[0.25em] uppercase font-bold active:scale-95 transition-transform shadow-[0_0_20px_rgba(196,30,42,0.3)]">
                SHOP PIECES
              </Link>
              <a href="https://www.instagram.com/itsbydalya" target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[--red]/20 rounded-full text-xs tracking-[0.25em] uppercase font-bold hover:border-[--red] hover:text-[--red] transition-colors">
                INSTAGRAM
              </a>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <p className="text-[--red] text-xs tracking-[0.4em] uppercase font-bold mb-2">HOW IT&apos;S MADE</p>
            <h2 className="font-serif text-3xl md:text-5xl italic font-black">The Process</h2>
          </div>

          <div className="space-y-8 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
            {[
              { num: '01', title: 'SOURCE', desc: 'Hand-selecting natural stones, freshwater pearls, and glass beads from artisan suppliers and gem shows.' },
              { num: '02', title: 'DESIGN', desc: 'Playing with colors, textures, and combinations until each piece feels just right.' },
              { num: '03', title: 'CRAFT', desc: 'Assembling each piece by hand with gold-filled hardware and secure clasps.' },
            ].map((item) => (
              <div key={item.num} className="text-center p-6">
                <span className="text-[--red]/15 font-serif text-7xl italic font-black">{item.num}</span>
                <h3 className="text-base font-bold tracking-[0.2em] uppercase -mt-3 mb-2">{item.title}</h3>
                <p className="text-xs text-[--text]/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
