"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { galleryImages } from "@/lib/gallery";

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = galleryImages;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

const currentImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section className="py-8 md:section-padding bg-brand-cream">
      <div className="container-wide">
        <h1 className="text-center">Gallery</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-snug tracking-tight text-brand-slate">
          A glimpse into life at Jiliang Cattery — past and present kittens, our breeding cats, and
          precious moments.
        </p>

      </div>

      {/* Instagram-style Grid */}
      <div className="mt-6 grid grid-cols-3 gap-0.5">
        {filtered.map((image, i) => (
          <div
            key={`${image.src}-${i}`}
            className="relative aspect-square cursor-pointer overflow-hidden bg-brand-ice"
            onClick={() => openLightbox(i)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform hover:scale-[1.03]"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxIndex !== null} onOpenChange={() => closeLightbox()}>
        <DialogContent
          className="flex items-center justify-center max-w-[90vw] max-h-[90vh] border-0 !bg-transparent p-0 shadow-none ring-0 outline-none"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">
            {currentImage?.caption || "Gallery image"}
          </DialogTitle>
          {currentImage && (
            <div
              className="flex items-center justify-center"
              onClick={() => closeLightbox()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                onClick={(e) => e.stopPropagation()}
                className="block max-h-[85vh] max-w-[85vw] w-auto h-auto rounded-lg object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
