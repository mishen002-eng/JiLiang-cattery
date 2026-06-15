"use client";

import { useState } from "react";
import Image from "next/image";
import { KittenCard } from "@/components/sections/kitten-card";
import { KittenDetailDialog } from "@/components/sections/kitten-detail-dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Kitten, PastLitter } from "@/lib/types";
import { pastLitters } from "@/lib/past-litters";

// Local alias so the rest of the file is unchanged
type PhotoEntry = PastLitter;

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

// Data lives in lib/past-litters.ts
const pastLitterPhotos: PhotoEntry[] = pastLitters;

function PhotoDialog({
  photo,
  open,
  onOpenChange,
}: {
  photo: PhotoEntry | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!photo) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] w-[90vw] max-w-4xl sm:max-w-4xl overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="font-heading text-4xl">{photo.name}</DialogTitle>
          <DialogDescription className="text-base text-brand-slate">
            {photo.color} British Shorthair
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 space-y-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-brand-ice">
            <Image src={photo.src} alt={photo.name} fill className="object-contain" />
          </div>
          <div className="flex flex-wrap gap-3">
            <Badge className="px-3 py-1 text-sm bg-rose-100 text-rose-700">At Home</Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm">{photo.sexLabel ?? (photo.sex === "male" ? "Boy" : "Girl")}</Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm">{photo.color}</Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm">
              {locationBadge(photo.location)}
            </Badge>
          </div>
          <div>
            <p className="text-base font-medium text-brand-charcoal">Family Story</p>
            <p className="mt-2 text-base leading-relaxed text-brand-slate">{photo.familyStory}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function AvailableClient({ families }: { families: Kitten[] }) {
  const [selectedKitten, setSelectedKitten] = useState<Kitten | null>(null);
  const [kittenDialogOpen, setKittenDialogOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoEntry | null>(null);
  const [photoDialogOpen, setPhotoDialogOpen] = useState(false);

  return (
    <>
      <section className="py-8 md:py-16 lg:py-24 bg-brand-cream">
        <div className="container-wide">
          <h1 className="text-center">Past Litters</h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-snug tracking-tight text-brand-slate md:leading-relaxed md:tracking-normal">
            Meet the kittens who have found their forever homes. Each one carries the best of Jiliang
            Cattery with them. Over nearly a decade, we have successfully placed hundreds of healthy,
            well-socialized kittens into loving homes around the world. We are proud to share selected
            stories and joyful moments from our families — some who love sharing their adventures with
            us, and others who quietly cherish their special bond.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pastLitterPhotos.map((photo, i) => (
              <Card
                key={i}
                className="group cursor-pointer overflow-hidden rounded-2xl border-brand-ice-dark transition-shadow hover:shadow-lg"
                onClick={() => { setSelectedPhoto(photo); setPhotoDialogOpen(true); }}
              >
                <div className="relative h-56 bg-brand-ice">
                  <Image
                    src={photo.src}
                    alt={photo.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-brand-charcoal">{photo.name}</h3>
                  <p className="text-sm text-brand-slate">
                    {photo.color} &middot; {photo.sexLabel ?? (photo.sex === "male" ? "Boy" : "Girl")}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-slate line-clamp-2">
                    {photo.familyStory}
                  </p>
                  <div className="mt-3 text-xs text-brand-slate-light">
                    {locationBadge(photo.location)}
                  </div>
                </CardContent>
              </Card>
            ))}

            {families.map((kitten) => (
              <KittenCard
                key={kitten.id}
                kitten={kitten}
                variant="family"
                onClick={() => { setSelectedKitten(kitten); setKittenDialogOpen(true); }}
              />
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="font-heading text-2xl text-brand-charcoal">Beautiful stories are still unfolding...</p>
            <p className="mt-2 text-brand-slate">Your life isn't complete without a cat.</p>
          </div>
        </div>
      </section>

      <PhotoDialog
        photo={selectedPhoto}
        open={photoDialogOpen}
        onOpenChange={setPhotoDialogOpen}
      />
      <KittenDetailDialog
        kitten={selectedKitten}
        open={kittenDialogOpen}
        onOpenChange={setKittenDialogOpen}
      />
    </>
  );
}
