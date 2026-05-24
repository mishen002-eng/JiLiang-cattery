"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { galleryImages } from "@/lib/gallery";
import type { CatteryLocation } from "@/lib/types";

export default function GalleryPage() {
  const [filter, setFilter] = useState<"all" | CatteryLocation>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? galleryImages : galleryImages.filter((img) => img.location === filter)),
    [filter]
  );

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigate = (direction: -1 | 1) => {
    if (lightboxIndex === null) return;
    const next = lightboxIndex + direction;
    if (next >= 0 && next < filtered.length) setLightboxIndex(next);
  };

  const currentImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-wide">
        <h1 className="text-center">Gallery</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-slate">
          A glimpse into life at Jiliang Cattery — past and present kittens, our breeding cats, and
          precious moments.
        </p>

        {/* Filter */}
        <div className="mt-8 flex justify-center">
          <div className="flex rounded-full bg-white p-1 text-sm shadow-sm">
            {(["all", "atlanta", "toronto"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "cursor-pointer rounded-full px-4 py-1.5 transition-colors",
                  filter === f
                    ? "bg-brand-brass text-white"
                    : "text-brand-slate hover:text-brand-charcoal"
                )}
              >
                {f === "all" ? "All" : f === "atlanta" ? "Atlanta 🇺🇸" : "Toronto 🇨🇦"}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4">
          {filtered.map((image, i) => (
            <div
              key={`${image.src}-${i}`}
              className="mb-4 cursor-pointer overflow-hidden rounded-lg break-inside-avoid"
              onClick={() => openLightbox(i)}
            >
              <div className="relative aspect-[3/4] bg-brand-ice transition-transform hover:scale-[1.02]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-1 text-center text-xs text-brand-slate">{image.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxIndex !== null} onOpenChange={() => closeLightbox()}>
        <DialogContent className="max-w-4xl border-0 bg-black/95 p-0">
          <DialogTitle className="sr-only">
            {currentImage?.caption || "Gallery image"}
          </DialogTitle>
          {currentImage && (
            <div className="relative flex items-center justify-center">
              {lightboxIndex !== null && lightboxIndex > 0 && (
                <button
                  onClick={() => navigate(-1)}
                  className="absolute left-2 z-10 cursor-pointer rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                />
              </div>

              {lightboxIndex !== null && lightboxIndex < filtered.length - 1 && (
                <button
                  onClick={() => navigate(1)}
                  className="absolute right-2 z-10 cursor-pointer rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}

              <p className="absolute bottom-4 left-0 right-0 text-center text-sm text-white/80">
                {currentImage.caption}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
