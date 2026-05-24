import { z } from "zod";

export const applicationSchema = z.object({
  // Step 1: About You
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  country: z.enum(["US", "CA", "other"], "Please select a country"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State/Province is required"),

  // Step 2: Location
  preferredLocation: z.enum(["atlanta", "toronto"], "Please select a pickup location"),
  needsTransport: z.boolean(),

  // Step 3: Your Home
  housingType: z.enum(["house", "apartment", "condo", "townhouse", "other"], "Please select your housing type"),
  ownOrRent: z.enum(["own", "rent"], "Please select own or rent"),
  landlordApproval: z.string().optional(),
  otherPets: z.string(),
  hasChildren: z.boolean(),
  childrenAges: z.string().optional(),

  // Step 4: Kitten Preferences
  sexPreference: z.enum(["male", "female", "no_preference"]),
  colorPreference: z.string(),
  timing: z.enum(["current_litter", "waitlist", "flexible"]),
  indoorOnly: z.boolean().refine((val) => val === true, {
    message: "You must commit to keeping the kitten indoors",
  }),
  spayNeuterAgreement: z.boolean().refine((val) => val === true, {
    message: "You must agree to the spay/neuter contract",
  }),

  // Step 5: References
  vetName: z.string().optional(),
  vetPhone: z.string().optional(),
  personalReference: z.string().optional(),
  personalReferencePhone: z.string().optional(),

  // Honeypot
  website: z.string().max(0).optional(),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  subject: z.enum(["general", "kitten_inquiry", "visit_request"], "Please select a subject"),
  message: z.string().min(10, "Please enter at least 10 characters"),
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const stepFields: (keyof ApplicationFormData)[][] = [
  ["firstName", "lastName", "email", "phone", "country", "city", "state"],
  ["preferredLocation", "needsTransport"],
  ["housingType", "ownOrRent", "otherPets", "hasChildren"],
  ["sexPreference", "colorPreference", "timing", "indoorOnly", "spayNeuterAgreement"],
  ["vetName", "vetPhone", "personalReference", "personalReferencePhone"],
];
