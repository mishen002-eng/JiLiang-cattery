import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Adoption Process",
  description:
    "Learn about our adoption process, pricing, deposits, transport options, and what comes with every Jiliang Cattery kitten.",
};

type IncludedItem = { label: string; note?: string; noteBelow?: boolean };

const leftItems: IncludedItem[] = [
  { label: "3× FVRCP Vaccines", note: "fully vaccinated for the first year" },
  { label: "1× Rabies Vaccine" },
  { label: "3× Deworming Treatments" },
  { label: "3× Parasite Prevention Treatments" },
  { label: "Physical Exam" },
  { label: "Spay/Neuter Surgery" },
  { label: "Microchip" },
  { label: "PKD DNA Test" },
];

const rightItems: IncludedItem[] = [
  { label: "Purebred Certificate" },
  { label: "6 Weeks Petsecure Insurance", note: "Canada only" },
  { label: "4 Weeks Trupanion Insurance", note: "US/Canada policies may vary" },
  { label: "One-Year Basic Medical Support", note: "common minor illness medication support", noteBelow: true },
  { label: "3-Year Serious Illness Replacement", note: "FIP & HCM replacement guarantee — conditions apply", noteBelow: true },
  { label: "Lifetime PKD Genetic Disease Guarantee", note: "replacement guarantee for confirmed PKD diagnosis", noteBelow: true },
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
                desc: "Fill out our application form with details about your home, lifestyle, and kitten preferences. We review every application carefully to ensure a great match.",
              },
              {
                step: 2,
                title: <>Application Review <span className="font-sans">&</span> Approval</>,
                desc: "We review your application within 3–5 business days. We may reach out with follow-up questions. Once approved, you are invited to place a deposit.",
              },
              {
                step: 3,
                title: "Place Your Deposit",
                desc: "A non-refundable deposit of $200 USD or $300 CAD is required to secure your position on our waitlist and lock in the current pricing. This deposit will be applied toward the total purchase price of your kitten.",
              },
              {
                step: 4,
                title: "Choose Your Kitten",
                desc: "Once a litter is born, we will first identify the kittens that align with your preferences, goals, and availability requirements. Families are then invited to choose from the suitable available kittens. Selection order is determined by the order in which deposits are placed.",
              },
              {
                step: 5,
                title: "Bring Your Kitten Home",
                desc: "Kittens go home between 16–20 weeks of age, fully vaccinated, microchipped, spayed/neutered, and well-socialized. Pickup is available at our Atlanta or Toronto locations, or transportation can be arranged.",
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
                <p className="flex items-center justify-center gap-1.5 text-sm font-medium text-brand-slate">JiLiang US <img src="https://flagcdn.com/w20/us.png" width="20" height="15" alt="US" /></p>
                <p className="mt-2 text-3xl font-bold text-brand-charcoal">$1,800 – $3,800 USD</p>
                <p className="mt-1 text-sm text-brand-slate">Deposit: $200 USD (non-refundable)</p>
              </CardContent>
            </Card>
            <Card className="border-brand-ice-dark">
              <CardContent className="p-6 text-center">
                <p className="flex items-center justify-center gap-1.5 text-sm font-medium text-brand-slate">JiLiang Canada <img src="https://flagcdn.com/w20/ca.png" width="20" height="15" alt="CA" /></p>
                <p className="mt-2 text-3xl font-bold text-brand-charcoal">$2,500 – $5,500 CAD</p>
                <p className="mt-1 text-sm text-brand-slate">Deposit: $300 CAD (non-refundable)</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-4 text-center text-sm text-brand-slate">
            We do not price our kittens based on color or gender. Pricing is evaluated according to each kitten&apos;s overall quality, including body structure, muscular development, coat quality, head type, and skull shape. In general, pet families often select from the lower to mid price range, while breeding and show-focused homes typically pursue kittens from the higher end of the range.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="text-center">What Comes with Your Kitten</h2>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-x-32 md:grid-cols-2">
            {[leftItems, rightItems].map((col, ci) => (
              <div key={ci}>
                {col.map((item) => (
                  <div key={item.label} className="flex items-start gap-3 border-b border-brand-ice py-3 last:border-0">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-brand-charcoal">
                      {item.label}
                      {item.note && item.noteBelow && <><br /><em className="text-sm text-brand-slate">({item.note})</em></>}
                      {item.note && !item.noteBelow && <em className="ml-1 text-brand-slate">({item.note})</em>}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-center">Transport Options</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
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
                  a convenient halfway point or door-to-door service. Available within a reasonable radius of either location.
                </p>
                <p className="mt-3 text-sm font-medium text-brand-brass">Varies by distance</p>
              </CardContent>
            </Card>
            <Card className="border-brand-ice-dark">
              <CardContent className="p-6">
                <h3 className="text-lg">Flight Nanny</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                  A trusted handler accompanies your kitten in-cabin on a direct flight to your
                  nearest major airport. Available worldwide.
                </p>
                <p className="mt-3 text-sm font-medium text-brand-brass">$300 USD per 24 hours + hotel (if applicable) + round-trip flight tickets</p>
              </CardContent>
            </Card>
            <Card className="border-brand-ice-dark">
              <CardContent className="p-6">
                <h3 className="text-lg">Pet Flight Cargo</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                  We&apos;re happy to assist with transportation for your kitten via airline cargo — with no service fee. Available for Canadian and USA domestic flights, subject to seasonal restrictions depending on departure and destination.
                </p>
                <p className="mt-4 text-sm font-medium text-brand-charcoal">Customers are responsible for:</p>
                <ul className="mt-2 space-y-1 text-sm text-brand-slate">
                  <li>• Airline fee <em>(approx. $300–$500 USD/CAD, paid directly to the airline)</em></li>
                  <li>• Airline-approved crate <em>(approx. $40–$60 USD/CAD, yours to keep)</em></li>
                  <li>• Required documentation <em>(approx. $80–$110 USD/CAD)</em></li>
                </ul>
                <p className="mt-4 text-sm font-medium text-brand-brass">All costs are based on official receipts and will be billed accordingly.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Health Guarantee */}
      <section className="bg-white section-padding">
        <div className="container-narrow">
          <h2 className="text-center">Health Guarantee</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-brand-slate">
            No matter what happens, you are never alone. Your breeder will always stand by you and your kitten, providing support, guidance, and care every step of the way. 🐾
          </p>

          <div className="mt-10 space-y-6">
            {/* One-Year */}
            <Card className="border-brand-ice-dark">
              <CardContent className="p-8">
                <h3 className="text-lg">One-Year Basic Medical Support</h3>
                <p className="mt-3 leading-relaxed text-brand-slate">
                  We want your kitten to start life happy and healthy. For the first year, we provide basic care medication support for common minor issues, including respiratory infections, mild tummy troubles, eye infections, minor skin issues, and routine deworming.
                </p>
                <p className="mt-3 leading-relaxed text-brand-slate">
                  Medications are provided directly from our cattery when available. This support is provided as breeder assistance only and is not a reimbursement service or veterinary care. All medical decisions and treatments should always be handled by a licensed veterinarian.
                </p>
                <p className="mt-3 text-sm text-brand-slate/80 italic">
                  Support is provided on a case-by-case basis and is limited to reasonable quantities.
                </p>
              </CardContent>
            </Card>

            {/* Serious Illness */}
            <Card className="border-brand-ice-dark">
              <CardContent className="p-8">
                <h3 className="text-lg">Serious Illness Replacement</h3>
                <p className="mt-3 leading-relaxed text-brand-slate">
                  We understand how heartbreaking it can be if a kitten becomes seriously ill. If your kitten is diagnosed with FIP or HCM within 3 years of going home, we will offer a replacement kitten of equal value, giving you peace of mind.
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-brand-slate">
                  <li>• Diagnosis must be confirmed by a licensed veterinarian with written medical documentation, and veterinary records must be provided for review.</li>
                  <li>• This policy applies strictly to FIP and HCM only and does not include any other diseases or conditions.</li>
                  <li>• This guarantee does not cover accidents, injuries, or environmental factors after the kitten leaves our care.</li>
                </ul>
              </CardContent>
            </Card>

            {/* PKD */}
            <Card className="border-brand-ice-dark">
              <CardContent className="p-8">
                <h3 className="text-lg">PKD Genetic Disease Lifetime Guarantee</h3>
                <p className="mt-3 leading-relaxed text-brand-slate">
                  Your kitten&apos;s health is very important to us. Our breeding cats are carefully screened for PKD, and we do not breed known carriers.
                </p>
                <p className="mt-3 leading-relaxed text-brand-slate">
                  If PKD is ever confirmed through genetic testing or veterinary diagnosis, we will provide a replacement kitten of equal value.
                </p>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card className="border-brand-ice-dark bg-brand-cream">
              <CardContent className="p-8">
                <h3 className="text-lg">Important Notes</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-brand-slate">
                  <li>• This health guarantee applies only to the original adopter and is non-transferable.</li>
                  <li>• It does not cover accidents, injuries, neglect, or conditions caused by environmental factors after adoption.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
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
