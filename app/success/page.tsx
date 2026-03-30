'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '@/components/CartProvider';

export default function SuccessPage() {
  const { clearCart } = useCart();
  useEffect(() => { clearCart(); }, [clearCart]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[--yellow]">
      <p className="text-[--red] text-4xl font-black mb-2">YAY!</p>
      <h1 className="font-serif text-4xl italic font-black mb-4">Thank you!</h1>
      <p className="text-[--text]/40 text-sm text-center max-w-xs mb-2">
        Your order has been placed. Confirmation email incoming.
      </p>
      <p className="text-[--text]/20 text-xs font-bold tracking-[0.2em] uppercase mb-10">
        EACH PIECE IS LOVINGLY PACKAGED BY HAND
      </p>
      <Link href="/shop" className="px-10 py-4 bg-[--red] text-white rounded-full text-sm tracking-[0.25em] uppercase font-bold active:scale-95 transition-transform shadow-[0_0_20px_rgba(196,30,42,0.3)]">
        KEEP SHOPPING
      </Link>
    </div>
  );
}
