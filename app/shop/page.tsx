'use client';

import { useState } from 'react';
import { getAllProducts, Product } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
const categories = [
  { value: 'all', label: 'ALL' },
  { value: 'necklace', label: 'NECKLACES' },
  { value: 'bracelet', label: 'BRACELETS' },
];

export default function ShopPage() {
  const [filter, setFilter] = useState('all');
  const allProducts = getAllProducts();
  const products = filter === 'all' ? allProducts : allProducts.filter((p: Product) => p.category === filter);

  return (
    <div className="min-h-screen pt-14 relative overflow-hidden bg-[--cream]">
      <div className="px-6 pt-8 pb-4">
        <p className="text-[--red] text-xs tracking-[0.4em] uppercase font-bold mb-2">THE COLLECTION</p>
        <h1 className="font-serif text-5xl md:text-7xl italic font-black -mt-1">SHOP</h1>
        <p className="text-[--text]/40 text-xs tracking-[0.1em] mt-2 font-bold">
          Each piece is one of a kind. When it&apos;s gone, it&apos;s gone.
        </p>
      </div>

      {/* Filters */}
      <div className="px-6 py-4 flex gap-2 overflow-x-auto scrollbar-hide relative z-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`px-6 py-2.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold whitespace-nowrap transition-all active:scale-95 ${
              filter === cat.value
                ? 'bg-[--red] text-white shadow-[0_0_15px_rgba(196,30,42,0.3)]'
                : 'border-2 border-[--red]/20 text-[--red]/60'
            }`}
          >
            {cat.label}
          </button>
        ))}
        <span className="text-[--red]/30 text-xs font-bold self-center ml-1 whitespace-nowrap tracking-[0.1em]">
          {products.length} pieces
        </span>
      </div>

      {/* Grid */}
      <div className="px-4 pb-20 relative z-10">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5 md:max-w-[1200px] md:mx-auto stagger-grid">
          {products.map((product: Product, i: number) => (
            <ProductCard
              key={product.slug}
              product={product}
              size={i === 0 ? 'wide' : i === 5 ? 'wide' : 'default'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
