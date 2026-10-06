"use server";

import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export type EnquiryState = { status: "idle" | "sent" | "error"; message?: string };

/**
 * Sends a contact form enquiry through Zoho Mail SMTP.
 *
 * Required env: ZOHO_SMTP_USER (the Zoho mailbox, e.g. info@accendoraconsulting.com)
 * and ZOHO_SMTP_PASS (a Zoho app-specific password). Optional: ZOHO_SMTP_HOST
 * (defaults to smtp.zoho.eu — use smtp.zoho.com for US-region accounts) and
 * CONTACT_TO (defaults to site.email).
 */
export async function sendEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const get = (key: string) => String(formData.get(key) ?? "").trim();

  // Honeypot — real visitors never see or fill this field.
  if (get("company_website")) return { status: "sent" };

  const name = get("name");
  const role = get("role");
  const email = get("email");
  const phone = get("phone");
  const interest = get("interest");
  const message = get("message");

  if (!name || !role || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please complete every required field." };
  }
  if (message.length > 5000 || name.length > 200 || role.length > 200) {
    return { status: "error", message: "Your message is too long — please shorten it." };
  }

  const user = process.env.ZOHO_SMTP_USER;
  const pass = process.env.ZOHO_SMTP_PASS;
  if (!user || !pass) {
    console.error("Contact form: ZOHO_SMTP_USER / ZOHO_SMTP_PASS are not set.");
    return { status: "error" };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST || "smtp.zoho.eu",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  const text = [
    `Name: ${name}`,
    `Organisation role: ${role}`,
    `Email: ${email}`,
    `Telephone: ${phone || "—"}`,
    `Area of interest: ${interest}`,
    "",
    "What they are trying to achieve:",
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      // Zoho only relays mail sent from the authenticated mailbox.
      from: `"${site.shortName} website" <${user}>`,
      to: process.env.CONTACT_TO || site.email,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `Website enquiry — ${interest || "General"} — ${name}`,
      text,
    });
    return { status: "sent" };
  } catch (error) {
    console.error("Contact form: Zoho SMTP send failed", error);
    return { status: "error" };
  }
}
