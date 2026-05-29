import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/faq";
import { withSansAmpersand } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about adopting a British Shorthair kitten from Jiliang Cattery, including pricing, health guarantees, and transport.",
};

export default function FAQPage() {
  const categories = [...new Set(faqItems.map((item) => item.category))];

  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-narrow">
        <h1 className="text-center">Frequently Asked Questions</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-slate">
          Everything you need to know about adopting from Jiliang Cattery. Can&apos;t find your
          answer?{" "}
          <a href="/contact" className="text-brand-brass underline">
            Contact us
          </a>
          .
        </p>

        <div className="mt-12 space-y-10">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="mb-4 text-xl text-brand-charcoal">{withSansAmpersand(category)}</h2>
              <Accordion multiple className="space-y-2">
                {faqItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <AccordionItem
                      key={item.id}
                      value={item.id}
                      className="rounded-lg border border-brand-ice-dark bg-white px-6"
                    >
                      <AccordionTrigger className="text-left font-medium text-brand-charcoal hover:text-brand-brass">
                        {withSansAmpersand(item.question)}
                      </AccordionTrigger>
                      <AccordionContent className="leading-relaxed text-brand-slate">
                        <div className="space-y-3">
                          {item.answer.split("\n\n").map((block, i) => {
                            const isHeader = block.length < 60 && !block.endsWith(".") && !block.endsWith(")") && !block.includes("$");
                            return isHeader
                              ? <p key={i} className="font-semibold text-brand-charcoal">{block}</p>
                              : <p key={i} className="whitespace-pre-line">{block}</p>;
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
