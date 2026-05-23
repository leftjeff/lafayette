"use client";

import { useActionState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { submitContact, type ContactState } from "./actions";

export function ContactForm() {
  const [state, action, isPending] = useActionState<ContactState | null, FormData>(
    submitContact,
    null,
  );

  if (state?.ok) {
    return (
      <div
        role="status"
        className="space-y-4 rounded-3xl border border-primary/30 bg-secondary/40 p-8"
      >
        <p className="font-heading text-xl font-semibold tracking-tight">
          Message sent.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out — we&rsquo;ll get back to you at the email
          you provided. We&rsquo;re all volunteers, so replies may take a few
          days.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link href="/">Back home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      action={action}
      className="space-y-4 rounded-3xl border border-border/60 bg-card p-8"
      aria-label="Send us a message"
    >
      <p className="font-heading text-xl font-semibold tracking-tight">
        Send us a note
      </p>
      <p className="text-sm text-muted-foreground">
        We&apos;ll get back to you at the email you provide.
      </p>
      <Field id="name" label="Name" required />
      <Field id="email" label="Email" type="email" required />
      <Field id="zip" label="Zip code" />
      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
        />
      </div>
      {state?.error ? (
        <p
          role="alert"
          className="rounded-md border border-destructive/40 bg-destructive/5 px-3 py-2 text-sm text-destructive"
        >
          {state.error}
        </p>
      ) : null}
      <Button type="submit" size="lg" className="w-full text-base" disabled={isPending}>
        {isPending ? "Sending…" : "Send"}
      </Button>
      <p className="text-xs text-muted-foreground">
        Or email{" "}
        <a className="text-primary underline" href={`mailto:${site.email}`}>
          {site.email}
        </a>{" "}
        directly.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}
