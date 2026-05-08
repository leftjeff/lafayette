import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section, PageHeader } from "@/components/section";
import { boardSpotlight } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 1999, Friends of Lafayette-Pointer Park is a 501(c)(3) nonprofit caring for nine acres of green space in Chevy Chase, DC.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="A neighborhood looking after its park, since 1999."
        description="We are a 501(c)(3) volunteer-led nonprofit, run by neighbors, partnered with DC Parks and Recreation. Our work is the slow, steady kind: plantings, repairs, gatherings, and advocacy."
      />

      <Section className="grid gap-16 py-16 lg:grid-cols-[1fr_2fr]">
        <aside className="space-y-6 text-sm text-muted-foreground lg:sticky lg:top-24 lg:h-fit">
          <Fact label="Founded" value="1999" />
          <Fact label="Status" value="501(c)(3) nonprofit" />
          <Fact label="Park size" value="Nine acres" />
          <Fact label="Location" value="Ward 4, Chevy Chase DC" />
          <Fact
            label="Partner agency"
            value="DC Department of Parks and Recreation"
          />
        </aside>

        <article className="space-y-10">
          <Block title="Mission">
            <p>
              Friends of Lafayette-Pointer Park exists to preserve and improve
              the park: to maintain the gardens, to keep play spaces and
              gathering places in good repair, and to draw the neighborhood
              into the work of stewardship. We do what city budgets alone
              cannot — the small, steady investments that make a public space
              feel cared for.
            </p>
          </Block>

          <Block title="The land's history">
            <p>
              The District purchased the land in 1928. Part of it was a farm
              owned by Horace Jones; part was owned by African-American
              families descended from George Pointer (1773–1862), who was born
              enslaved, gained his freedom, and worked as an engineer on the
              Chesapeake & Ohio Canal. His descendants lived on this land
              through the 19th and early 20th centuries.
            </p>
            <p>
              For decades, the park was called Lafayette Park. In 2020, after
              extensive advocacy and conversations with descendants, the
              District renamed it Lafayette-Pointer Park — restoring the
              Pointer family&apos;s name to the place where their lives
              unfolded.
            </p>
          </Block>

          <Block title="What we do">
            <p>
              Twice a year — once in the spring, once in the fall — neighbors
              show up with rakes and gloves to clean and prepare the park for
              the next season. Throughout the year, smaller crews tend the
              perennial beds, plant bulbs, mulch trees, and keep an eye on the
              things that need fixing. We raise money to replace benches,
              resurface the tennis courts, plant new trees, and put on
              community concerts at the amphitheater.
            </p>
          </Block>

          <Block title="Board of directors">
            <p>
              FOLP is governed by a small volunteer board that meets several
              times a year and steers the organization&apos;s priorities. We
              actively recruit new board members from the neighborhood.
            </p>
            <p className="rounded-xl border border-primary/20 bg-secondary/50 p-5 text-foreground">
              <strong className="font-semibold">
                Currently recruiting.
              </strong>{" "}
              <span className="text-muted-foreground">
                {boardSpotlight.message}
              </span>
            </p>
            <Button asChild>
              <Link href="/contact">Get in touch</Link>
            </Button>
          </Block>
        </article>
      </Section>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
        {label}
      </dt>
      <dd className="mt-1 text-base text-foreground">{value}</dd>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="space-y-4 text-base leading-relaxed text-muted-foreground [&_strong]:text-foreground [&_p_a]:text-primary [&_p_a]:underline">
        {children}
      </div>
    </section>
  );
}
