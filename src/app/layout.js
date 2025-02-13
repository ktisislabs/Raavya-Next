import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Raavya: Your Home Creator",
  description:
    "We founded The Raavya with a simple yet powerful vision: to bring beauty into a million homes. Each piece of furniture tells a unique story, blending craftsmanship, elegance, and functionality.",
  keywords: "home decor, furniture, interior design, modern furniture, The Raavya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* SEO Optimization */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://theraavya.in" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/x-icon" />

        {/* Robots.txt for Crawlers */}
        <link rel="robots" href="/robots.txt" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <h1 className="sr-only">The Raavya - Home Decor & Furniture</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
