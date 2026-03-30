import Link from 'next/link';
import EmailCapture from './EmailCapture';
import { WavyDividerBottom } from './WavyDivider';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <WavyDividerBottom color="var(--red-dark)" />

      <div className="bg-[--red-dark] text-white/80 relative">
        <div className="px-6 md:px-10 py-14 md:max-w-[1100px] md:mx-auto relative">
          <div className="md:grid md:grid-cols-3 md:gap-10 space-y-10 md:space-y-0">
            <div>
              <h3 className="font-display text-3xl text-[--yellow] mb-1">bydalya</h3>
              <p className="text-[--salmon] text-xs tracking-[0.2em] uppercase font-bold mb-3">WEARABLE ART</p>
              <p className="text-xs leading-relaxed text-white/30">
                Handcrafted in NYC. One-of-a-kind beaded jewelry made with love.
              </p>
            </div>

            <div>
              <h4 className="text-[9px] tracking-[0.3em] uppercase mb-4 text-white/30 font-bold">LINKS</h4>
              <div className="flex flex-col gap-2">
                <Link href="/shop" className="text-sm text-white/40 hover:text-[--yellow] transition-colors font-bold">Shop</Link>
                <Link href="/about" className="text-sm text-white/40 hover:text-[--yellow] transition-colors font-bold">About</Link>
                <a href="https://www.instagram.com/itsbydalya" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-[--yellow] transition-colors font-bold">Instagram</a>
                <a href="https://www.etsy.com/shop/byDALYA" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-[--yellow] transition-colors font-bold">Etsy</a>
              </div>
            </div>

            <div>
              <h4 className="text-[9px] tracking-[0.3em] uppercase mb-1 text-white/30 font-bold">STAY IN THE LOOP</h4>
              <p className="text-[--salmon] text-xs tracking-[0.2em] uppercase font-bold mb-3">DON&apos;T MISS A DROP</p>
              <EmailCapture variant="dark" />
            </div>
          </div>

          <div className="mt-12 overflow-hidden">
            <p className="font-display text-[5rem] md:text-[8rem] text-white/[0.04] leading-none text-center select-none">bydalya</p>
          </div>

          <div className="border-t border-white/5 mt-4 pt-5 flex justify-between items-center">
            <p className="text-[9px] text-white/15 font-bold">&copy; {new Date().getFullYear()} bydalya</p>
            <p className="text-[--salmon]/30 text-[9px] tracking-[0.2em] uppercase font-bold">MADE WITH LOVE IN NYC</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
