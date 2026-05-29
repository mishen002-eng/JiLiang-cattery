"use client";

import { ClipboardList, Clock, Camera, CreditCard, Truck, Mail } from "lucide-react";
import Link from "next/link";
import { withSansAmpersand } from "@/lib/utils";

const steps = [
  {
    icon: ClipboardList,
    number: 1,
    title: "Submit Inquiry",
    description: "Tell us about yourself and the type of kitten you're looking for.",
  },
  {
    icon: Clock,
    number: 2,
    title: "Review & Waitlist",
    description: "We'll confirm availability and place you on the reservation list.",
  },
  {
    icon: Camera,
    number: 3,
    title: "Photos & Video",
    description: "Receive updates, photos and video to help you choose your kitten.",
  },
  {
    icon: CreditCard,
    number: 4,
    title: "Pay Deposit",
    description: "A deposit secures your kitten. Balance is due before shipping.",
  },
  {
    icon: Truck,
    number: 5,
    title: "Safe Delivery",
    description: "Your kitten will travel safely to your door with full support.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <h2 className="text-center">How to Reserve a Kitten</h2>
        <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-stretch">
          {/* Steps */}
          <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center rounded-2xl border border-brand-ice-dark bg-white p-5 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-cream">
                  <step.icon className="h-5 w-5 text-brand-brass" />
                </div>
                <div className="mt-3 flex h-7 w-7 items-center justify-center rounded-full bg-brand-brass text-xs font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-2 text-sm font-bold text-brand-charcoal">{withSansAmpersand(step.title)}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-brand-slate">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-brand-charcoal p-8 text-center text-white lg:max-w-[220px]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">
              Ready to welcome a JILIANG kitten?
            </h3>
            <p className="mt-2 text-sm text-white/70">We'd love to hear from you.</p>
            <Link
              href="/apply"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-brass px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-brass-dark"
            >
              Inquire Now <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
