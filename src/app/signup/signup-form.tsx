"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { submitSignup, type SignupState } from "./actions";

export function SignupForm() {
  const [state, action, isPending] = useActionState<SignupState | null, FormData>(
    submitSignup,
    null,
  );
  return (
    <form
      action={action}
      className="space-y-4 rounded-3xl border border-border/60 bg-card p-8 shadow-sm"
      aria-label="Sign up for news"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="firstName" label="First name" required />
        <Field id="lastName" label="Last name" required />
      </div>
      <Field id="email" label="Email" type="email" required />
      <div>
        <label htmlFor="notes" className="text-sm font-medium text-foreground">
          Notes <span className="text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Anything we should know — interests, availability, students looking for service hours, etc."
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
        {isPending ? "Signing you up…" : "Sign up"}
      </Button>
      <p className="text-xs text-muted-foreground">
        We&rsquo;ll add you to a small neighborhood list used for park
        updates only. We never share your email.
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
