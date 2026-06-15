// Central SEO / site identity config — single source of truth for
// metadataBase, canonical URLs, and JSON-LD structured data.

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.jiliangcattery.com";

export const siteName = "Jiliang Cattery";

export const siteDescription =
  "Ethically raised British Shorthair kittens in Atlanta, GA and Toronto, Canada. TICA registered, health tested, and raised with love.";

// Only public profiles confirmed to belong to Jiliang Cattery.
export const sameAs = [
  "https://www.instagram.com/jiliangcattery/",
  "https://www.tiktok.com/@jl.british.shorthair",
];
