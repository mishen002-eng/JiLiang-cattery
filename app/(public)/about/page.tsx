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
                src="/images/cats/placeholder.svg"
                alt="Founder of Jiliang Cattery"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2>Our Story</h2>
              <p className="mt-4 leading-relaxed text-brand-slate">
                Jiliang Cattery was born from a deep love of the British Shorthair breed. What
                started as a personal fascination with their plush coats and gentle personalities
                grew into a careful, deliberate breeding program in Atlanta, Georgia.
              </p>
              <p className="mt-4 leading-relaxed text-brand-slate">
                Our foundation cats were imported from award-winning European bloodlines, chosen not
                just for their stunning looks but for their sweet, even-tempered dispositions. From
                the very beginning, our goal has been to produce kittens that are not only beautiful
                but healthy, well-socialized, and ready to become cherished family members.
              </p>
              <p className="mt-4 leading-relaxed text-brand-slate">
                In 2024, we expanded to Toronto, Canada, bringing our standards and philosophy north
                of the border. Whether in Atlanta or Toronto, every Jiliang kitten receives the same
                exceptional care.
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

      {/* The Breed */}
      <section className="bg-white section-padding">
        <div className="container-narrow">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2>Why British Shorthairs?</h2>
              <p className="mt-4 leading-relaxed text-brand-slate">
                The British Shorthair is one of the oldest and most beloved cat breeds in the world.
                Known for their round faces, dense plush coats, and calm dispositions, they make
                ideal companions for families, couples, and individuals alike.
              </p>
              <p className="mt-4 leading-relaxed text-brand-slate">
                They are independent enough to be content when you are at work, but affectionate
                enough to greet you at the door when you come home. They are gentle with children,
                tolerant of dogs, and get along beautifully with other cats.
              </p>
              <p className="mt-4 leading-relaxed text-brand-slate">
                At Jiliang, we breed for the classic British Shorthair type: round heads, cobby
                bodies, and that signature dense coat. Our program includes blue, lilac, cinnamon,
                chocolate, and golden shaded colors.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-brand-ice">
              <Image
                src="/images/cats/placeholder.svg"
                alt="Blue British Shorthair cat portrait"
                fill
                className="object-cover"
              />
            </div>
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
              Available Kittens
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
