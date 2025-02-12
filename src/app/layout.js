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
  title: "The Raavya : Your Home Creator",
  description: "We founded TheRaavya with a simple yet powerful vision: to bring beauty into a million homes. As our customers began sharing glimpses of their spaces, we noticed something extraordinary: each home had its own distinct character. The same table, the same chair, found new life and meaning in different settings, reflecting the unique personality of its owner.",
  keywords: "home decor, furniture, interior design, modern furniture, TheRaavya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   <head>
    <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/x-icon" />
    

    
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="UTF-8" />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#ffffff" />
    
    
    <title>The Raavya: Your Home Creator</title>
    <meta name="description" content="Transform your home with The Raavya's curated home decor and furniture collection. Quality and elegance for every space." />
    
    
    <meta property="og:title" content="The Raavya: Your Home Creator" />
    <meta property="og:description" content="Explore our premium home decor and furniture collection. Elevate your living space with The Raavya." />
    <meta property="og:image" content="/Mainlogo.png" />
    <meta property="og:url" content="https://theraavya.in" />
    <meta property="og:type" content="website" />

    <link rel="canonical" href="https://theraavya.in" />
</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
