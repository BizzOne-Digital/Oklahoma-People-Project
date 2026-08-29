import { z } from "zod";

export const situationOptions = [
  "I need information and options regarding a possible tax auction.",
  "My property is already scheduled for a tax auction, and I need to discuss my situation quickly.",
  "My property has already been sold at a tax auction, and I want to know whether any options may remain.",
] as const;

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  phone: z.string().min(1, "Phone number is required"),
  streetAddress: z.string().min(1, "Street address is required"),
  addressLine2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(5, "Please enter a valid ZIP code"),
  situation: z
    .array(z.enum(situationOptions))
    .min(1, "Please select at least one option that describes your situation"),
  additionalInfo: z.string().optional(),
  privacyConsent: z.literal(true, {
    errorMap: () => ({
      message:
        "You must agree to be contacted and acknowledge this does not create a professional relationship",
    }),
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
