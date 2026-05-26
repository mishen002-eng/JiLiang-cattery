export type CatteryLocation = "atlanta" | "toronto";
export type KittenStatus = "available" | "reserved" | "adopted" | "upcoming" | "at_home";
export type Sex = "male" | "female";

export interface Kitten {
  id: string;
  name: string;
  dob: string;
  sex: Sex;
  color: string;
  pattern: string;
  priceUSD: number;
  priceCAD: number;
  location: CatteryLocation;
  status: KittenStatus;
  photos: string[];
  sire: string;
  dam: string;
  personality?: string;
  registeredName?: string;
  homeDate?: string;
  familyStory?: string;
}

export interface BreedingCat {
  id: string;
  name: string;
  registeredName: string;
  sex: Sex;
  dob: string;
  color: string;
  pattern: string;
  location: CatteryLocation;
  photos: string[];
  healthTests: string[];
  titles: string[];
  pedigreeNotes: string;
  personality: string;
  role: "queen" | "king";
}

export interface Testimonial {
  id: string;
  author: string;
  location: CatteryLocation;
  city: string;
  text: string;
  kittenName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  location: CatteryLocation;
  caption: string;
}
