"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/gallery";

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = galleryImages;

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
        <DialogContent
          className="max-w-[90vw] sm:max-w-[90vw] border-0 !bg-transparent p-0 shadow-none ring-0 outline-none"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">
            {currentImage?.caption || "Gallery image"}
          </DialogTitle>
          {currentImage && (
            <div
              className="flex w-full flex-col items-center justify-center"
              onClick={() => closeLightbox()}
            >
              <div className="flex items-center justify-center gap-3">
                {lightboxIndex !== null && lightboxIndex > 0 ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(-1);
                    }}
                    className="cursor-pointer rounded-full bg-white/20 p-2 text-white hover:bg-white/40 shrink-0"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                ) : (
                  <div className="w-10 shrink-0" />
                )}

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  onClick={(e) => e.stopPropagation()}
                  className="block max-h-[85vh] max-w-[85vw] w-auto h-auto rounded-lg object-contain"
                />

                {lightboxIndex !== null && lightboxIndex < filtered.length - 1 ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(1);
                    }}
                    className="cursor-pointer rounded-full bg-white/20 p-2 text-white hover:bg-white/40 shrink-0"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                ) : (
                  <div className="w-10 shrink-0" />
                )}
              </div>

              {currentImage.caption && (
                <p className="mt-2 text-center text-sm text-white/80">
                  {currentImage.caption}
                </p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
