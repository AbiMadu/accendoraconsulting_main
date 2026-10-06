"use client";

import { AnimatePresence, motion } from "framer-motion";
import { startTransition, useActionState, useEffect, useRef } from "react";
import { sendEnquiry, type EnquiryState } from "@/app/contact/actions";
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

const initialState: EnquiryState = { status: "idle" };

/**
 * Enquiry form. Submits via a server action that delivers the enquiry to the
 * Zoho Mail inbox. If sending fails, the reader is pointed to email directly so
 * no enquiry is silently lost.
 */
export function ContactForm({ email }: { email: string }) {
  const [state, formAction, pending] = useActionState(sendEnquiry, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // Clear the form only once the enquiry is delivered, so a failed send keeps the reader's text.
  useEffect(() => {
    if (state.status === "sent") formRef.current?.reset();
  }, [state]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    startTransition(() => formAction(data));
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="relative grid gap-6">
      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

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
          disabled={pending}
          className="group inline-flex items-center gap-2.5 bg-ink px-7 py-3.5 text-sm font-medium tracking-wide text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-700 disabled:pointer-events-none disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send enquiry"}
          <Arrow />
        </button>
        <AnimatePresence>
          {state.status === "sent" ? (
            <motion.p
              key="sent"
              role="status"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-teal"
            >
              Thank you — your enquiry has been sent. We&apos;ll be in touch shortly.
            </motion.p>
          ) : state.status === "error" ? (
            <motion.p
              key="error"
              role="alert"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-ink"
            >
              {state.message ?? (
                <>
                  Sorry, your enquiry couldn&apos;t be sent. Please email{" "}
                  <a href={`mailto:${email}`} className="underline underline-offset-4">
                    {email}
                  </a>{" "}
                  instead.
                </>
              )}
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
