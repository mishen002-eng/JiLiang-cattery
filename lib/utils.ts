import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Kitten } from "./types";

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

export function getAge(dob: string): string {
  const born = new Date(dob);
  const now = new Date();
  const weeks = Math.floor((now.getTime() - born.getTime()) / (7 * 24 * 60 * 60 * 1000));
  if (weeks < 1) return "Newborn";
  if (weeks < 12) return `${weeks} weeks`;
  const months = Math.floor(weeks / 4.33);
  return `${months} month${months !== 1 ? "s" : ""}`;
}
