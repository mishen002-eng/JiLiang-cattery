"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { FormProgress } from "./form-progress";
import { applicationSchema, stepFields, type ApplicationFormData } from "@/lib/schemas";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-500">{message}</p>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-medium text-brand-charcoal">{children}</label>;
}

function RequiredBadge() {
  return <span className="ml-0.5 text-brand-brass">*</span>;
}

const ALL_COLORS = [
  "Blue",
  "Cream",
  "Blue Cream Tortie",
  "Black",
  "Black Red Tortie",
  "Red",
  "White (copper eyed)",
  "Golden Shaded",
  "Blue Golden Shaded",
  "Lilac Golden Shaded",
  "Golden Point",
  "Blue Golden Point",
  "Lilac Golden Point",
];

const FEMALE_ONLY_COLORS = new Set(["Blue Cream Tortie", "Black Red Tortie"]);

export function ApplicationForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "US",
      countryOther: "",
      city: "",
      state: "",
      occupation: "",
      housingType: "house",
      ownOrRent: "own",
      landlordApproval: "",
      otherPets: "",
      hasChildren: false,
      childrenAges: "",
      allergyAwareness: "none",
      sexPreference: "no_preference",
      colorPreference: "",
      timing: "flexible",
      consideringPair: false,
      needsTransport: false,
      indoorOnly: false,
      noDeClawAgreement: false,
      additionalInfo: "",
      website: "",
    },
  });

  const {
    register,
    setValue,
    watch,
    trigger,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const TOTAL_STEPS = 5;

  const handleNext = async () => {
    if (step < TOTAL_STEPS - 1) {
      const fields = stepFields[step];
      const valid = fields ? await trigger(fields) : true;
      if (valid) setStep((s) => s + 1);
    }
  };

  const handleBack = () => setStep((s) => Math.max(0, s - 1));

  // If RHF validation fails on submit, jump to the first step that has errors
  const onSubmitError = () => {
    for (let i = 0; i < stepFields.length; i++) {
      const fields = stepFields[i];
      if (fields && fields.some((f) => errors[f])) {
        setStep(i);
        return;
      }
    }
  };

  const onSubmit = async (data: ApplicationFormData) => {
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        toast.success("Application submitted successfully!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
  };

  if (submitted) {
    return (
      <Card className="mx-auto max-w-lg border-brand-ice-dark">
        <CardContent className="p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <span className="text-3xl">🐱</span>
          </div>
          <h2 className="mt-4 text-2xl">Application Received!</h2>
          <p className="mt-2 text-brand-slate">
            Thank you for your interest in a Jiliang Cattery kitten. We will review your
            application and be in touch within 3–5 business days.
          </p>
          <p className="mt-4 text-sm text-brand-slate-light">
            Check your email for a confirmation message.
          </p>
        </CardContent>
      </Card>
    );
  }

  const values = watch();

  const availableColors =
    values.sexPreference === "male"
      ? ALL_COLORS.filter((c) => !FEMALE_ONLY_COLORS.has(c))
      : ALL_COLORS;

  const timingLabel =
    values.timing === "asap"
      ? "ASAP (within 3 months)"
      : values.timing === "next_available"
        ? "Next Available Litter (3–6 months)"
        : "Flexible (6–12 months)";

  const countryLabel =
    values.country === "US"
      ? "United States"
      : values.country === "CA"
        ? "Canada"
        : values.countryOther || "International";

  return (
    <div className="mx-auto max-w-2xl">
      <FormProgress currentStep={step} onStepClick={setStep} />

      <Card className="mt-8 border-brand-ice-dark">
        <CardContent className="p-6 md:p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Honeypot */}
            <input
              type="text"
              {...register("website")}
              className="sr-only"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* ── Step 1: About You ── */}
            {step === 0 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-brand-charcoal">About You</h3>
                  <p className="mt-1 text-sm text-brand-slate">
                    Let us get to know you. Fields marked <span className="text-brand-brass">*</span> are required.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <SectionLabel>First Name <RequiredBadge /></SectionLabel>
                    <Input {...register("firstName")} className="mt-1" placeholder="Jane" />
                    <FieldError message={errors.firstName?.message} />
                  </div>
                  <div>
                    <SectionLabel>Last Name <RequiredBadge /></SectionLabel>
                    <Input {...register("lastName")} className="mt-1" placeholder="Smith" />
                    <FieldError message={errors.lastName?.message} />
                  </div>
                </div>

                <div>
                  <SectionLabel>Email Address <RequiredBadge /></SectionLabel>
                  <Input type="email" {...register("email")} className="mt-1" placeholder="jane@example.com" />
                  <FieldError message={errors.email?.message} />
                </div>

                <div>
                  <SectionLabel>Phone Number <RequiredBadge /></SectionLabel>
                  <Input type="tel" {...register("phone")} className="mt-1" placeholder="(000) 000-0000" />
                  <FieldError message={errors.phone?.message} />
                </div>

                <div>
                  <SectionLabel>Country <RequiredBadge /></SectionLabel>
                  <Select
                    value={values.country}
                    onValueChange={(v) => {
                      setValue("country", v as ApplicationFormData["country"]);
                      if (v !== "international") setValue("countryOther", "");
                    }}
                  >
                    <SelectTrigger className="mt-1 w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="CA">Canada</SelectItem>
                      <SelectItem value="international">International / Other Country</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {values.country === "international" && (
                  <div>
                    <SectionLabel>Country / Region <RequiredBadge /></SectionLabel>
                    <Input
                      {...register("countryOther")}
                      className="mt-1"
                      placeholder="e.g., United Kingdom, China, Japan, UAE"
                    />
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <SectionLabel>City <RequiredBadge /></SectionLabel>
                    <Input {...register("city")} className="mt-1" placeholder="Atlanta" />
                    <FieldError message={errors.city?.message} />
                  </div>
                  <div>
                    <SectionLabel>State / Province <RequiredBadge /></SectionLabel>
                    <Input {...register("state")} className="mt-1" placeholder="GA" />
                    <FieldError message={errors.state?.message} />
                  </div>
                </div>

                <div>
                  <SectionLabel>Occupation</SectionLabel>
                  <Input
                    {...register("occupation")}
                    className="mt-1"
                    placeholder="e.g., Teacher, Engineer, Business Owner"
                  />
                  <p className="mt-1 text-xs text-brand-slate">
                    Helps us understand your schedule and ability to care for a kitten.
                  </p>
                </div>
              </div>
            )}

            {/* ── Step 2: Your Home ── */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-brand-charcoal">Your Home</h3>
                  <p className="mt-1 text-sm text-brand-slate">
                    We want to make sure every kitten goes to a safe, loving environment.
                  </p>
                </div>

                <div>
                  <SectionLabel>Type of Home <RequiredBadge /></SectionLabel>
                  <Select
                    value={values.housingType}
                    onValueChange={(v) => setValue("housingType", v as ApplicationFormData["housingType"])}
                  >
                    <SelectTrigger className="mt-1 w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <SectionLabel>Do you own or rent? <RequiredBadge /></SectionLabel>
                  <Select
                    value={values.ownOrRent}
                    onValueChange={(v) => setValue("ownOrRent", v as "own" | "rent")}
                  >
                    <SelectTrigger className="mt-1 w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="own">Own</SelectItem>
                      <SelectItem value="rent">Rent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {values.ownOrRent === "rent" && (
                  <div>
                    <SectionLabel>Landlord approval for pets?</SectionLabel>
                    <Select
                      value={values.landlordApproval ?? ""}
                      onValueChange={(v) => setValue("landlordApproval", v)}
                    >
                      <SelectTrigger className="mt-1 w-full"><SelectValue placeholder="Select…" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes — approved</SelectItem>
                        <SelectItem value="pending">Pending confirmation</SelectItem>
                        <SelectItem value="no">Not yet — will confirm</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div>
                  <SectionLabel>Other pets in the home</SectionLabel>
                  <Textarea
                    {...register("otherPets")}
                    className="mt-1"
                    placeholder="e.g., 2-year-old male neutered Labrador (vaccinated), or None"
                    rows={2}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="hasChildren"
                      {...register("hasChildren")}
                      className="h-4 w-4 rounded border-brand-ice-dark accent-brand-brass"
                    />
                    <label htmlFor="hasChildren" className="text-sm text-brand-charcoal">
                      There are children in our household
                    </label>
                  </div>
                  {values.hasChildren && (
                    <div>
                      <SectionLabel>Children&apos;s ages</SectionLabel>
                      <Input {...register("childrenAges")} className="mt-1" placeholder="e.g., 4, 8, 12" />
                    </div>
                  )}
                </div>

                <div>
                  <SectionLabel>Any known pet allergies in the household? <RequiredBadge /></SectionLabel>
                  <Select
                    value={values.allergyAwareness}
                    onValueChange={(v) => setValue("allergyAwareness", v as ApplicationFormData["allergyAwareness"])}
                  >
                    <SelectTrigger className="mt-1 w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No allergies</SelectItem>
                      <SelectItem value="yes">Yes — we are aware and comfortable</SelectItem>
                      <SelectItem value="unknown">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* ── Step 3: Your Kitten ── */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-brand-charcoal">Your Perfect Kitten</h3>
                  <p className="mt-1 text-sm text-brand-slate">
                    Tell us what you have in mind — we will do our best to find the right match.
                  </p>
                </div>

                <div>
                  <SectionLabel>Sex preference</SectionLabel>
                  <Select
                    value={values.sexPreference}
                    onValueChange={(v) => {
                      setValue("sexPreference", v as ApplicationFormData["sexPreference"]);
                      // Reset color if the selected color is female-only and user switches to male
                      if (v === "male" && FEMALE_ONLY_COLORS.has(values.colorPreference ?? "")) {
                        setValue("colorPreference", "");
                      }
                    }}
                  >
                    <SelectTrigger className="mt-1 w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no_preference">Open — no preference</SelectItem>
                      <SelectItem value="male">Boy</SelectItem>
                      <SelectItem value="female">Girl</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <SectionLabel>Color preference</SectionLabel>
                  <Select
                    value={values.colorPreference ?? ""}
                    onValueChange={(v) => setValue("colorPreference", v)}
                  >
                    <SelectTrigger className="mt-1 w-full"><SelectValue placeholder="Select a color…" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="open">Open — any color</SelectItem>
                      {availableColors.map((color) => (
                        <SelectItem key={color} value={color}>{color}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {values.sexPreference === "male" && (
                    <p className="mt-1 text-xs text-brand-slate">
                      Tortie colors are female-only and have been hidden.
                    </p>
                  )}
                </div>

                <div>
                  <SectionLabel>When are you hoping to bring a kitten home? <RequiredBadge /></SectionLabel>
                  <Select
                    value={values.timing}
                    onValueChange={(v) => setValue("timing", v as ApplicationFormData["timing"])}
                  >
                    <SelectTrigger className="mt-1 w-full"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP (within 3 months)</SelectItem>
                      <SelectItem value="next_available">Next Available Litter (3–6 months)</SelectItem>
                      <SelectItem value="flexible">Flexible (6–12 months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="rounded-lg border border-brand-ice-dark bg-brand-ice/40 p-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="consideringPair"
                      {...register("consideringPair")}
                      className="mt-0.5 h-4 w-4 rounded border-brand-ice-dark accent-brand-brass"
                    />
                    <label htmlFor="consideringPair" className="text-sm text-brand-charcoal leading-snug">
                      I am interested in adopting a bonded pair of kittens{" "}
                      <span className="text-brand-slate-light font-normal">
                        (pairs often settle in faster and keep each other company)
                      </span>
                    </label>
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="needsTransport"
                      {...register("needsTransport")}
                      className="mt-0.5 h-4 w-4 rounded border-brand-ice-dark accent-brand-brass"
                    />
                    <label htmlFor="needsTransport" className="text-sm text-brand-charcoal leading-snug">
                      I may need transport / flight nanny service to receive the kitten
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* ── Step 4: Commitments ── */}
            {step === 3 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-semibold text-brand-charcoal">Our Shared Commitment</h3>
                  <p className="mt-1 text-sm text-brand-slate">
                    Every Jiliang kitten deserves a lifelong home. Please read and confirm the following.
                  </p>
                </div>

                <div className="space-y-3 rounded-lg border border-brand-ice-dark bg-brand-ice/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-slate">
                    Care Commitments <RequiredBadge />
                  </p>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="indoorOnly"
                      {...register("indoorOnly")}
                      className="mt-0.5 h-4 w-4 rounded border-brand-ice-dark accent-brand-brass"
                    />
                    <label htmlFor="indoorOnly" className="text-sm text-brand-charcoal leading-snug">
                      I commit to keeping my kitten as an <strong>indoor-only</strong> cat for their entire life.
                    </label>
                  </div>
                  <FieldError message={errors.indoorOnly?.message} />

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="noDeClawAgreement"
                      {...register("noDeClawAgreement")}
                      className="mt-0.5 h-4 w-4 rounded border-brand-ice-dark accent-brand-brass"
                    />
                    <label htmlFor="noDeClawAgreement" className="text-sm text-brand-charcoal leading-snug">
                      I understand and agree to the <strong>zero-tolerance no-declaw policy</strong>. Declawing is not permitted under any circumstance.
                    </label>
                  </div>
                  <FieldError message={errors.noDeClawAgreement?.message} />
                </div>

                <div>
                  <SectionLabel>Anything else you would like us to know?</SectionLabel>
                  <Textarea
                    {...register("additionalInfo")}
                    className="mt-1"
                    placeholder="Any additional context about your household, lifestyle, or expectations…"
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* ── Step 5: Review ── */}
            {step === 4 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-semibold text-brand-charcoal">Review Your Application</h3>
                  <p className="mt-1 text-sm text-brand-slate">
                    Everything look good? Click any completed step above to edit, or submit below.
                  </p>
                </div>

                <div className="divide-y divide-brand-ice-dark rounded-lg border border-brand-ice-dark">
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-slate">Contact</p>
                    <p className="mt-1 font-medium text-brand-charcoal">{values.firstName} {values.lastName}</p>
                    <p className="text-sm text-brand-slate">{values.email}</p>
                    <p className="text-sm text-brand-slate">{values.phone}</p>
                    <p className="text-sm text-brand-slate">
                      {values.city}, {values.state} · {countryLabel}
                    </p>
                    {values.occupation && <p className="text-sm text-brand-slate">{values.occupation}</p>}
                  </div>

                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-slate">Home</p>
                    <p className="mt-1 text-sm text-brand-charcoal capitalize">
                      {values.housingType} · {values.ownOrRent === "own" ? "Owned" : "Renting"}
                    </p>
                    {values.otherPets && <p className="text-sm text-brand-slate">Other pets: {values.otherPets}</p>}
                    {values.hasChildren && (
                      <p className="text-sm text-brand-slate">
                        Children: {values.childrenAges || "ages not specified"}
                      </p>
                    )}
                    <p className="text-sm text-brand-slate">
                      Allergies:{" "}
                      {values.allergyAwareness === "none"
                        ? "None"
                        : values.allergyAwareness === "yes"
                          ? "Yes — aware"
                          : "Unknown"}
                    </p>
                  </div>

                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-slate">Kitten Preferences</p>
                    <p className="mt-1 text-sm text-brand-charcoal">
                      {values.sexPreference === "no_preference"
                        ? "Any sex"
                        : values.sexPreference === "male"
                          ? "Boy"
                          : "Girl"}
                      {values.colorPreference && values.colorPreference !== "open"
                        ? ` · ${values.colorPreference}`
                        : ""}
                    </p>
                    <p className="text-sm text-brand-slate">{timingLabel}</p>
                    {values.consideringPair && (
                      <p className="text-sm text-brand-slate">Interested in a bonded pair</p>
                    )}
                    {values.needsTransport && (
                      <p className="text-sm text-brand-slate">Transport / flight nanny needed</p>
                    )}
                  </div>

                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-slate">Commitments</p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {["Indoor only", "No declaw"].map((label) => (
                        <span
                          key={label}
                          className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-800"
                        >
                          ✓ {label}
                        </span>
                      ))}
                    </div>
                    {values.additionalInfo && (
                      <p className="mt-3 text-sm italic text-brand-slate line-clamp-2">
                        &ldquo;{values.additionalInfo}&rdquo;
                      </p>
                    )}
                  </div>
                </div>

                <p className="text-center text-xs text-brand-slate">
                  We will review your application and be in touch within{" "}
                  <strong>3–5 business days</strong>.
                </p>
              </div>
            )}

            {/* ── Navigation ── */}
            <div className="mt-8 flex justify-between">
              {step > 0 ? (
                <Button type="button" variant="outline" onClick={handleBack}>
                  Back
                </Button>
              ) : (
                <div />
              )}
              {step < TOTAL_STEPS - 1 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-brand-brass hover:bg-brand-brass-dark"
                >
                  Continue →
                </Button>
              ) : (
                <Button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => handleSubmit(onSubmit, onSubmitError)()}
                  className="bg-brand-brass hover:bg-brand-brass-dark disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting…" : "Submit Application"}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
