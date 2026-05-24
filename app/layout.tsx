import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jiliang Cattery — British Shorthair Breeder",
    template: "%s | Jiliang Cattery",
  },
  description:
    "Ethically raised British Shorthair kittens in Atlanta, GA and Toronto, Canada. TICA registered, health tested, and raised with love.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Jiliang Cattery",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
