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
import { useLocation } from "@/components/layout/location-provider";

export function ApplicationForm() {
  const { location } = useLocation();
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
      city: "",
      state: "",
      preferredLocation: location,
      needsTransport: false,
      housingType: "house",
      ownOrRent: "own",
      landlordApproval: "",
      otherPets: "",
      hasChildren: false,
      childrenAges: "",
      sexPreference: "no_preference",
      colorPreference: "",
      timing: "flexible",
      indoorOnly: false,
      spayNeuterAgreement: false,
      vetName: "",
      vetPhone: "",
      personalReference: "",
      personalReferencePhone: "",
      website: "",
    },
  });

  const {
    register,
    setValue,
    watch,
    trigger,
    handleSubmit,
    formState: { errors },
  } = form;

  const handleNext = async () => {
    if (step < 5) {
      const fields = stepFields[step];
      const valid = await trigger(fields);
      if (valid) setStep((s) => s + 1);
    }
  };

  const handleBack = () => setStep((s) => Math.max(0, s - 1));

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
            Thank you for your interest in a Jiliang Cattery kitten. We will review your application
            and get back to you within 3–5 business days.
          </p>
          <p className="mt-4 text-sm text-brand-slate-light">
            Check your email for a confirmation message.
          </p>
        </CardContent>
      </Card>
    );
  }

  const values = watch();

  return (
    <div className="mx-auto max-w-2xl">
      <FormProgress currentStep={step} onStepClick={setStep} />

      <Card className="mt-8 border-brand-ice-dark">
        <CardContent className="p-6 md:p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Honeypot */}
            <input type="text" {...register("website")} className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            {/* Step 1: About You */}
            {step === 0 && (
              <div className="space-y-4">
                <h3 className="text-xl">About You</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-brand-charcoal">First Name *</label>
                    <Input {...register("firstName")} className="mt-1" />
                    {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-brand-charcoal">Last Name *</label>
                    <Input {...register("lastName")} className="mt-1" />
                    {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-brand-charcoal">Email *</label>
                  <Input type="email" {...register("email")} className="mt-1" />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-brand-charcoal">Phone *</label>
                  <Input type="tel" {...register("phone")} className="mt-1" />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-brand-charcoal">Country *</label>
                  <Select value={values.country} onValueChange={(v) => setValue("country", v as "US" | "CA" | "other")}>
                    <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="CA">Canada</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-brand-charcoal">City *</label>
                    <Input {...register("city")} className="mt-1" />
                    {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-brand-charcoal">State/Province *</label>
                    <Input {...register("state")} className="mt-1" />
                    {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state.message}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Location */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-xl">Preferred Pickup Location</h3>
                <Select value={values.preferredLocation} onValueChange={(v) => setValue("preferredLocation", v as "atlanta" | "toronto")}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="atlanta">Atlanta, GA 🇺🇸</SelectItem>
                    <SelectItem value="toronto">Toronto, ON 🇨🇦</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="needsTransport" {...register("needsTransport")} className="h-4 w-4 rounded border-brand-ice-dark" />
                  <label htmlFor="needsTransport" className="text-sm text-brand-charcoal">
                    I may need transport / flight nanny service
                  </label>
                </div>
              </div>
            )}

            {/* Step 3: Your Home */}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-xl">Your Home</h3>
                <div>
                  <label className="text-sm font-medium text-brand-charcoal">Housing Type *</label>
                  <Select value={values.housingType} onValueChange={(v) => setValue("housingType", v as ApplicationFormData["housingType"])}>
                    <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
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
                  <label className="text-sm font-medium text-brand-charcoal">Do you own or rent? *</label>
                  <Select value={values.ownOrRent} onValueChange={(v) => setValue("ownOrRent", v as "own" | "rent")}>
                    <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="own">Own</SelectItem>
                      <SelectItem value="rent">Rent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {values.ownOrRent === "rent" && (
                  <div>
                    <label className="text-sm font-medium text-brand-charcoal">Do you have landlord approval for pets?</label>
                    <Input {...register("landlordApproval")} placeholder="Yes / No / Pending" className="mt-1" />
                  </div>
                )}
                <div>
                  <label className="text-sm font-medium text-brand-charcoal">Other pets in the home</label>
                  <Textarea {...register("otherPets")} placeholder="Type, breed, age of existing pets" className="mt-1" />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="hasChildren" {...register("hasChildren")} className="h-4 w-4 rounded border-brand-ice-dark" />
                  <label htmlFor="hasChildren" className="text-sm text-brand-charcoal">I have children at home</label>
                </div>
                {values.hasChildren && (
                  <div>
                    <label className="text-sm font-medium text-brand-charcoal">Children&apos;s ages</label>
                    <Input {...register("childrenAges")} placeholder="e.g., 3 and 7" className="mt-1" />
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Preferences */}
            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-xl">Kitten Preferences</h3>
                <div>
                  <label className="text-sm font-medium text-brand-charcoal">Sex preference</label>
                  <Select value={values.sexPreference} onValueChange={(v) => setValue("sexPreference", v as ApplicationFormData["sexPreference"])}>
                    <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no_preference">No preference</SelectItem>
                      <SelectItem value="male">Boy</SelectItem>
                      <SelectItem value="female">Girl</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-brand-charcoal">Color preference</label>
                  <Input {...register("colorPreference")} placeholder="e.g., Blue, Lilac, Golden, any" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium text-brand-charcoal">Timing</label>
                  <Select value={values.timing} onValueChange={(v) => setValue("timing", v as ApplicationFormData["timing"])}>
                    <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="current_litter">Current litter</SelectItem>
                      <SelectItem value="waitlist">Next available litter</SelectItem>
                      <SelectItem value="flexible">Flexible / no rush</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3 rounded-lg border border-brand-ice-dark bg-brand-ice/50 p-4">
                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="indoorOnly" {...register("indoorOnly")} className="mt-0.5 h-4 w-4 rounded border-brand-ice-dark" />
                    <label htmlFor="indoorOnly" className="text-sm text-brand-charcoal">
                      I commit to keeping my kitten as an indoor-only cat *
                    </label>
                  </div>
                  {errors.indoorOnly && <p className="text-xs text-red-500">{errors.indoorOnly.message}</p>}
                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="spayNeuter" {...register("spayNeuterAgreement")} className="mt-0.5 h-4 w-4 rounded border-brand-ice-dark" />
                    <label htmlFor="spayNeuter" className="text-sm text-brand-charcoal">
                      I agree to spay/neuter by 6 months and provide veterinary proof *
                    </label>
                  </div>
                  {errors.spayNeuterAgreement && <p className="text-xs text-red-500">{errors.spayNeuterAgreement.message}</p>}
                </div>
              </div>
            )}

            {/* Step 5: References */}
            {step === 4 && (
              <div className="space-y-4">
                <h3 className="text-xl">References</h3>
                <p className="text-sm text-brand-slate">
                  If you have a current veterinarian, please provide their information. A personal
                  reference is also helpful.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-brand-charcoal">Veterinarian name</label>
                    <Input {...register("vetName")} className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-brand-charcoal">Vet phone</label>
                    <Input type="tel" {...register("vetPhone")} className="mt-1" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-brand-charcoal">Personal reference name</label>
                    <Input {...register("personalReference")} className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-brand-charcoal">Reference phone</label>
                    <Input type="tel" {...register("personalReferencePhone")} className="mt-1" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Review */}
            {step === 5 && (
              <div className="space-y-6">
                <h3 className="text-xl">Review Your Application</h3>
                <p className="text-sm text-brand-slate">
                  Please review your information below. Click any step above to go back and edit.
                </p>

                <div className="space-y-4 rounded-lg border border-brand-ice-dark bg-brand-ice/30 p-4">
                  <div>
                    <p className="text-xs font-medium text-brand-slate uppercase">Contact</p>
                    <p className="text-brand-charcoal">{values.firstName} {values.lastName}</p>
                    <p className="text-sm text-brand-slate">{values.email} &middot; {values.phone}</p>
                    <p className="text-sm text-brand-slate">{values.city}, {values.state} ({values.country})</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-brand-slate uppercase">Pickup Location</p>
                    <p className="text-brand-charcoal">{values.preferredLocation === "atlanta" ? "Atlanta, GA" : "Toronto, ON"}</p>
                    {values.needsTransport && <p className="text-sm text-brand-slate">Transport requested</p>}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-brand-slate uppercase">Home</p>
                    <p className="text-brand-charcoal">{values.housingType} ({values.ownOrRent})</p>
                    {values.otherPets && <p className="text-sm text-brand-slate">Pets: {values.otherPets}</p>}
                    {values.hasChildren && <p className="text-sm text-brand-slate">Children ages: {values.childrenAges || "Not specified"}</p>}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-brand-slate uppercase">Preferences</p>
                    <p className="text-brand-charcoal">
                      {values.sexPreference === "no_preference" ? "No sex preference" : values.sexPreference === "male" ? "Boy" : "Girl"}
                      {values.colorPreference ? ` · ${values.colorPreference}` : ""}
                      {` · ${values.timing === "current_litter" ? "Current litter" : values.timing === "waitlist" ? "Next litter" : "Flexible timing"}`}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-8 flex justify-between">
              {step > 0 ? (
                <Button type="button" variant="outline" onClick={handleBack}>
                  Back
                </Button>
              ) : (
                <div />
              )}
              {step < 5 ? (
                <Button type="button" onClick={handleNext} className="bg-brand-brass hover:bg-brand-brass-dark">
                  Continue
                </Button>
              ) : (
                <Button type="submit" className="bg-brand-brass hover:bg-brand-brass-dark">
                  Submit Application
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
