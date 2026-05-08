import type { Metadata } from "next";
import { Section, PageHeader } from "@/components/section";
import { facilities } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Park",
  description:
    "Lafayette-Pointer Park covers nine acres in Chevy Chase DC and is home to playgrounds, tennis courts, ball fields, the Water Daisy, gardens, and the Lafayette-Pointer Recreation Center.",
};

export default function ParkPage() {
  return (
    <div>
      <PageHeader
        eyebrow="The park"
        title="Nine acres, dozens of corners worth visiting."
        description="Open daily, dawn to dusk. Here's what you'll find when you visit."
      />

      <Section className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <article
              key={f.slug}
              className="group rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <p className="font-heading text-xl font-semibold tracking-tight">
                {f.name}
              </p>
              <p className="mt-2 text-sm font-medium text-primary">{f.blurb}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {f.details}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 rounded-2xl border border-border/60 bg-secondary/40 p-8 sm:grid-cols-[2fr_1fr] sm:p-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Visit
            </p>
            <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Stop by anytime.
            </h2>
            <p className="mt-3 max-w-prose text-muted-foreground">
              The park is open to the public daily, dawn to dusk. The Water
              Daisy operates Memorial Day through Labor Day. Tennis courts
              are first-come first-served. There&apos;s street parking on
              33rd Street and along Broad Branch Road.
            </p>
          </div>
          <address className="not-italic text-base text-muted-foreground">
            <p className="font-medium text-foreground">Lafayette-Pointer Park</p>
            <p>{site.parkAddress}</p>
            <p className="mt-3 text-sm">
              <a
                className="text-primary underline"
                href="https://maps.apple.com/?q=Lafayette+Pointer+Park+Washington+DC"
              >
                Open in Maps
              </a>
            </p>
          </address>
        </div>
      </Section>
    </div>
  );
}
