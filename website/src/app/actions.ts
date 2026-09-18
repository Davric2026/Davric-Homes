"use server";

import { enquiryIntentOptions, enquiryInterestOptions, enquiryMessages } from "@/lib/content";

const FIELDS = ["name", "email", "phone", "interest", "intent", "message"] as const;
type Field = (typeof FIELDS)[number];

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<Field, string>>;
  values?: Partial<Record<Field, string>>;
};

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  // Honeypot: real visitors never see or fill this field.
  if (String(formData.get("company") ?? "").trim()) return { status: "success" };

  const values = Object.fromEntries(
    FIELDS.map((f) => [f, String(formData.get(f) ?? "").trim().slice(0, f === "message" ? 2000 : 200)]),
  ) as Record<Field, string>;

  const fieldErrors: Partial<Record<Field, string>> = {};
  if (!values.name) fieldErrors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) fieldErrors.email = "Please enter a valid email address.";
  if (values.phone.replace(/\D/g, "").length < 7) fieldErrors.phone = "Please enter a phone number we can reach you on.";
  if (!enquiryInterestOptions.includes(values.interest)) fieldErrors.interest = "Please choose an option.";
  if (!enquiryIntentOptions.includes(values.intent)) fieldErrors.intent = "Please choose an option.";
  if (Object.keys(fieldErrors).length) return { status: "error", fieldErrors, values };

  // Delivery goes to a webhook (Zapier, Make, Formspree, a CRM…) until the client picks an inbox — SKILL.md §10.6.
  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhook) {
    if (process.env.NODE_ENV === "development") {
      console.info("[enquiry] ENQUIRY_WEBHOOK_URL is not set; enquiry NOT delivered:", values);
      return { status: "success" };
    }
    console.error("[enquiry] ENQUIRY_WEBHOOK_URL is not configured");
    return { status: "error", message: enquiryMessages.error, values };
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, source: "dav-ric-homes-website", submittedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Webhook responded with ${res.status}`);
  } catch (err) {
    console.error("[enquiry] delivery failed", err);
    return { status: "error", message: enquiryMessages.error, values };
  }

  return { status: "success" };
}
