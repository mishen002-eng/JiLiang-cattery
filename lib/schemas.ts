import { z } from "zod";

export const applicationSchema = z.object({
  // Step 1: About You
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  country: z.enum(["US", "CA", "international"]),
  countryOther: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State / Province is required"),
  occupation: z.string().optional(),

  // Step 2: Your Home
  housingType: z.enum(["house", "apartment", "condo", "townhouse", "other"]),
  ownOrRent: z.enum(["own", "rent"]),
  landlordApproval: z.string().optional(),
  otherPets: z.string().optional(),
  hasChildren: z.boolean(),
  childrenAges: z.string().optional(),
  allergyAwareness: z.enum(["none", "yes", "unknown"]),

  // Step 3: Your Kitten
  sexPreference: z.enum(["male", "female", "no_preference"]),
  colorPreference: z.string().optional(),
  timing: z.enum(["asap", "next_available", "flexible"]),
  consideringPair: z.boolean(),
  needsTransport: z.boolean(),

  // Step 4: Commitments
  indoorOnly: z.boolean().refine((val) => val === true, {
    message: "You must commit to keeping the kitten indoors",
  }),
  noDeClawAgreement: z.boolean().refine((val) => val === true, {
    message: "You must agree to our no-declaw policy",
  }),
  additionalInfo: z.string().optional(),

  // Honeypot
  website: z.string().max(0).optional(),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  subject: z.enum(["general", "kitten_inquiry", "visit_request"]),
  message: z.string().min(10, "Please enter at least 10 characters"),
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const stepFields: (keyof ApplicationFormData)[][] = [
  ["firstName", "lastName", "email", "phone", "country", "city", "state"],
  ["housingType", "ownOrRent", "hasChildren", "allergyAwareness"],
  ["sexPreference", "timing"],
  ["indoorOnly", "noDeClawAgreement"],
];
