'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProductBySlug, formatPrice } from '@/lib/products';
import { useCart } from '@/components/CartProvider';
import EmailCapture from '@/components/EmailCapture';
import { useState } from 'react';

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug);
  const { addItem, items } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-14 bg-[--yellow]">
        <p className="text-[--red] text-lg font-black tracking-[0.2em] uppercase mb-3">OOPS</p>
        <h1 className="font-serif text-3xl italic font-bold mb-4">Piece not found</h1>
        <Link href="/shop" className="text-[10px] tracking-[0.3em] uppercase text-[--red] font-bold">&larr; BACK</Link>
      </div>
    );
  }

  const isSold = product.status === 'sold';
  const inCart = items.some((i) => i.slug === product.slug);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen pt-14 pb-24 md:pb-16 bg-[--cream] relative">
      <div className="px-6 pt-4">
        <Link href="/shop" className="text-[10px] tracking-[0.3em] uppercase text-[--red]/50 font-bold">&larr; BACK</Link>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-12 md:max-w-[1100px] md:mx-auto md:px-10 md:pt-8">
        {/* Image */}
        <div className={`mt-4 mx-4 md:mx-0 aspect-[3/4] rounded-3xl overflow-hidden relative border-2 border-[--red]/10 ${isSold ? 'grayscale' : ''}`}>
          <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
        </div>

        {/* Details */}
        <div className="px-6 md:px-0 mt-6 md:mt-0 md:flex md:flex-col md:justify-center">
          {!isSold && <p className="text-[--red] text-xs tracking-[0.3em] uppercase font-bold">ONE OF A KIND</p>}
          {isSold && <p className="text-[--text]/30 text-xs tracking-[0.3em] uppercase font-bold">SOLD</p>}

          <h1 className="font-serif text-3xl md:text-5xl italic font-bold leading-tight mt-1">{product.name}</h1>
          <p className={`text-3xl font-serif font-bold mt-2 ${isSold ? 'text-[--text]/15 line-through' : 'text-[--red]'}`}>
            {formatPrice(product.price)}
          </p>

          <p className="text-[--text]/40 text-sm leading-relaxed mt-5 max-w-sm">{product.description}</p>

          <div className="mt-6">
            <p className="text-[--red]/50 text-xs tracking-[0.2em] uppercase font-bold mb-2">MADE WITH</p>
            <div className="flex flex-wrap gap-1.5">
              {product.materials.map((m) => (
                <span key={m} className="text-[10px] tracking-[0.1em] px-3 py-1.5 rounded-full border-2 border-[--red]/10 text-[--text]/40 font-bold">
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block mt-8">
            {isSold ? (
              <div>
                <p className="text-xs text-[--text]/30 mb-3 font-bold">Get notified about similar pieces.</p>
                <EmailCapture />
              </div>
            ) : inCart ? (
              <Link href="/cart" className="block w-full py-4 bg-[--text] text-white rounded-full text-center text-xs tracking-[0.2em] uppercase font-bold">
                VIEW BAG
              </Link>
            ) : (
              <button onClick={handleAdd} className="w-full py-4 bg-[--red] text-white rounded-full text-xs tracking-[0.2em] uppercase font-bold hover:shadow-[0_0_30px_rgba(196,30,42,0.4)] active:scale-[0.98] transition-all">
                {added ? 'ADDED!!!' : 'ADD TO BAG'}
              </button>
            )}
          </div>

          {/* Sizing */}
          <div className="mt-8 pt-6 border-t-2 border-[--red]/5">
            <p className="text-[--red]/50 text-xs tracking-[0.2em] uppercase font-bold mb-3">SIZING</p>
            <div className="space-y-2 text-sm text-[--text]/40">
              <p><span className="font-bold text-[--text]/60">Length:</span> Adjustable 14&quot; &ndash; 18&quot; with extender chain</p>
              <p><span className="font-bold text-[--text]/60">Fit:</span> Choker to collarbone length, fits most neck sizes</p>
              <p><span className="font-bold text-[--text]/60">Clasp:</span> Gold-filled lobster clasp</p>
            </div>
          </div>

          {/* Shipping & Returns */}
          <div className="mt-6 pt-6 border-t-2 border-[--red]/5">
            <p className="text-[--red]/50 text-xs tracking-[0.2em] uppercase font-bold mb-3">SHIPPING & RETURNS</p>
            <div className="space-y-2 text-sm text-[--text]/40">
              <p><span className="font-bold text-[--text]/60">Shipping:</span> Free US shipping. Ships within 1&ndash;3 business days.</p>
              <p><span className="font-bold text-[--text]/60">Packaging:</span> Each piece is hand-wrapped and packaged with care.</p>
              <p><span className="font-bold text-[--text]/60">Returns:</span> 14-day returns accepted for unworn pieces in original packaging.</p>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-6 pt-6 border-t-2 border-[--red]/5">
            <p className="text-[--red]/50 text-xs tracking-[0.2em] uppercase font-bold mb-3">QUESTIONS?</p>
            <p className="text-sm text-[--text]/40 mb-3">
              Have a question about this piece? Want to see more photos or check sizing?
            </p>
            <a
              href="https://www.instagram.com/itsbydalya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[--red]/15 rounded-full text-xs tracking-[0.15em] uppercase font-bold text-[--red]/70 hover:border-[--red] hover:text-[--red] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              DM ON INSTAGRAM
            </a>
          </div>
        </div>
      </div>

      {/* Sticky mobile CTA */}
      {!isSold && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[--yellow]/95 backdrop-blur-md border-t-2 border-[--red]/10 px-4 py-3 flex items-center gap-3 md:hidden">
          <div className="flex-1">
            <p className="font-serif text-sm italic font-bold leading-tight">{product.name}</p>
            <p className="text-xs text-[--red] font-bold">{formatPrice(product.price)}</p>
          </div>
          {inCart ? (
            <Link href="/cart" className="px-6 py-3 bg-[--text] text-white rounded-full text-[10px] tracking-[0.2em] uppercase font-bold">
              VIEW BAG
            </Link>
          ) : (
            <button onClick={handleAdd} className="px-6 py-3 bg-[--red] text-white rounded-full text-[10px] tracking-[0.2em] uppercase font-bold active:scale-95 transition-transform shadow-[0_0_15px_rgba(196,30,42,0.3)]">
              {added ? 'ADDED!' : 'ADD TO BAG'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
