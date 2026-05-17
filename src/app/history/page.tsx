import type { Metadata } from "next";
import Link from "next/link";
import { Section, PageHeader } from "@/components/section";
import { getLegacyPage } from "@/lib/legacy";
import { Markdown } from "@/components/markdown";

export const metadata: Metadata = {
  title: "History",
  description:
    "More than two decades of work by neighbors to preserve and improve Lafayette-Pointer Park — founding goals, master plans, projects, and people.",
  alternates: { canonical: "/history" },
  openGraph: {
    title: "History — Friends of Lafayette-Pointer Park",
    description:
      "Founding goals, master plans, capital projects, and the people who have shaped Lafayette-Pointer Park since 1999.",
    url: "/history",
    type: "article",
  },
};

export default async function HistoryPage() {
  const goals = await getLegacyPage("goals");
  const accomplishments = await getLegacyPage("accomplishments");
  const landscaping = await getLegacyPage("landscaping");

  return (
    <div>
      <PageHeader
        eyebrow="History"
        title="More than two decades of stewardship."
        description="The Friends of Lafayette Park began in 1999. Successive generations of neighbors have shaped the park through master plans, capital projects, gardens, and gatherings. This page preserves that record."
        accent="blooms"
      />

      <Section className="py-14">
        <div className="mx-auto max-w-3xl space-y-12">
          <Block
            eyebrow="Founding"
            title="1999 — Friends of Lafayette Park forms"
          >
            <p>
              In 1999 a group of Chevy Chase DC neighbors organized as Friends
              of Lafayette Park (FOLP), a 501(c)(3) nonprofit dedicated to
              preserving and improving the park. Beth Pierce and Jeff Stoiber
              were among the founders. From the start, the organization
              partnered with DC Parks and Recreation to do the work the city
              budget alone could not.
            </p>
          </Block>

          <Block
            eyebrow="Phase I master plan"
            title="1999–2009 — the first decade of goals"
          >
            <p>
              When FOLP was founded, the directors worked with the community to
              develop the organization&apos;s first phase of goals — the Phase
              I Master Plan. Those goals were completed in the first ten years
              and shaped most of what visitors see today: the perimeter
              gardens, playgrounds, the former tot lot, the amphitheater,
              upgraded tennis courts and ball fields, benches, picnic tables,
              and the Daisy Fountain.
            </p>
            <p>
              Park-perimeter gardening began earlier still: in the early 1990s,
              before FOLP existed, neighbor Judy Goodman organized a small
              group of gardeners to rehabilitate the Quesada Street corner and
              plant the hill at Quesada and Broad Branch with azaleas. American
              Plant Food donated plants; local Boy Scouts helped prepare the
              site; garden designer Jane Berger donated plans. When FOLP
              formed, the garden group folded into the organization.
            </p>
          </Block>

          <Block
            eyebrow="Phase II master plan"
            title="2009 — tenth-anniversary plan"
          >
            <p>
              In commemoration of FOLP&apos;s tenth anniversary in 2009, the
              board developed a Phase II master plan. The capital improvements
              section called for replacing all walkways in the park, new upper-
              park lighting to match the lower park, a rubberized running track
              around the baseball fields, additional picnic tables, a renovated
              school gym, a new recreation center, and an extension of the
              green water irrigation system to the Broad Branch Road garden.
            </p>
            <p>
              The maintenance section called for correcting drainage and
              erosion problems, repairing the earthen wall between the spray
              park and the play area, grading and seeding the baseball fields,
              and resurfacing the tennis courts (last color-coated in 2003).
              Many — though not all — of these items have since been addressed.
            </p>
            <p className="text-sm">
              The complete Phase II goals list is preserved in the archive:
              <Link href="/archive/goals" className="ml-1 text-primary underline">
                FOLP Goals
              </Link>
              .
            </p>
          </Block>

          <Block
            eyebrow="2017"
            title="Merger with Friends of Lafayette Recreation Center and Park"
          >
            <p>
              In 2016 a parallel organization, the Friends of Lafayette
              Recreation Center and Park (FoLRAP), was founded by Elizabeth
              Engel and Patty Myler to focus on the recreation center
              redevelopment then under discussion with DPR. In 2017 FOLP and
              FoLRAP merged, consolidating volunteer effort under a single
              501(c)(3) and broadening the board&apos;s remit to cover both the
              park grounds and the rec center building.
            </p>
          </Block>

          <Block eyebrow="2020" title="Park renamed Lafayette-Pointer Park">
            <p>
              In 2020, after extensive advocacy and conversations with
              descendants of George Pointer (1773–1862) — who was born
              enslaved, gained his freedom, and worked as an engineer on the
              Chesapeake & Ohio Canal — the District renamed the park
              Lafayette-Pointer Park. The land had been home to African-
              American families descended from George Pointer through the 19th
              and early 20th centuries before the District acquired it in 1928.
            </p>
          </Block>

          <Block eyebrow="2021" title="New recreation center opens">
            <p>
              The new Lafayette-Pointer Recreation Center opened in 2021,
              replacing the older school gym. FOLP provided community input to
              the city throughout the design and construction process — work
              that began with the Phase II master plan and continued through
              the merger with FoLRAP.
            </p>
          </Block>

          <Block
            eyebrow="A new master plan"
            title="2026 — the next chapter"
          >
            <p>
              FOLP is currently developing a new master plan for the park, the
              first since 2009. The work is in progress; this page will be
              updated as goals firm up. In the meantime, the historical record
              of past plans, projects, and the people who carried them out is
              preserved in the archive.
            </p>
            <p>
              <Link href="/archive" className="text-primary underline">
                Browse the archive →
              </Link>
            </p>
          </Block>
        </div>
      </Section>

      <Section className="border-t border-border py-14">
        <div className="mx-auto max-w-3xl space-y-8">
          <div>
            <p className="eyebrow">Past projects & accomplishments</p>
            <h2 className="mt-3 font-heading text-3xl tracking-tight">
              What the FOLP has built and rebuilt.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The original write-ups are preserved in the archive. Below is the
              landing-page narrative of accomplishments and the gardening
              history.
            </p>
          </div>

          {accomplishments ? (
            <details className="rounded-lg border border-border/70 bg-card p-4">
              <summary className="cursor-pointer font-heading text-lg font-semibold">
                Park enhancements (full list)
              </summary>
              <div className="mt-4">
                <Markdown source={accomplishments.body} />
              </div>
            </details>
          ) : null}

          {landscaping ? (
            <details className="rounded-lg border border-border/70 bg-card p-4">
              <summary className="cursor-pointer font-heading text-lg font-semibold">
                Landscaping & gardens history
              </summary>
              <div className="mt-4">
                <Markdown source={landscaping.body} />
              </div>
            </details>
          ) : null}

          {goals ? (
            <details className="rounded-lg border border-border/70 bg-card p-4">
              <summary className="cursor-pointer font-heading text-lg font-semibold">
                Phase II Master Plan — full goals list (2009)
              </summary>
              <div className="mt-4">
                <Markdown source={goals.body} />
              </div>
            </details>
          ) : null}

          <div className="rounded-lg border border-dashed border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
            Looking for a specific page? The full set of pages from the previous
            site is in the{" "}
            <Link href="/archive" className="text-primary underline">
              archive
            </Link>
            .
          </div>
        </div>
      </Section>
    </div>
  );
}

function Block({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-base leading-relaxed text-muted-foreground [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline">
        {children}
      </div>
    </section>
  );
}
