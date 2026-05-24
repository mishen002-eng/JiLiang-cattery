"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visible = testimonials.slice(startIndex, startIndex + 3);

  const canPrev = startIndex > 0;
  const canNext = startIndex + 3 < testimonials.length;

  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-wide">
        <div className="flex items-center justify-between">
          <h2 className="text-center">What Our Clients Say</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setStartIndex((i) => Math.max(0, i - 3))}
              disabled={!canPrev}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-brand-ice-dark bg-white transition-colors hover:bg-brand-cream disabled:opacity-30"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setStartIndex((i) => Math.min(testimonials.length - 3, i + 3))}
              disabled={!canNext}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-brand-ice-dark bg-white transition-colors hover:bg-brand-cream disabled:opacity-30"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {visible.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl border border-brand-ice-dark bg-white p-6"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 text-sm leading-relaxed text-brand-slate">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream text-sm font-bold text-brand-brass">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-charcoal">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-brand-slate">{testimonial.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
