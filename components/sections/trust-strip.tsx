import { Award, HeartPulse, Smile, Truck } from "lucide-react";
import Link from "next/link";

const trustItems = [
  {
    icon: Award,
    title: "About JILIANG Cattery",
    description:
      "We are a small, experienced cattery specializing in British Shorthair. With over a decade of breeding experience, we focus on health, temperament and excellent type.",
    link: { href: "/about", label: "Learn more about us" },
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

export function TrustStrip() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-brand-ice-dark bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cream">
                <item.icon className="h-6 w-6 text-brand-brass" />
              </div>
              <h3 className="text-base font-bold text-brand-charcoal">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-slate">{item.description}</p>
              {item.link && (
                <Link
                  href={item.link.href}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-charcoal transition-colors hover:text-brand-brass"
                >
                  {item.link.label} <span aria-hidden="true">&rarr;</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
