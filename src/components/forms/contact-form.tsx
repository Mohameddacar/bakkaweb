"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Info,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/config/site";

// Zod validation schema
const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Please enter your full name (at least 2 characters)." })
    .max(80, { message: "Name must be less than 80 characters." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+0-9\s\-().]{7,20}$/.test(val),
      { message: "Please enter a valid phone number (or leave blank)." }
    ),
  serviceInterest: z
    .string()
    .min(1, { message: "Please select a training area or enter a subject." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(1500, { message: "Message cannot exceed 1500 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  initialSubject?: string;
}

export function ContactForm({ initialSubject = "" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submissionSuccess, setSubmissionSuccess] = React.useState(false);
  const [submittedData, setSubmittedData] = React.useState<ContactFormData | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      serviceInterest: initialSubject || "General Inquiry",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate realistic client-side processing
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setSubmittedData(data);
    setSubmissionSuccess(true);
  };

  const handleReset = () => {
    reset();
    setSubmissionSuccess(false);
    setSubmittedData(null);
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm">
      {/* Demo / Integrity Disclaimer Banner */}
      <div className="mb-6 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 p-3.5 text-xs text-blue-900 dark:text-blue-300 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold">Notice on Form Processing:</span> This
          form runs strict client-side validation. In accordance with project
          rules, submissions are demonstrated locally until the Bakka Center
          team supplies verified server credentials / form endpoint.
        </div>
      </div>

      {submissionSuccess && submittedData ? (
        <div
          role="status"
          aria-live="polite"
          className="space-y-6 text-center py-6 animate-in fade-in zoom-in-95 duration-200"
        >
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Validation Successful!
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Thank you, <strong className="text-slate-800 dark:text-slate-100">{submittedData.fullName}</strong>.
              Your inquiry regarding{" "}
              <strong className="text-slate-800 dark:text-slate-100">{submittedData.serviceInterest}</strong> has been
              validated with zero errors.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left text-xs space-y-1.5 max-w-md mx-auto text-slate-600 dark:text-slate-300">
            <div>
              <strong>Email:</strong> {submittedData.email}
            </div>
            {submittedData.phone && (
              <div>
                <strong>Phone:</strong> {submittedData.phone}
              </div>
            )}
            <div>
              <strong>Area of interest:</strong> {submittedData.serviceInterest}
            </div>
            <div>
              <strong>Message length:</strong> {submittedData.message.length} chars
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={handleReset}
            className="gap-2 text-xs"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Submit Another Inquiry</span>
          </Button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-5"
          aria-label="Contact Bakka Training Center Form"
        >
          {/* Full Name */}
          <div className="space-y-1.5">
            <Label htmlFor="fullName" className="text-xs font-semibold">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="fullName"
              placeholder="e.g. Sarah Ahmed"
              aria-required="true"
              aria-invalid={errors.fullName ? "true" : "false"}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              error={!!errors.fullName}
              {...register("fullName")}
            />
            {errors.fullName && (
              <p
                id="fullName-error"
                role="alert"
                className="text-xs text-destructive flex items-center gap-1 mt-1"
              >
                <AlertCircle className="w-3 h-3" />
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs font-semibold">
                Email Address <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                aria-required="true"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                error={!!errors.email}
                {...register("email")}
              />
              {errors.email && (
                <p
                  id="email-error"
                  role="alert"
                  className="text-xs text-destructive flex items-center gap-1 mt-1"
                >
                  <AlertCircle className="w-3 h-3" />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone (Optional) */}
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-xs font-semibold">
                Phone Number <span className="text-muted-foreground font-normal">(Optional)</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+252 61 XXX XXXX"
                aria-invalid={errors.phone ? "true" : "false"}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                error={!!errors.phone}
                {...register("phone")}
              />
              {errors.phone && (
                <p
                  id="phone-error"
                  role="alert"
                  className="text-xs text-destructive flex items-center gap-1 mt-1"
                >
                  <AlertCircle className="w-3 h-3" />
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Service / Subject of Interest */}
          <div className="space-y-1.5">
            <Label htmlFor="serviceInterest" className="text-xs font-semibold">
              Training Program or Subject of Interest <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <select
                id="serviceInterest"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                aria-required="true"
                {...register("serviceInterest")}
              >
                <option value="General Inquiry">General Inquiry & Center Information</option>
                {siteConfig.services.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="Custom Corporate Training">Custom Corporate Training</option>
                <option value="Other / Partnerships">Other / Institutional Partnership</option>
              </select>
            </div>
            {errors.serviceInterest && (
              <p role="alert" className="text-xs text-destructive flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3" />
                {errors.serviceInterest.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-xs font-semibold">
              Your Message or Questions <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              rows={4}
              placeholder="Tell us what training you are interested in, your scheduling preference, or questions for our team..."
              aria-required="true"
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
              error={!!errors.message}
              {...register("message")}
            />
            {errors.message && (
              <p
                id="message-error"
                role="alert"
                className="text-xs text-destructive flex items-center gap-1 mt-1"
              >
                <AlertCircle className="w-3 h-3" />
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full gap-2 py-6 text-sm font-semibold"
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Validating Input...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </>
            )}
          </Button>

          <p className="text-[11px] text-muted-foreground text-center">
            We respect your privacy. Inquiries are handled with complete confidentiality.
          </p>
        </form>
      )}
    </div>
  );
}

