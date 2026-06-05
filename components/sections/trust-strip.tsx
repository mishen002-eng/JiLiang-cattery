"use client";

import { Award, HeartPulse, Smile, Truck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const trustItems = [
  {
    icon: Award,
    title: "About JILIANG Cattery",
    description:
      "JILIANG is a registered British Shorthair cattery with 10+ years of experience. We focus on health, temperament and consistent type. Our cats carry selected bloodlines and a recognizable JILIANG style.",
    link: { href: "/about", label: "Learn more" },
  },
  {
    icon: HeartPulse,
    title: "Health First",
    description:
      "All parents are DNA tested and screened for PKD, HCM and FeLV/FIV. Kittens come with health certificate, vaccinations and deworming.",
  },
  {
    icon: Smile,
    title: "Exceptional Temperament",
    description:
      "Our kittens are well-socialized from an early age, raised in a loving home environment and accustomed to people and everyday life.",
  },
  {
    icon: Truck,
    title: "Worldwide Delivery",
    description:
      "We partner with professional pet transport services to ensure a safe, comfortable journey to your door, anywhere in the world.",
  },
];

function TrustCard({ item }: { item: typeof trustItems[number] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl border border-brand-ice-dark bg-white p-4 transition-shadow hover:shadow-md lg:p-6">
      <h3 className="text-sm font-bold text-brand-charcoal lg:text-base">{item.title}</h3>
      <p className={`mt-2 text-xs leading-snug tracking-tight text-brand-slate lg:text-sm ${!expanded ? "line-clamp-3" : ""}`}>
        {item.description}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-xs font-medium text-brand-charcoal transition-colors hover:text-brand-brass"
      >
        {expanded ? "Read less ↑" : "Read more ↓"}
      </button>
    </div>
  );
}

export function TrustStrip() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
          {trustItems.map((item) => (
            <TrustCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
