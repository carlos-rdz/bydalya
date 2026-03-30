import { NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import { getProductBySlug } from '@/lib/products';

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    const lineItems = items.map((item: { slug: string; name: string; price: number }) => {
      const product = getProductBySlug(item.slug);
      if (!product || product.status === 'sold') {
        throw new Error(`Product ${item.slug} is no longer available`);
      }
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: product.price,
        },
        quantity: 1,
      };
    });

    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
