import productsData from '@/data/products.json';

export type Product = {
  slug: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  materials: string[];
  category: 'necklace' | 'bracelet';
  status: 'available' | 'sold';
  quantity: number;
  featured: boolean;
  createdAt: string;
};

export function getAllProducts(): Product[] {
  return productsData as Product[];
}

export function getAvailableProducts(): Product[] {
  return getAllProducts().filter((p) => p.status === 'available');
}

export function getFeaturedProducts(): Product[] {
  return getAllProducts().filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return getAllProducts();
  return getAllProducts().filter((p) => p.category === category);
}

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(0)}`;
}
