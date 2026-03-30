'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product, formatPrice } from '@/lib/products';

export default function ProductCard({ product, size = 'default' }: { product: Product; size?: 'default' | 'wide' | 'tall' | 'hero' }) {
  const isSold = product.status === 'sold';

  const sizeClasses = {
    default: 'aspect-[3/4]',
    wide: 'aspect-[4/3] col-span-2',
    tall: 'aspect-[2/3] row-span-2',
    hero: 'aspect-[3/4] col-span-2 row-span-2',
  };

  return (
    <Link href={`/shop/${product.slug}`} className="group block relative">
      {/* Red artsy border frame */}
      <div className={`relative overflow-hidden rounded-2xl border-[3px] border-[--red]/30 group-hover:border-[--red] transition-all duration-300 shadow-[4px_4px_0px_var(--red)] group-hover:shadow-[6px_6px_0px_var(--red)] ${sizeClasses[size]} ${isSold ? 'grayscale' : ''}`}>
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[--red] opacity-0 group-hover:opacity-90 transition-all duration-500 flex flex-col items-center justify-center p-4">
          <span className="text-[--yellow] text-sm tracking-[0.2em] uppercase font-bold mb-1">ONE OF A KIND</span>
          <span className="font-serif text-white text-3xl italic font-black">{formatPrice(product.price)}</span>
        </div>

        {isSold && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <span className="text-2xl text-white bg-[--red] px-6 py-2 rounded-2xl font-black tracking-wider">
              SOLD!
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 px-0.5">
        <h3 className="font-serif text-base italic font-bold group-hover:text-[--red] transition-all text-[--text] leading-tight">
          {product.name}
        </h3>
        <p className={`text-xs tracking-[0.15em] uppercase font-bold mt-1 ${isSold ? 'text-[--text]/20 line-through' : 'text-[--red]/60'}`}>
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
