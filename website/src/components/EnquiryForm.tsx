"use client";

import { useActionState } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/actions";
import { enquiryIntentOptions, enquiryInterestOptions, enquiryMessages } from "@/lib/content";

const initialState: EnquiryState = { status: "idle" };

const inputClass =
  "mt-2 block w-full rounded-brand border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/80 transition-colors focus:border-maroon focus:bg-white focus:outline-none focus:ring-2 focus:ring-maroon/15 aria-[invalid=true]:border-red";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-red">
      {message}
    </p>
  );
}

export default function EnquiryForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);
  const err = state.fieldErrors ?? {};
  const v = state.values ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-brand border-t-4 border-red bg-white p-10 shadow-card">
        <h3 className="font-display text-3xl font-bold text-ink">Register Your Interest</h3>
        <p className="mt-4 text-lg leading-relaxed">{enquiryMessages.success}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="rounded-brand border-t-4 border-red bg-white p-7 shadow-card sm:p-10">
      <h3 className="font-display text-3xl font-bold text-ink">Register Your Interest</h3>
      <p className="mt-2 text-muted">
        No obligation. We&apos;ll come back to you with availability, pricing and next steps.
      </p>

      <div aria-hidden className="hidden">
        <label>
          Leave this field empty
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="text-sm font-bold text-ink">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            defaultValue={v.name}
            aria-invalid={!!err.name}
            aria-describedby={err.name ? "name-error" : undefined}
            className={inputClass}
          />
          <FieldError id="name-error" message={err.name} />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-bold text-ink">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            defaultValue={v.email}
            aria-invalid={!!err.email}
            aria-describedby={err.email ? "email-error" : undefined}
            className={inputClass}
          />
          <FieldError id="email-error" message={err.email} />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-bold text-ink">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="+234 …"
            defaultValue={v.phone}
            aria-invalid={!!err.phone}
            aria-describedby={err.phone ? "phone-error" : undefined}
            className={inputClass}
          />
          <FieldError id="phone-error" message={err.phone} />
        </div>

        <div>
          <label htmlFor="interest" className="text-sm font-bold text-ink">
            I&apos;m interested in
          </label>
          <select
            id="interest"
            name="interest"
            required
            defaultValue={v.interest ?? ""}
            aria-invalid={!!err.interest}
            aria-describedby={err.interest ? "interest-error" : undefined}
            className={inputClass}
          >
            <option value="" disabled>
              Select…
            </option>
            {enquiryInterestOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <FieldError id="interest-error" message={err.interest} />
        </div>

        <div>
          <label htmlFor="intent" className="text-sm font-bold text-ink">
            I&apos;m looking to
          </label>
          <select
            id="intent"
            name="intent"
            required
            defaultValue={v.intent ?? ""}
            aria-invalid={!!err.intent}
            aria-describedby={err.intent ? "intent-error" : undefined}
            className={inputClass}
          >
            <option value="" disabled>
              Select…
            </option>
            {enquiryIntentOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <FieldError id="intent-error" message={err.intent} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-bold text-ink">
            Tell us more <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Bedrooms, budget range, timeline — whatever helps."
            defaultValue={v.message}
            className={inputClass}
          />
        </div>
      </div>

      {state.message && (
        <p role="alert" className="mt-6 border-l-2 border-red bg-red/5 px-4 py-3 text-sm text-ink">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-8 w-full rounded-brand bg-red px-6 py-4 text-[0.8rem] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-maroon focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? "Sending…" : "Send My Enquiry"}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        By submitting, you agree that Dav-Ric Homes may contact you about this enquiry. We don&apos;t share
        your details with third parties.
      </p>
    </form>
  );
}
