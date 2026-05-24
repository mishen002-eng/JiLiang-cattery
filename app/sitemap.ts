import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jiliangcattery.com";

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/available`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/our-cats`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/process`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/apply`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), priority: 0.5 },
  ];
}
