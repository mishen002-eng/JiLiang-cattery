"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import { faqItems } from "@/lib/faq";

export function HomepageFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const preview = faqItems.slice(0, 6);

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex items-center justify-between">
          <h2>Frequently Asked Questions</h2>
          <Link
            href="/faq"
            className="hidden items-center gap-1 text-sm font-medium text-brand-charcoal transition-colors hover:text-brand-brass sm:inline-flex"
          >
            View all FAQs <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {preview.map((item) => (
            <button
              key={item.id}
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="cursor-pointer rounded-xl border border-brand-ice-dark bg-white p-4 text-left transition-all hover:border-brand-brass/30"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-brand-charcoal">{item.question}</span>
                {openId === item.id ? (
                  <Minus className="h-4 w-4 shrink-0 text-brand-slate" />
                ) : (
                  <Plus className="h-4 w-4 shrink-0 text-brand-slate" />
                )}
              </div>
              {openId === item.id && (
                <p className="mt-3 text-sm leading-relaxed text-brand-slate">{item.answer}</p>
              )}
            </button>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-charcoal"
          >
            View all FAQs &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
