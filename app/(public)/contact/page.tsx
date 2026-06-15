import type { Metadata } from "next";
import { ContactPageContent } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Jiliang Cattery about our British Shorthair kittens or the adoption process. We typically respond within 24–48 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
