'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/components/CartProvider';
import { formatPrice, getProductBySlug } from '@/lib/products';
import { useState } from 'react';

export default function CartPage() {
  const { items, removeItem, total } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch { setLoading(false); }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-14 bg-[--yellow]">
        <p className="text-[--red]/30 text-sm font-bold tracking-[0.2em] uppercase mb-3">NOTHING HERE YET</p>
        <h1 className="font-serif text-4xl italic font-black mb-3">Your bag is empty</h1>
        <p className="text-[--text]/30 text-sm mb-8">Time to find your piece.</p>
        <Link href="/shop" className="px-10 py-4 bg-[--red] text-white rounded-full text-sm tracking-[0.25em] uppercase font-bold active:scale-95 transition-transform shadow-[0_0_20px_rgba(196,30,42,0.3)]">
          BROWSE PIECES
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-14 pb-24 md:pb-16 bg-[--cream]">
      <div className="max-w-lg mx-auto px-6 pt-8">
        <p className="text-[--red] text-xs tracking-[0.4em] uppercase font-bold mb-1">ALMOST YOURS</p>
        <h1 className="font-serif text-4xl italic font-black mb-8">Your Bag</h1>

        <div className="space-y-3">
          {items.map((item) => {
            const product = getProductBySlug(item.slug);
            return (
              <div key={item.slug} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl p-4 border-2 border-[--red]/5">
                <div className="w-16 h-16 rounded-xl overflow-hidden relative flex-shrink-0">
                  {product ? (
                    <Image src={product.images[0]} alt={item.name} fill className="object-cover" sizes="64px" />
                  ) : (
                    <div className="w-full h-full bg-[--yellow]" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <Link href={`/shop/${item.slug}`} className="font-serif text-sm italic font-bold hover:text-[--red] transition-colors leading-tight block">
                    {item.name}
                  </Link>
                  <p className="text-xs text-[--red] font-bold mt-0.5">{formatPrice(item.price)}</p>
                </div>
                <button onClick={() => removeItem(item.slug)} className="text-[9px] tracking-[0.15em] uppercase text-[--text]/20 hover:text-[--red] font-bold transition-colors">
                  REMOVE
                </button>
              </div>
            );
          })}
        </div>

        {/* Desktop checkout */}
        <div className="hidden md:block mt-8 pt-6 border-t-2 border-[--red]/10">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs text-[--text]/30 tracking-[0.15em] uppercase font-bold">Subtotal</span>
            <span className="text-3xl font-serif italic text-[--red] font-black">{formatPrice(total)}</span>
          </div>
          <button onClick={handleCheckout} disabled={loading}
            className="w-full py-4 bg-[--red] text-white rounded-full text-sm tracking-[0.2em] uppercase font-bold hover:shadow-[0_0_30px_rgba(196,30,42,0.4)] disabled:opacity-50 transition-all">
            {loading ? 'REDIRECTING...' : 'CHECKOUT'}
          </button>
        </div>
      </div>

      {/* Sticky mobile checkout */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[--yellow]/95 backdrop-blur-md border-t-2 border-[--red]/10 px-4 py-3 flex items-center gap-3 md:hidden">
        <div className="flex-1">
          <p className="text-[9px] text-[--text]/30 tracking-[0.15em] uppercase font-bold">Subtotal</p>
          <p className="font-serif text-xl italic text-[--red] font-black">{formatPrice(total)}</p>
        </div>
        <button onClick={handleCheckout} disabled={loading}
          className="px-6 py-3 bg-[--red] text-white rounded-full text-[10px] tracking-[0.2em] uppercase font-bold active:scale-95 transition-transform disabled:opacity-50 shadow-[0_0_15px_rgba(196,30,42,0.3)]">
          {loading ? '...' : 'CHECKOUT'}
        </button>
      </div>
    </div>
  );
}
