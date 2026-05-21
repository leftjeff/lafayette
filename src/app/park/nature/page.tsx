import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Section, PageHeader } from "@/components/section";

export const metadata: Metadata = {
  title: "Nature in the Park",
  description:
    "Lafayette-Pointer Park hosts over 200 species of native plants that support butterflies, birds, fireflies, and a wide range of pollinators.",
  alternates: { canonical: "/park/nature" },
  openGraph: {
    title: "Nature in the Park — Lafayette-Pointer Park",
    description:
      "Native plants, pollinators, and wildlife at Lafayette-Pointer Park.",
    url: "/park/nature",
    type: "website",
  },
};

type SpeciesSection = {
  heading: string;
  intro: string;
  species: string[];
};

const sections: SpeciesSection[] = [
  {
    heading: "Native plants",
    intro:
      "Over 200 species of native plants grow throughout the park's perennial beds, pollinator gardens, and naturalized areas. A starting list:",
    species: [
      "Black-eyed Susan (Rudbeckia hirta)",
      "Eastern redbud (Cercis canadensis)",
      "Cardinal flower (Lobelia cardinalis)",
      "Common milkweed (Asclepias syriaca)",
      "Wild bergamot (Monarda fistulosa)",
      "Virginia bluebell (Mertensia virginica)",
      "Purple coneflower (Echinacea purpurea)",
      "New England aster (Symphyotrichum novae-angliae)",
    ],
  },
  {
    heading: "Pollinators and insects",
    intro:
      "The park's native plantings draw a wide range of pollinators and insects, especially through the warmer months.",
    species: [
      "Monarch butterfly",
      "Eastern tiger swallowtail",
      "Black swallowtail",
      "Common eastern bumblebee",
      "Native mason bees",
      "Fireflies (Photinus pyralis and related species)",
      "Praying mantis",
    ],
  },
  {
    heading: "Birds",
    intro:
      "Mature trees and brushy edges make the park a regular stop for resident and migrating birds.",
    species: [
      "Northern cardinal",
      "American robin",
      "Carolina chickadee",
      "Tufted titmouse",
      "House finch",
      "Mourning dove",
      "Red-bellied woodpecker",
      "Eastern bluebird (occasional)",
    ],
  },
];

const helpTips: string[] = [
  "Plant native species in your own yard — even a few square feet of milkweed or coneflower meaningfully helps pollinators.",
  "Skip the pesticides. Many target insects that the park's birds and butterflies depend on.",
  "Leave the leaves where you can. Leaf litter shelters overwintering pollinators and firefly larvae.",
  "Keep dogs on leash near the perennial beds so ground-nesting bees and migrating birds aren't disturbed.",
  "Come help at the spring or fall cleanup — much of the gardening work is plant-care that directly supports nature in the park.",
];

export default function NaturePage() {
  return (
    <div>
      <PageHeader
        eyebrow="The park"
        title="Nature in the park."
        description="Lafayette-Pointer Park is a small but rich habitat for native plants, pollinators, and birds. Here's a starting catalog — we'll keep adding to it as neighbors document more."
        accent="leaves"
      />

      <Section className="py-14">
        <div className="rounded-2xl border border-border/60 bg-secondary/40 p-6 text-sm leading-relaxed text-muted-foreground sm:p-8">
          <p>
            <strong className="font-heading text-base text-foreground">
              Work in progress.
            </strong>{" "}
            We&rsquo;re building these lists with input from neighborhood
            naturalists and the DC Master Gardeners. If you&rsquo;ve spotted a
            species not on the list, or you can help identify what&rsquo;s
            growing in a particular bed,{" "}
            <Link
              href="/contact"
              className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
            >
              let us know
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {sections.map((s) => (
            <article key={s.heading}>
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                {s.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.intro}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-foreground">
                {s.species.map((sp) => (
                  <li
                    key={sp}
                    className="flex items-start gap-2 border-l-2 border-primary/30 pl-3"
                  >
                    {sp}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border/60 bg-card p-8 shadow-sm sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            What you can do
          </p>
          <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            Help nature in the park.
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {helpTips.map((tip) => (
              <li
                key={tip}
                className="rounded-xl border border-border/60 bg-secondary/30 p-4 text-sm leading-relaxed text-muted-foreground"
              >
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-sm">
          <Link
            href="/park"
            className="inline-flex items-center text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
          >
            <ArrowLeft className="mr-1 size-4" />
            Back to the park
          </Link>
        </p>
      </Section>
    </div>
  );
}
