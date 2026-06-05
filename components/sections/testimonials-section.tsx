"use client";

import { useState, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export function TestimonialsSection() {
  // Desktop: 3 at a time
  const [startIndex, setStartIndex] = useState(0);
  const visible = testimonials.slice(startIndex, startIndex + 3);
  const canPrev = startIndex > 0;
  const canNext = startIndex + 3 < testimonials.length;

  // Mobile: 1 at a time
  const [mobileIndex, setMobileIndex] = useState(0);
  const current = testimonials[mobileIndex];
  const touchStartX = useRef(0);

  const goNext = () => { if (mobileIndex < testimonials.length - 1) setMobileIndex((i) => i + 1); };
  const goPrev = () => { if (mobileIndex > 0) setMobileIndex((i) => i - 1); };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta < -40) goNext();
    if (delta > 40) goPrev();
  };

  return (
    <section className="py-8 md:section-padding bg-brand-cream">
      <div className="container-wide">

        {/* ── Mobile layout ── */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <h2>What Our Clients Say</h2>
            <div className="flex gap-2">
              <button
                onClick={goPrev}
                disabled={mobileIndex === 0}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-brand-ice-dark bg-white transition-colors hover:bg-brand-cream disabled:opacity-30"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={goNext}
                disabled={mobileIndex === testimonials.length - 1}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-brand-ice-dark bg-white transition-colors hover:bg-brand-cream disabled:opacity-30"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            className="mt-6 flex flex-col rounded-2xl border border-brand-ice-dark bg-white p-6"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-slate">
              &ldquo;{current.text}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream text-sm font-bold text-brand-brass">
                {current.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-charcoal">{current.author}</p>
                <p className="text-xs text-brand-slate">{current.city}</p>
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="mt-4 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setMobileIndex(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === mobileIndex ? "bg-brand-charcoal" : "bg-brand-ice-dark"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop layout ── */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between">
            <h2>What Our Clients Say</h2>
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
                className="flex flex-col rounded-2xl border border-brand-ice-dark bg-white p-6"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-slate">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream text-sm font-bold text-brand-brass">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-charcoal">{testimonial.author}</p>
                    <p className="text-xs text-brand-slate">{testimonial.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
