import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";
import { GoogleTag } from "@/components/analytics/google-tag";
import { siteUrl, siteName, siteDescription, sameAs } from "@/lib/seo";

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
  metadataBase: new URL(siteUrl),
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

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  logo: `${siteUrl}/images/logo/jiliang_cat_logo_transparent_2x.png`,
  sameAs,
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <GoogleTag />
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
        {children}
      </body>
    </html>
  );
}
