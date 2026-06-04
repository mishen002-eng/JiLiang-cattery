"use client";

import { useState, useEffect } from "react";
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
import type { Kitten } from "@/lib/types";

type PhotoEntry = {
  src: string;
  name: string;
  color: string;
  sex: "male" | "female";
  sexLabel?: string;
  location: string;
  familyStory: string;
};

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

const pastLitterPhotos: PhotoEntry[] = [
  {
    src: "/images/Past Litters/01_图片_20260604004753_227_4_1646x1236.jpg",
    name: "Tuna",
    color: "Golden Shaded",
    sex: "male",
    location: "atlanta",
    familyStory:
      "Tuna (formerly McDonald) is a 3-year-old retired male from our program who found his perfect forever home in Atlanta. Renamed Tuna by his new family, he is adored by his 5-year-old young owner, who even composes special songs for him. He now enjoys a life full of love, play, and attention from his caring family.",
  },
  {
    src: "/images/Past Litters/02_图片_20260604005208_228_4_1646x1236.jpg",
    name: "George",
    color: "Cream",
    sex: "male",
    location: "mississauga",
    familyStory:
      "George is a sweet-natured kitten with an incredibly gentle temperament who constantly purrs, bringing comfort and healing vibes to his owners. He lives happily with his sister Cece in their loving forever home, where both are cherished and well cared for every day.",
  },
  {
    src: "/images/Past Litters/03_图片_20260604005251_229_4_1646x1236.jpg",
    name: "Bagel",
    color: "Golden Point",
    sex: "male",
    location: "markham",
    familyStory:
      "Bagel is an adorable kitten with an exceptionally sweet face and playful, quirky expressions that never fail to bring joy and laughter to his family. His mischievous charm lights up their home every day.",
  },
  {
    src: "/images/Past Litters/04_图片_20260604005310_230_4_1646x1236.jpg",
    name: "Mei Bao",
    color: "Blue-Cream",
    sex: "female",
    location: "markham",
    familyStory:
      "\"My owner is the best nail technician in all of Toronto, with the highest quality nail studio. When my mom has clients coming over, I often help my mom greet the guests.\"",
  },
  {
    src: "/images/Past Litters/05_图片_20260604005818_233_4_1646x1236.jpg",
    name: "Sage",
    color: "Golden Shaded",
    sex: "female",
    location: "atlanta",
    familyStory:
      "Sage's aqua eyes stop everyone in their tracks. She leans gently against her scratching post and gazes up with a quiet, knowing look that melts every heart in the room. Her family says she runs the household.",
  },
  {
    src: "/images/Past Litters/06_图片_20260604010000_234_4_1646x1236.jpg",
    name: "You Cai & Beauty",
    color: "Golden Shaded & Golden Point British Longhair",
    sex: "male",
    sexLabel: "Boy & Girl",
    location: "scarborough",
    familyStory:
      "This is a loving couple who have welcomed five kittens from our cattery into their home. They own and operate a pet store, and are deeply committed to providing their cats with an exceptionally high standard of care, enrichment, and quality of life.",
  },
  {
    src: "/images/Past Litters/07_图片_20260604010056_235_4_1646x1236.jpg",
    name: "MinMin",
    color: "Blue & White",
    sex: "male",
    location: "seattle",
    familyStory:
      "\"My dad and mom took me on a road trip from Newmarket, Canada, all the way driving to Seattle, USA to move. Along the way we saw a lot of scenery and visited many cities. I now live together with two dogs and one cat, of course also with my human dad and mom. Occasionally I go out to the backyard to bask in the sun. Life couldn't be more comfortable~\"",
  },
  {
    src: "/images/Past Litters/08_图片_20260604010540_237_4_1646x1236.jpg",
    name: "Mochi",
    color: "Golden Shaded",
    sex: "female",
    location: "toronto",
    familyStory:
      "Mochi is deeply loved by her family. She moved with her parents from Niagara Falls to Edmonton, and later to Toronto. Her parents opened a charming coffee shop named Momo Coffee in her honor — where Mochi serves as the official honorary boss and is frequently seen greeting customers.",
  },
  {
    src: "/images/Past Litters/09_图片_20260604010600_238_4_1646x1236.jpg",
    name: "Ai Ai & Momotaro",
    color: "Golden Shaded & Golden Point",
    sex: "female",
    sexLabel: "Girl & Boy",
    location: "edmonton",
    familyStory:
      "Ai Ai once felt a little lonely as an only cat. When she turned three years old, she welcomed her new best friend, Momotaro. The two now keep each other company and bring double the joy to their loving family.",
  },
  {
    src: "/images/Past Litters/6_4/01_图片_20260604012422_240_4_1646x1236.jpg",
    name: "Hazel",
    color: "Golden Shaded",
    sex: "female",
    location: "toronto",
    familyStory:
      "\"Hi, I'm the little beauty who jumped straight into my new mom's arms the second I got home! Do you think I look like my gorgeous mama? Everyone says we're twins!\"",
  },
  {
    src: "/images/Past Litters/6_4/02_图片_20260604013049_241_4_1646x1236.jpg",
    name: "Bao",
    color: "Golden Point",
    sex: "male",
    location: "north york",
    familyStory:
      "\"I'm the sassy little cat who came with built-in attitude. I keep my family entertained with my endless funny expressions and playful antics. Sure, I might look grumpy sometimes, but trust me — my life is absolutely spoiled and wonderful!\"",
  },
  {
    src: "/images/Past Litters/6_4/03_图片_20260604013348_243_4_1646x1236.jpg",
    name: "Luo Bei",
    color: "Golden Shaded",
    sex: "female",
    location: "london",
    familyStory:
      "\"I'm the little cat who patrols the house like a tiny guard dog. I love making my rounds every day! My mom and dad are always taking beautiful photos of me — I'm basically their little model.\"",
  },
  {
    src: "/images/Past Litters/6_4/06_图片_20260604014446_250_4_1646x1236.jpg",
    name: "Blueberry",
    color: "Blue",
    sex: "female",
    location: "toronto",
    familyStory:
      "Blueberry is a beautiful blue female with an irresistibly sweet face and an exceptionally gentle, loving personality. She is famous for her hilarious expressions that never fail to make her family laugh. Her devoted owners adore her and have captured countless funny photos of her playful antics.",
  },
  {
    src: "/images/Past Litters/6_4/07_图片_20260604014550_251_4_1646x1236.jpg",
    name: "Ginger",
    color: "Golden Shaded",
    sex: "female",
    location: "beijing",
    familyStory:
      "Ginger is a sweet-natured girl with an exceptionally gentle and friendly personality. She grew up with her Corgi best friend and the two have been inseparable since they were little, playing together every day. They remain the closest of companions, bringing each other constant joy in their loving home.",
  },
  {
    src: "/images/Past Litters/6_4/08_图片_20260604014844_253_4_1646x1236.jpg",
    name: "Ivory",
    color: "Golden Point",
    sex: "female",
    location: "toronto",
    familyStory:
      "Ivory claimed the highest perch on the cat tree as her throne and surveys the room below with quiet dignity. Her soft blue eyes and ivory coat give her an air of timeless elegance.",
  },
  {
    src: "/images/Past Litters/6_4/09_图片_20260604015308_255_4_1646x1236.jpg",
    name: "Dan & Little J",
    color: "Blue & Golden Shaded",
    sex: "male",
    sexLabel: "Boy & Girl",
    location: "atlanta",
    familyStory:
      "There are birds singing outside the window that attract them.",
  },
  {
    src: "/images/Past Litters/qwiqirow.jpg",
    name: "Sumo",
    color: "Silver Shaded",
    sex: "male",
    location: "newmarket",
    familyStory:
      "Sumo is a silver shaded kitten with an exceptionally sweet and friendly personality. He instantly bonded with the resident pets the moment he arrived at his new home and quickly became part of the family. A true \"laptop cat,\" Sumo is the charming little gentleman of the house who knows exactly how to win everyone's hearts.",
  },
  {
    src: "/images/Past Litters/235ggg.jpg",
    name: "Wallace",
    color: "Golden Shaded",
    sex: "male",
    location: "san francisco",
    familyStory:
      "Wallace is always glued to his Akita dog best friend throughout the day. The two have become truly inseparable companions, sharing every moment together. Their close bond brings extra joy and laughter to the whole family.",
  },
];

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

export default function JiliangFamiliesPage() {
  const [kittens, setKittens] = useState<Kitten[]>([]);
  const [selectedKitten, setSelectedKitten] = useState<Kitten | null>(null);
  const [kittenDialogOpen, setKittenDialogOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoEntry | null>(null);
  const [photoDialogOpen, setPhotoDialogOpen] = useState(false);

  useEffect(() => {
    fetch("/api/kittens")
      .then((r) => r.json())
      .then(setKittens);
  }, []);

  const families = kittens.filter((k) => k.status === "at_home");

  return (
    <>
      <section className="section-padding bg-brand-cream">
        <div className="container-wide">
          <h1 className="text-center">Past Litters</h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-brand-slate">
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
