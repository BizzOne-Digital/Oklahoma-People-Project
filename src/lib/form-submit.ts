import { siteConfig } from "@/config/site";
import type { ContactFormData } from "@/lib/validations/contact";

function buildEmailBody(data: ContactFormData): string {
  const situationLabels = data.situation
    .map((s) => `  - ${s}`)
    .join("\n");

  return [
    "New Contact Form Inquiry - Oklahoma People Project",
    "",
    `Name: ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    "",
    "Address:",
    data.streetAddress,
    data.addressLine2 || "(none)",
    `${data.city}, ${data.state} ${data.zipCode}`,
    "",
    "Situation:",
    situationLabels,
    "",
    "Additional Information:",
    data.additionalInfo || "(none)",
    "",
    "---",
    "Submitted via Oklahoma People Project website contact form.",
  ].join("\n");
}

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; method: "endpoint" | "mailto" }> {
  if (siteConfig.formEndpoint) {
    const response = await fetch(siteConfig.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    return { success: true, method: "endpoint" };
  }

  const subject = encodeURIComponent(
    `Contact Inquiry from ${data.firstName} ${data.lastName}`
  );
  const body = encodeURIComponent(buildEmailBody(data));
  const mailtoUrl = `mailto:${siteConfig.publicEmail}?subject=${subject}&body=${body}`;

  window.location.href = mailtoUrl;
  return { success: true, method: "mailto" };
}
