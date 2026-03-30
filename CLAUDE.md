# bydalya — Handcrafted Jewelry Ecommerce

## What This Is
This is Dalya's online jewelry store at **https://bydalya.vercel.app**. It's built with Next.js, Tailwind CSS, and deployed on Vercel.

## For Dalya (non-technical user)
You can tell me things like:
- "Make the text bigger on the homepage"
- "Change the red to a darker red"
- "I don't like the spacing here" (paste a screenshot)
- "Add a new product called X for $80"
- "The about page needs more personality"

I'll make the changes and you can preview them by running `npm run dev` and opening http://localhost:3001 in your browser. When you're happy, run `vercel --prod` to push it live.

## Quick Commands
- `npm run dev -- -p 3001` — start the local dev server
- `npm run build` — check for errors before deploying
- `vercel --prod` — deploy to the live site

## Tech Stack
- **Next.js 14** (App Router) with TypeScript
- **Tailwind CSS** for styling
- **Stripe** for checkout (test mode — needs real keys to go live)
- **Vercel** for hosting

## Brand
- **Colors:** Red `#C41E2A`, Yellow `#FFF4CC`, Deep red `#7A1018`, Salmon `#F4A3A0`
- **Fonts:** Mocha Bubble (display/headlines), Mocha Sans (body mixed text), Playfair Display (section headers), Space Grotesk (body)
- **Vibe:** Bold, playful, funky, pop-art energy. NOT minimal, NOT hippie, NOT corporate

## Key Files
- `app/page.tsx` — homepage
- `app/shop/page.tsx` — shop/collection page
- `app/shop/[slug]/page.tsx` — individual product page
- `app/about/page.tsx` — about/bio page
- `app/globals.css` — all animations and CSS variables
- `components/` — reusable UI components
- `data/products.json` — all product data (names, prices, images)
- `data/config.json` — site config (brand name, next drop date)
- `public/products/` — product images
- `public/fonts/` — Mocha font files

## Deploying
The site auto-deploys when you run `vercel --prod` from this directory. The live URL is **https://bydalya.vercel.app**.
