import type { Metadata } from "next";
import { GalleryPageContent } from "./gallery-client";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery of Jiliang Cattery — our British Shorthair breeding cats, past and present kittens, and everyday moments at the cattery.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
