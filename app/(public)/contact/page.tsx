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
import { Mail } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/schemas";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "general",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        toast.success("Message sent successfully!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-wide">
        <h1 className="text-center">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-slate">
          Have a question about our kittens or the adoption process? We would love to hear from you.
          We typically respond within 24–48 hours.
        </p>

        <div className="mt-12">
          {/* Contact Form */}
          <div className="mx-auto max-w-lg">
            {submitted ? (
              <Card className="border-brand-ice-dark">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <Mail className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h2 className="mt-4 text-2xl">Message Sent!</h2>
                  <p className="mt-2 text-brand-slate">
                    Thank you for reaching out. We will get back to you within 24–48 hours.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-brand-ice-dark">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input type="text" {...register("website")} className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                    <div>
                      <label className="text-sm font-medium text-brand-charcoal">Name *</label>
                      <Input {...register("name")} className="mt-1" />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-brand-charcoal">Email *</label>
                      <Input type="email" {...register("email")} className="mt-1" />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-brand-charcoal">Subject *</label>
                      <Select value={watch("subject")} onValueChange={(v) => setValue("subject", v as ContactFormData["subject"])}>
                        <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="kitten_inquiry">Kitten Inquiry</SelectItem>
                          <SelectItem value="visit_request">Visit Request</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-brand-charcoal">Message *</label>
                      <Textarea {...register("message")} rows={5} className="mt-1" />
                      {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-brass hover:bg-brand-brass-dark">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
