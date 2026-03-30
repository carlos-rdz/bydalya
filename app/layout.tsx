import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider";
import CometCursor from "@/components/CometCursor";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mochaBubble = localFont({
  src: "../public/fonts/Mocha Bubble.ttf",
  variable: "--font-mocha",
  display: "swap",
});

const mochaOutline = localFont({
  src: "../public/fonts/Mocha Outline.ttf",
  variable: "--font-mocha-outline",
  display: "swap",
});

const mochaSans = localFont({
  src: "../public/fonts/Mocha Sans.ttf",
  variable: "--font-mocha-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "bydalya | Handcrafted One-of-a-Kind Jewelry",
  description:
    "Handcrafted in NYC. One-of-a-kind beaded necklaces and bracelets made with natural stones, freshwater pearls, and love.",
  openGraph: {
    title: "bydalya | Handcrafted One-of-a-Kind Jewelry",
    description: "Handcrafted in NYC. One-of-a-kind beaded necklaces and bracelets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${spaceGrotesk.variable} ${mochaBubble.variable} ${mochaOutline.variable} ${mochaSans.variable} font-sans bg-[--cream] text-[--text] antialiased overflow-x-hidden`}>
        <CartProvider>
          <CometCursor />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
