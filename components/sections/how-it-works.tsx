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
    <section className="py-8 md:py-16 lg:py-24 bg-white">
      <div className="container-wide">
        <h2 className="text-center">How to Reserve a Kitten</h2>
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:mt-12">
          {/* Steps */}
          <div className="flex flex-1 flex-col gap-3 lg:grid lg:grid-cols-5 lg:gap-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-center gap-4 rounded-2xl border border-brand-ice-dark bg-white p-4 lg:flex-col lg:items-center lg:p-5 lg:text-center"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-cream md:rounded-full">
                  <step.icon className="h-5 w-5 text-brand-brass" />
                </div>
                {/* Text */}
                <div className="flex-1 lg:w-full">
                  <div className="flex items-center gap-2 lg:mt-3 lg:flex-col lg:items-center lg:justify-center lg:gap-0">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-brass text-[10px] font-bold text-white lg:h-7 lg:w-7 lg:text-xs">
                      {step.number}
                    </div>
                    <h3 className="text-sm font-bold text-brand-charcoal lg:mt-2">{withSansAmpersand(step.title)}</h3>
                  </div>
                  <p className="mt-1 text-xs leading-snug text-brand-slate lg:mt-1.5 lg:leading-relaxed">
                    {step.description}
                  </p>
                </div>
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
