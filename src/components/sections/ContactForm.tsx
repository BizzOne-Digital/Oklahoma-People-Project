"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { contactFormSchema, situationOptions, type ContactFormData } from "@/lib/validations/contact";
import { submitContactForm } from "@/lib/form-submit";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { AnimatedBirdLogo } from "@/components/ui/AnimatedBirdLogo";
import { MagneticButton } from "@/components/ui/MagneticButton";

const fieldClass =
  "w-full rounded-xl border border-sand/60 bg-white/90 px-4 py-3 text-charcoal transition-all focus:border-sunset-orange/50 focus:ring-2 focus:ring-sunset-orange/20 focus:outline-none";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      situation: [],
      privacyConsent: undefined,
    },
  });

  const watchedFields = watch([
    "firstName",
    "lastName",
    "email",
    "phone",
    "streetAddress",
    "city",
    "state",
    "zipCode",
    "situation",
    "privacyConsent",
  ]);
  const filledCount = watchedFields.filter((v) =>
    Array.isArray(v) ? v.length > 0 : Boolean(v)
  ).length;
  const progress = Math.round((filledCount / watchedFields.length) * 100);

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    try {
      await submitContactForm(data);
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try calling us directly.");
    }
  };

  if (submitted) {
    return (
      <motion.div
        className="rounded-3xl border border-sand/50 bg-white/90 p-8 text-center shadow-xl sm:p-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        role="status"
        aria-live="polite"
      >
        <AnimatedBirdLogo size={80} showGlow className="mx-auto mb-6" />
        <h3 className="mb-4 font-display text-2xl text-charcoal">Thank You for Reaching Out</h3>
        <p className="mx-auto max-w-md text-charcoal/70">
          Your inquiry has been prepared for the Oklahoma People Project team. If your situation is
          time-sensitive, please call {siteConfig.publicPhone}.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      id="contact-form"
      name="contact"
      onSubmit={handleSubmit(onSubmit)}
      className="w-full min-w-0 rounded-3xl border border-sand/50 bg-white/90 p-4 shadow-xl sm:p-6 md:p-8"
      noValidate
    >
      <div className="mb-6">
        <div className="mb-2 flex justify-between text-xs font-medium text-charcoal/60">
          <span>Form progress</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-sand/50">
          <motion.div
            className="h-full gradient-sunset"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-charcoal">
            First Name <span className="text-sunset-orange">*</span>
          </label>
          <input
            id="firstName"
            autoComplete="given-name"
            {...register("firstName")}
            className={fieldClass}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-sunset-orange" role="alert">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-charcoal">
            Last Name <span className="text-sunset-orange">*</span>
          </label>
          <input
            id="lastName"
            autoComplete="family-name"
            {...register("lastName")}
            className={fieldClass}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-sunset-orange" role="alert">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
            Email <span className="text-sunset-orange">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className={fieldClass}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-sunset-orange" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
            Phone <span className="text-sunset-orange">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            className={fieldClass}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-sunset-orange" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="streetAddress" className="mb-1.5 block text-sm font-medium text-charcoal">
            Street Address <span className="text-sunset-orange">*</span>
          </label>
          <input
            id="streetAddress"
            autoComplete="street-address"
            {...register("streetAddress")}
            className={fieldClass}
          />
          {errors.streetAddress && (
            <p className="mt-1 text-xs text-sunset-orange" role="alert">
              {errors.streetAddress.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="addressLine2" className="mb-1.5 block text-sm font-medium text-charcoal">
            Address Line 2
          </label>
          <input
            id="addressLine2"
            autoComplete="address-line2"
            {...register("addressLine2")}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-charcoal">
            City <span className="text-sunset-orange">*</span>
          </label>
          <input id="city" autoComplete="address-level2" {...register("city")} className={fieldClass} />
          {errors.city && (
            <p className="mt-1 text-xs text-sunset-orange" role="alert">
              {errors.city.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="state" className="mb-1.5 block text-sm font-medium text-charcoal">
            State <span className="text-sunset-orange">*</span>
          </label>
          <input
            id="state"
            autoComplete="address-level1"
            {...register("state")}
            className={fieldClass}
            defaultValue="OK"
          />
          {errors.state && (
            <p className="mt-1 text-xs text-sunset-orange" role="alert">
              {errors.state.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="zipCode" className="mb-1.5 block text-sm font-medium text-charcoal">
            ZIP Code <span className="text-sunset-orange">*</span>
          </label>
          <input
            id="zipCode"
            autoComplete="postal-code"
            {...register("zipCode")}
            className={fieldClass}
          />
          {errors.zipCode && (
            <p className="mt-1 text-xs text-sunset-orange" role="alert">
              {errors.zipCode.message}
            </p>
          )}
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-3 text-sm font-medium text-charcoal">
          What best describes your current delinquent tax situation?{" "}
          <span className="text-sunset-orange">*</span>
        </legend>
        <div className="space-y-3">
          {situationOptions.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-start gap-3 rounded-xl border border-sand/50 p-4 transition-colors hover:border-sunset-orange/30 hover:bg-sand/20"
            >
              <input
                type="checkbox"
                value={option}
                {...register("situation")}
                className="mt-1 h-4 w-4 rounded border-sand text-sunset-orange focus:ring-sunset-orange"
              />
              <span className="text-sm text-charcoal/80">{option}</span>
            </label>
          ))}
        </div>
        {errors.situation && (
          <p className="mt-2 text-xs text-sunset-orange" role="alert">
            {errors.situation.message}
          </p>
        )}
      </fieldset>

      <div className="mt-6">
        <label htmlFor="additionalInfo" className="mb-1.5 block text-sm font-medium text-charcoal">
          Anything else you would like our team to know?
        </label>
        <textarea
          id="additionalInfo"
          rows={4}
          {...register("additionalInfo")}
          className={cn(fieldClass, "resize-y")}
        />
      </div>

      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            {...register("privacyConsent")}
            className="mt-1 h-4 w-4 rounded border-sand text-sunset-orange focus:ring-sunset-orange"
          />
          <span className="text-xs leading-relaxed text-charcoal/70">
            I understand that submitting this form does not create an attorney-client,
            financial-adviser or tax-professional relationship. I agree to be contacted regarding my
            inquiry. <span className="text-sunset-orange">*</span>
          </span>
        </label>
        {errors.privacyConsent && (
          <p className="mt-2 text-xs text-sunset-orange" role="alert">
            {errors.privacyConsent.message}
          </p>
        )}
      </div>

      {submitError && (
        <p className="mt-4 text-sm text-sunset-orange" role="alert">
          {submitError}
        </p>
      )}

      <div className="mt-8">
        <MagneticButton type="submit" variant="primary" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Inquiry"
          )}
        </MagneticButton>
      </div>
    </form>
  );
}
