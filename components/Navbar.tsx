'use client';

import Link from 'next/link';
import { useCart } from './CartProvider';
import { useState } from 'react';

export default function Navbar() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[--yellow]/90 backdrop-blur-md border-b-2 border-[--red]/10">
        <div className="px-5 h-14 flex items-center justify-between">
          <Link href="/" className="font-display text-3xl text-[--red]">
            bydalya
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/cart" className="text-[10px] tracking-[0.3em] uppercase text-[--text]/60 font-bold">
              BAG{itemCount > 0 && <span className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[--red] text-white text-[9px] font-bold">{itemCount}</span>}
            </Link>
            <button onClick={() => setMenuOpen(true)} className="text-[10px] tracking-[0.3em] uppercase text-[--text]/60 font-bold">
              MENU
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen menu — RED AND BOLD like her IG */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-[--red] overflow-hidden">
          {/* Yellow dots pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, var(--yellow) 2px, transparent 2px)',
              backgroundSize: '25px 25px'
            }} />
          </div>

          <div className="px-5 h-14 flex items-center justify-between relative z-10">
            <span className="font-serif text-3xl text-[--yellow] italic font-bold">bydalya</span>
            <button onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-bold">
              CLOSE
            </button>
          </div>

          <div className="flex-1 flex flex-col items-start justify-center px-8 gap-4 relative z-10">
            {[
              { href: '/', label: 'Home' },
              { href: '/shop', label: 'Shop' },
              { href: '/about', label: 'About' },
              { href: '/cart', label: `Bag${itemCount > 0 ? ` (${itemCount})` : ''}` },
            ].map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-serif text-6xl text-[--yellow] italic font-bold hover:text-white transition-colors animate-fade-up-d${i + 1}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="px-8 pb-10 relative z-10">
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-bold">HANDCRAFTED IN NYC</p>
          </div>
        </div>
      )}
    </>
  );
}
