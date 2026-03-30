# bydalya — Handcrafted Jewelry Ecommerce

## Who You're Working With
You are helping **Dalya**, the founder of bydalya — a handmade beaded jewelry brand based in NYC. She is NOT a developer. She is an artist and jewelry maker. Talk to her like a creative collaborator, not a programmer. Never use technical jargon unless she asks.

## Her Brand & Aesthetic
- **Brand:** bydalya (@itsbydalya on Instagram, etsy.com/shop/byDALYA)
- **What she makes:** One-of-a-kind handmade beaded necklaces using natural stones, freshwater pearls, and glass beads
- **Vibe:** Bold, playful, funky, pop-art energy. She likes bright red + pale yellow. Think maximalist, not minimal. She does NOT like hippie vibes, corporate looks, or anything "basic"
- **Colors:** Red `#C41E2A`, Pale Yellow `#FFF4CC`, Deep Burgundy `#7A1018`, Salmon `#F4A3A0`
- **Font:** Mocha Bubble (the fun blobby one) for big headlines and the "bydalya" logo. Mocha Sans for mixed text. Playfair Display for section headers
- **Location:** NYC (NOT Atlanta)

## How To Help Her
When she gives feedback like "make this bigger" or "I don't like that color" or pastes a screenshot:
1. Make the code change
2. Tell her to check it at http://localhost:3001 (if running locally) or deploy with `vercel --prod`
3. Keep responses SHORT and visual — she wants to see results, not read paragraphs

When she says things like "this looks weird" or "fix the spacing" — use the preview tools to look at the site yourself, identify the issues, fix them, and show her.

## The Site
- **Live URL:** https://bydalya.vercel.app
- **Framework:** Next.js 14 + Tailwind CSS + Stripe (test mode)
- **Hosted on:** Vercel

## Quick Commands She Can Run
- `npm run dev -- -p 3001` — preview locally at localhost:3001
- `vercel --prod` — push changes live to bydalya.vercel.app
- `npm run build` — check for errors

## Key Files
- `app/page.tsx` — homepage (hero, featured products, reviews, countdown)
- `app/shop/page.tsx` — shop grid with all products
- `app/shop/[slug]/page.tsx` — individual product page (image, price, add to cart, sizing, shipping info)
- `app/about/page.tsx` — Dalya's bio page with her photo
- `app/cart/page.tsx` — shopping cart
- `app/globals.css` — colors, animations, all CSS variables
- `components/` — navbar, footer, product cards, stickers, cursor trail, etc
- `data/products.json` — all 16 products with names, prices, descriptions, image paths
- `data/config.json` — brand name, next drop date, tagline
- `public/products/` — product images (scraped from Etsy)
- `public/fonts/` — Mocha Bubble, Mocha Outline, Mocha Sans, Mocha Sans Bold

## Design Decisions Already Made
- Hero is full red background with big "bydalya" in Mocha Bubble font, "ONE OF A KIND" below in mixed bubble/sans letters
- Icon marquee strips (✿ ✸ ❀ ✷ ●) between sections
- Wavy SVG dividers between color sections
- Product cards have red artsy borders with drop shadows and slight rotations
- Comet cursor trail on desktop (particles follow mouse)
- Scattered editorial decorations (4-point stars, dots, X marks, rings) with twinkle animations
- Reviews section with 5.0 stars and swipeable cards
- Drop countdown with colored timer blocks
- Sticky "Add to Bag" bar on mobile product pages
- Deep burgundy (#7A1018) for dark sections instead of black
- Salmon (#F4A3A0) for light accent sections instead of pink
- Every section is a shade of red or yellow — nothing off-brand

## Deploying Changes
After making changes, build and deploy:
```
npm run build && vercel --prod
```
The live site updates in ~30 seconds.

## Product Data
Products are in `data/products.json`. Each product has: slug, name, price (in cents), images array, description, materials, category (necklace/bracelet), status (available/sold), quantity, featured flag.

To add a new product: add an entry to the JSON and put the image in `public/products/`.

## What's NOT Done Yet
- Stripe is in test mode (placeholder keys in .env.local) — needs real keys to accept payments
- Only 16 of her 55 Etsy products are on the site
- Products only have 1 photo each (should have multiple angles)
- No favicon or OG preview image for link sharing
- SEO could be improved (structured data, meta tags per product)
