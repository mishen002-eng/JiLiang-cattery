import type { Metadata } from "next";
import { ApplicationForm } from "@/components/sections/application-form";

export const metadata: Metadata = {
  title: "Apply to Adopt",
  description:
    "Submit an adoption application for a British Shorthair kitten from Jiliang Cattery in Atlanta or Toronto.",
};

export default function ApplyPage() {
  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-wide">
        <h1 className="text-center">Adoption Application</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-slate">
          Thank you for your interest in a Jiliang Cattery kitten. Please fill out the application
          below and we will be in touch within 3–5 business days.
        </p>
        <div className="mt-12">
          <ApplicationForm />
        </div>
      </div>
    </section>
  );
}
