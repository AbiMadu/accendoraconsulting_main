"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Arrow } from "@/components/ui";

const enquiryTypes = [
  "People & future talent",
  "Workforce & organisational capability",
  "Quality & accreditation support",
  "Programmes & partnerships",
  "Not sure yet — let's talk",
];

const field =
  "w-full border border-line bg-paper px-4 py-3.5 text-[0.9375rem] text-ink transition-colors placeholder:text-muted/70 focus:border-ink focus:outline-none";
const label = "eyebrow mb-2.5 block text-muted";

/**
 * Enquiry form. No backend is wired yet — on submit it composes a mailto so no
 * enquiry is ever silently lost. Swap `handleSubmit` for a server action or form
 * provider when one is chosen.
 */
export function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Organisation role: ${data.get("role")}`,
      `Email: ${data.get("email")}`,
      `Telephone: ${data.get("phone") || "—"}`,
      `Area of interest: ${data.get("interest")}`,
      "",
      "What they are trying to achieve:",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      `Enquiry — ${data.get("interest")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Your name
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="role">
            Your role
          </label>
          <input
            id="role"
            name="role"
            required
            placeholder="e.g. Director of People"
            className={field}
          />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Telephone <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="interest">
          What would you like to explore?
        </label>
        <select id="interest" name="interest" className={field} defaultValue={enquiryTypes[0]}>
          {enquiryTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={label} htmlFor="message">
          What are you trying to achieve?
        </label>
        <textarea id="message" name="message" rows={6} required className={field} />
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          className="group inline-flex items-center gap-2.5 bg-ink px-7 py-3.5 text-sm font-medium tracking-wide text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-700"
        >
          Send enquiry
          <Arrow />
        </button>
        <AnimatePresence>
          {sent ? (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-teal"
            >
              Your email client should now be open with the enquiry ready to send.
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>

      <p className="text-xs leading-relaxed text-muted">
        Your details are used only to respond to your enquiry.
      </p>
    </form>
  );
}
