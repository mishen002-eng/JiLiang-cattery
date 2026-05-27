import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Jiliang Cattery, our journey from Atlanta to Toronto, and our commitment to ethically breeding British Shorthair cats.",
};

export default function AboutPage() {
  return (
    <div className="bg-brand-cream">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-center">About Jiliang Cattery</h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-brand-slate">
            A passion for British Shorthairs, a commitment to excellence, and two homes united by
            one mission: raising extraordinary kittens.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-brand-ice">
              <Image
                src="/images/About Us/未标题-2.jpg"
                alt="Founder of Jiliang Cattery"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2>Our Breeding Program</h2>
              <p className="mt-4 leading-relaxed text-brand-slate">
                JILIANG is an established, registered British Shorthair cattery built on more than a
                decade of hands-on breeding experience. Over the years, our program has grown from a
                small personal passion into a structured cattery with a clear standard, careful
                selection, and long-term direction.
              </p>
              <p className="mt-4 leading-relaxed text-brand-slate">
                Our breeding work brings together selected lines from North America, Australia and
                Europe, while continuing to develop our own understanding of the British Shorthair.
                We value strong structure, balanced temperament, healthy development and the soft,
                substantial expression that defines a quality British Shorthair.
              </p>
              <p className="mt-4 leading-relaxed text-brand-slate">
                Show results have always been an important part of our journey, but they are not the
                only measure of our work. For us, the real goal is to produce cats with consistent
                quality, stable character and a recognizable JILIANG style — cats that represent
                both thoughtful breeding and everyday companionship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-center">Our Philosophy</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-brass/10">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="mt-4 text-lg">Health First</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                Every breeding cat undergoes comprehensive health screening including HCM
                echocardiograms, PKD DNA testing, and FeLV/FIV testing. We never cut corners on
                health.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-brass/10">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="mt-4 text-lg">Raised Underfoot</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                Our kittens are born and raised in our homes — not in a separate facility. They grow
                up with children, dogs, and the everyday rhythms of family life, producing
                confident, well-adjusted companions.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-brass/10">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="mt-4 text-lg">Lifetime Support</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                Our relationship does not end at pickup. We provide lifetime breeder support for
                every kitten we place — from nutrition advice to behavioral questions, we are always
                just a message away.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Our Story */}
      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="relative aspect-[1579/1126] w-full overflow-hidden rounded-2xl bg-brand-ice mb-8">
            <Image
              src="/images/About Us/kkk.jpg"
              alt="JILIANG Cattery"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="mb-8">Our Story</h2>
          <div className="flex flex-col gap-4">
            <p className="leading-relaxed text-brand-slate">
              Our story began with a blue British Shorthair imported from Europe. At the time, we
              were based in Canada, learning the breed through daily care, show preparation, and
              years of hands-on experience with the British Shorthair standard.
            </p>
            <p className="leading-relaxed text-brand-slate">
              That first cat became an important part of our foundation and earned Best British
              Shorthair recognition with CCA. More importantly, he is still living with us today —
              not only as a show memory, but as family, and as the beginning of everything JILIANG
              would become.
            </p>
            <p className="leading-relaxed text-brand-slate">
              Over the years, our program has continued to grow. We introduced selected North
              American, Australian and European lines, expanded into more colors, and gradually
              developed our own direction in type, temperament and overall expression.
            </p>
            <p className="leading-relaxed text-brand-slate">
              In 2024, JILIANG expanded to Atlanta, Georgia, establishing our U.S. branch while
              continuing our journey in the CFA and TICA show rings. Today, our cats carry that
              foundation forward — combining international bloodlines, thoughtful selection, and a
              recognizable JILIANG style shaped by more than a decade of breeding.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2>Meet Our Cats</h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-slate">
            Get to know the queens and kings behind our breeding program, or browse our available
            kittens.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              render={<Link href="/our-cats" />}
              className="bg-brand-brass hover:bg-brand-brass-dark"
            >
              Our Breeding Cats
            </Button>
            <Button
              render={<Link href="/available" />}
              variant="outline"
              className="border-brand-brass text-brand-brass hover:bg-brand-brass hover:text-white"
            >
              Our Past Litters
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
