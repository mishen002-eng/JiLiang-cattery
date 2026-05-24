import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Adoption Process",
  description:
    "Learn about our adoption process, pricing, deposits, transport options, and what comes with every Jiliang Cattery kitten.",
};

const included = [
  "TICA registration papers",
  "Age-appropriate vaccinations",
  "Microchip with registration",
  "Veterinary health certificate",
  "Deworming and flea treatment",
  "Starter kit (food, toy, blanket with mom's scent)",
  "Spay/neuter contract",
  "2-year genetic health guarantee (HCM & PKD)",
  "Lifetime breeder support",
];

export default function ProcessPage() {
  return (
    <div className="bg-brand-cream">
      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-center">Adoption Process</h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-brand-slate">
            From application to homecoming, here is everything you need to know about adopting a
            Jiliang Cattery kitten.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2>How It Works</h2>
          <div className="mt-8 space-y-8">
            {[
              {
                step: 1,
                title: "Submit Your Application",
                desc: "Fill out our adoption application with details about your home, lifestyle, and kitten preferences. We review every application carefully to ensure a great match.",
              },
              {
                step: 2,
                title: "Application Review & Approval",
                desc: "We review your application within 3–5 business days. We may reach out with follow-up questions. Once approved, you are invited to place a deposit.",
              },
              {
                step: 3,
                title: "Place Your Deposit",
                desc: "A non-refundable deposit of $500 USD (Atlanta) or $700 CAD (Toronto) secures your spot on our waitlist. This deposit is applied toward the total purchase price of your kitten.",
              },
              {
                step: 4,
                title: "Choose Your Kitten",
                desc: "When a litter is born, we match families with kittens based on your preferences, timing, and personality. You will receive regular photos and updates as your kitten grows.",
              },
              {
                step: 5,
                title: "Bring Your Kitten Home",
                desc: "Kittens go home at 12 weeks of age, fully vaccinated, microchipped, and socialized. You can pick up in person at our Atlanta or Toronto location, or arrange transport.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-brass text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="mt-1 leading-relaxed text-brand-slate">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-center">Pricing</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="border-brand-ice-dark">
              <CardContent className="p-6 text-center">
                <p className="text-sm font-medium text-brand-slate">Atlanta, GA 🇺🇸</p>
                <p className="mt-2 text-3xl font-bold text-brand-charcoal">$2,500 – $3,500 USD</p>
                <p className="mt-1 text-sm text-brand-slate">Deposit: $500 USD (non-refundable)</p>
              </CardContent>
            </Card>
            <Card className="border-brand-ice-dark">
              <CardContent className="p-6 text-center">
                <p className="text-sm font-medium text-brand-slate">Toronto, ON 🇨🇦</p>
                <p className="mt-2 text-3xl font-bold text-brand-charcoal">$3,200 – $4,500 CAD</p>
                <p className="mt-1 text-sm text-brand-slate">Deposit: $700 CAD (non-refundable)</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-4 text-center text-sm text-brand-slate">
            Pricing varies based on color, pattern, and whether pet or breeding rights are included.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="text-center">What Comes with Your Kitten</h2>
          <div className="mx-auto mt-8 max-w-lg">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3 border-b border-brand-ice py-3 last:border-0">
                <Check className="h-5 w-5 shrink-0 text-emerald-600" />
                <span className="text-brand-charcoal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-center">Transport Options</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card className="border-brand-ice-dark">
              <CardContent className="p-6">
                <h3 className="text-lg">Local Pickup</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                  Pick up your kitten directly from our home in Atlanta or Toronto. We will spend
                  time going over care instructions and introduce you to your kitten's parents.
                </p>
                <p className="mt-3 text-sm font-medium text-brand-brass">No additional cost</p>
              </CardContent>
            </Card>
            <Card className="border-brand-ice-dark">
              <CardContent className="p-6">
                <h3 className="text-lg">Ground Transport</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                  For families within driving distance, we can arrange a personal delivery or meet at
                  a convenient halfway point. Available within a reasonable radius of either location.
                </p>
                <p className="mt-3 text-sm font-medium text-brand-brass">Varies by distance</p>
              </CardContent>
            </Card>
            <Card className="border-brand-ice-dark">
              <CardContent className="p-6">
                <h3 className="text-lg">Flight Nanny</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                  A trusted handler accompanies your kitten in-cabin on a direct flight to your
                  nearest major airport. Available throughout the US and Canada.
                </p>
                <p className="mt-3 text-sm font-medium text-brand-brass">$350–$600 USD/CAD</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cross-Border */}
      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="text-center">Cross-Border Adoptions</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-brand-slate">
            Adopting from our other location? We handle all the paperwork. Cross-border adoptions
            between the US and Canada require a USDA-accredited veterinary health certificate and
            may require additional import permits depending on the destination province or state.
            We have experience with this process and will guide you through every step.
          </p>
        </div>
      </section>

      {/* Health Guarantee */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-center">Health Guarantee</h2>
          <Card className="mt-8 border-brand-ice-dark">
            <CardContent className="p-8">
              <p className="leading-relaxed text-brand-slate">
                We stand behind the health of every kitten we produce. All Jiliang kittens come with
                a <strong className="text-brand-charcoal">2-year genetic health guarantee</strong> covering
                hereditary conditions including HCM (hypertrophic cardiomyopathy) and PKD (polycystic
                kidney disease). If a covered condition is diagnosed within two years of purchase, we
                will work with you to provide a replacement kitten or partial refund, depending on
                the circumstances. Full terms are outlined in our adoption contract.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-brass section-padding">
        <div className="container-narrow text-center">
          <h2 className="text-white">Ready to Get Started?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Submit your application today. We review applications within 3–5 business days.
          </p>
          <Button
            render={<Link href="/apply" />}
            size="lg"
            className="mt-8 bg-white text-brand-brass hover:bg-brand-cream"
          >
            Start Your Application
          </Button>
        </div>
      </section>
    </div>
  );
}
