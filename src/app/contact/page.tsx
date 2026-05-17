import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { Section, PageHeader } from "@/components/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Friends of Lafayette-Pointer Park — by email or by mail.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Friends of Lafayette-Pointer Park",
    description:
      "Reach Friends of Lafayette-Pointer Park — by email, by mail, or on Instagram.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Say hello."
        description="We are a small volunteer organization, so replies may take a few days. For urgent park maintenance issues, contact DC Parks and Recreation directly."
      />

      <Section className="grid gap-10 py-16 lg:grid-cols-2">
        <div className="space-y-8">
          <ContactBlock
            icon={Mail}
            title="Email"
            body={
              <a
                href={`mailto:${site.email}`}
                className="text-primary underline"
              >
                {site.email}
              </a>
            }
            note="Best for general questions, board interest, and event coordination."
          />
          <ContactBlock
            icon={MapPin}
            title="Mailing address"
            body={
              <address className="not-italic">
                {site.mailingAddress.name}
                <br />
                {site.mailingAddress.line1}
                <br />
                {site.mailingAddress.cityState}
              </address>
            }
            note="Preferred for membership checks and tax-deductible donations."
          />
        </div>

        <form
          className="space-y-4 rounded-3xl border border-border/60 bg-card p-8"
          aria-label="Send us a message"
        >
          <p className="font-heading text-xl font-semibold tracking-tight">
            Send us a note
          </p>
          <p className="text-sm text-muted-foreground">
            We&apos;ll get back to you at the email you provide.
          </p>
          <Field id="name" label="Name" />
          <Field id="email" label="Email" type="email" />
          <Field id="zip" label="Zip code" />
          <div>
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <button
            type="submit"
            disabled
            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors disabled:opacity-50"
          >
            Send (coming soon)
          </button>
          <p className="text-xs text-muted-foreground">
            For now, please email{" "}
            <a className="text-primary underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            directly.
          </p>
        </form>
      </Section>
    </div>
  );
}

function ContactBlock({
  icon: Icon,
  title,
  body,
  note,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: React.ReactNode;
  note?: string;
}) {
  return (
    <div className="rounded-3xl border border-border/60 bg-card p-8">
      <Icon className="size-6 text-primary" />
      <p className="mt-4 font-heading text-xl font-semibold tracking-tight">
        {title}
      </p>
      <div className="mt-2 text-base text-foreground">{body}</div>
      {note ? <p className="mt-3 text-sm text-muted-foreground">{note}</p> : null}
    </div>
  );
}

function Field({
  id,
  label,
  type = "text",
}: {
  id: string;
  label: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}
