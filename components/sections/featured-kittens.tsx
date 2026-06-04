import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { pastLitters } from "@/lib/past-litters";

// ─── Featured families shown on the homepage ────────────────────────────────
// To change which stories appear here, update the indices below.
// Index reference (0-based) matches the order in lib/past-litters.ts:
//   0 Tuna · 1 George · 2 Bagel · 3 Mei Bao · 4 Sage · 5 You Cai & Beauty
//   6 MinMin · 7 Mochi · 8 Ai Ai & Momotaro · 9 Hazel · 10 Bao · 11 Luo Bei
//   12 Blueberry · 13 Ginger · 14 Ivory · 15 Dan & Little J · 16 Sumo · 17 Wallace
const FEATURED_INDICES = [0, 3, 6, 13]; // Tuna, Mei Bao, MinMin, Ginger
const featured = FEATURED_INDICES.map((i) => pastLitters[i]);
// ────────────────────────────────────────────────────────────────────────────

function locationBadge(location: string) {
  if (location === "atlanta") return "🇺🇸 Atlanta";
  if (location === "mississauga") return "🇨🇦 Mississauga";
  if (location === "markham") return "🇨🇦 Markham";
  if (location === "scarborough") return "🇨🇦 Scarborough";
  if (location === "seattle") return "🇺🇸 Seattle";
  if (location === "edmonton") return "🇨🇦 Edmonton";
  if (location === "north york") return "🇨🇦 North York";
  if (location === "london") return "🇨🇦 London";
  if (location === "beijing") return "🇨🇳 Beijing";
  if (location === "newmarket") return "🇨🇦 Newmarket";
  if (location === "san francisco") return "🇺🇸 San Francisco";
  return "🇨🇦 Toronto";
}

export function FeaturedKittens() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <h2 className="text-center">Past Litters</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-slate">
          Meet the kittens who have found their forever homes. Each one carries the best of Jiliang
          Cattery with them.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((photo, i) => (
            <Card
              key={i}
              className="group overflow-hidden rounded-2xl border-brand-ice-dark transition-shadow hover:shadow-lg"
            >
              <div className="relative h-56 bg-brand-ice">
                <Image
                  src={photo.src}
                  alt={`${photo.name} — ${photo.color} British Shorthair`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-brand-charcoal">{photo.name}</h3>
                <p className="text-sm text-brand-slate">
                  {photo.color} &middot;{" "}
                  {photo.sexLabel ?? (photo.sex === "male" ? "Boy" : "Girl")}
                </p>
                {photo.familyStory && (
                  <p className="mt-2 text-sm leading-relaxed text-brand-slate line-clamp-2">
                    {photo.familyStory}
                  </p>
                )}
                <div className="mt-3 text-xs text-brand-slate-light">
                  {locationBadge(photo.location)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button
            render={<Link href="/available" />}
            className="bg-brand-brass hover:bg-brand-brass-dark"
          >
            View Past Litters
          </Button>
        </div>
      </div>
    </section>
  );
}
