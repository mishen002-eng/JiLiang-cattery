import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Kitten } from "./types";
import type { ReactNode } from "react";
import { createElement, Fragment } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(kitten: Kitten, currency: "USD" | "CAD"): string {
  const amount = currency === "USD" ? kitten.priceUSD : kitten.priceCAD;
  return new Intl.NumberFormat(currency === "USD" ? "en-US" : "en-CA", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Wraps & characters in a font-sans span so they don't render as the decorative Playfair Display glyph in headings. */
export function withSansAmpersand(text: string): ReactNode {
  const parts = text.split(" & ");
  if (parts.length === 1) return text;
  return createElement(Fragment, null, ...parts.flatMap((part, i) =>
    i < parts.length - 1
      ? [part, createElement("span", { key: i, className: "font-sans mx-1" }, "&")]
      : [part]
  ));
}

export function getAge(dob: string): string {
  const born = new Date(dob);
  const now = new Date();
  const weeks = Math.floor((now.getTime() - born.getTime()) / (7 * 24 * 60 * 60 * 1000));
  if (weeks < 1) return "Newborn";
  if (weeks < 12) return `${weeks} weeks`;
  const months = Math.floor(weeks / 4.33);
  return `${months} month${months !== 1 ? "s" : ""}`;
}
