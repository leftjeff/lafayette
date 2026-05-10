import type { Metadata } from "next";
import { Section, PageHeader } from "@/components/section";
import { ParkVignette } from "@/components/park-vignette";
import { facilities } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Park",
  description:
    "Lafayette-Pointer Park covers nine acres in Chevy Chase DC and is home to playgrounds, tennis and basketball courts, the Water Daisy, gardens, green spaces, and the Lafayette-Pointer Recreation Center.",
};

const slugAccentBg: Record<string, string> = {
  "recreation-center": "bg-[color:var(--cream)]",
  playgrounds: "bg-[color:var(--cream)]",
  "water-daisy": "bg-[#dbe9f1]",
  tennis: "bg-[#f3dccf]",
  basketball: "bg-[#f3dccf]",
  "green-spaces": "bg-secondary",
  gardens: "bg-secondary",
};

export default function ParkPage() {
  return (
    <div>
      <PageHeader
        eyebrow="The park"
        title="Nine acres, dozens of corners worth visiting."
        description="Open daily, dawn to dusk. Here's what you'll find when you visit."
        accent="leaves"
      />

      <Section className="py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <article
              key={f.slug}
              className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <div
                className={`relative aspect-[5/3] w-full overflow-hidden ${
                  slugAccentBg[f.slug] ?? "bg-secondary"
                }`}
              >
                <ParkVignette
                  slug={
                    f.slug as
                      | "recreation-center"
                      | "playgrounds"
                      | "water-daisy"
                      | "tennis"
                      | "basketball"
                      | "green-spaces"
                      | "gardens"
                  }
                  className="h-full w-full"
                />
              </div>
              <div className="p-6">
                <p className="font-heading text-xl font-semibold tracking-tight">
                  {f.name}
                </p>
                <p className="mt-2 text-sm font-medium text-primary">{f.blurb}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.details}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-8 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm sm:grid-cols-[1.4fr_1fr]">
          <div className="px-8 py-10 sm:px-10 sm:py-12">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Visit
            </p>
            <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Stop by anytime.
            </h2>
            <p className="mt-3 max-w-prose text-muted-foreground">
              The park is open to the public daily, dawn to dusk. The Water
              Daisy operates Memorial Day through Labor Day. Tennis and
              basketball courts are first-come first-served. There&apos;s
              street parking on 33rd Street and along Broad Branch Road.
            </p>
            <address className="mt-6 not-italic text-base text-muted-foreground">
              <p className="font-medium text-foreground">Lafayette-Pointer Park</p>
              <p>{site.parkAddress}</p>
              <p className="mt-2 text-sm">
                <a
                  className="text-primary underline"
                  href="https://maps.apple.com/?q=Lafayette+Pointer+Park+Washington+DC"
                >
                  Open in Maps
                </a>
              </p>
            </address>
          </div>
          <div className="relative min-h-[220px] bg-gradient-to-br from-secondary via-[color:var(--cream)] to-[#f3dccf]">
            <ParkVignette slug="gardens" className="absolute inset-0" />
          </div>
        </div>
      </Section>
    </div>
  );
}
