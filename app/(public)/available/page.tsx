import type { Metadata } from "next";
import { readKittens } from "@/lib/data";
import { AvailableClient } from "./available-client";

// Read live data on every request (parity with the previous client fetch),
// while still emitting fully crawlable server-rendered HTML.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Past Litters",
  description:
    "Past litters from Jiliang Cattery — British Shorthair kittens now settled in their forever homes, with photos and family stories from nearly a decade of placements worldwide.",
  alternates: { canonical: "/available" },
};

export default function PastLittersPage() {
  const families = readKittens().filter((k) => k.status === "at_home");

  return <AvailableClient families={families} />;
}
