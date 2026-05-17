import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Sprout, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, PageHeader } from "@/components/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, become a member, or donate to support Lafayette-Pointer Park.",
  alternates: { canonical: "/get-involved" },
  openGraph: {
    title: "Get Involved — Friends of Lafayette-Pointer Park",
    description:
      "Three ways to help the park thrive: volunteer at a cleanup day, become a member, or make a tax-deductible donation.",
    url: "/get-involved",
    type: "website",
  },
};

export default function GetInvolvedPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Get involved"
        title="Three ways to help the park thrive."
        description="Show up with a rake. Send a check. Both. We're a volunteer organization — every bit of time and money goes back into the park."
        accent="sun"
      />

      <Section className="grid gap-6 py-14 lg:grid-cols-3">
        <Pillar
          id="volunteer"
          icon={Sprout}
          title="Volunteer"
          highlight="Tools and gloves provided."
          accent="leaf"
        >
          <p>
            Our biggest workdays are spring and fall cleanups, when 80–90
            neighbors show up to rake, weed, mulch, and prune. Smaller groups
            tend the gardens through the season.
          </p>
          <p>
            No experience needed. Bring water and sunscreen. Coffee and
            pastries near the Recreation Center.
          </p>
          <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-border/60">
            <Image
              src="/photos/cleanup-volunteers.jpg"
              alt="Volunteers digging and planting along a roadside bed during a cleanup workday"
              fill
              sizes="(min-width: 1024px) 28vw, 100vw"
              className="object-cover"
            />
          </div>
          <Button asChild variant="outline" className="mt-4 w-fit">
            <Link href="/events">See upcoming workdays</Link>
          </Button>
        </Pillar>

        <Pillar
          id="membership"
          icon={Users}
          title="Become a member"
          highlight="Neighbors keep the park going."
          accent="amber"
        >
          <p>
            A $100 annual gift is the suggested membership level, but every
            household makes a difference at whatever amount feels right.
            Membership keeps the gardens planted and the workdays catered.
          </p>
          <p>
            Members get the newsletter, event reminders, and the warm
            satisfaction of having helped pay for the next round of bulbs.
          </p>
          <Button asChild className="mt-4 w-fit">
            <a href={site.donateUrl} target="_blank" rel="noreferrer">
              Join via PayPal
            </a>
          </Button>
        </Pillar>

        <Pillar
          id="donate"
          icon={Heart}
          title="Donate"
          highlight="Tax-deductible 501(c)(3)."
          accent="clay"
        >
          <p>
            Any gift helps — large or small, one-time or recurring. We use
            donations for plantings, supplies, bench and table replacements,
            and the occasional bigger project like groundskeeping and
            maintenance work.
          </p>
          <div className="mt-4 grid gap-2 rounded-xl border border-border/60 bg-secondary/40 p-4 text-sm">
            <p className="font-medium text-foreground">Mail a check to:</p>
            <p>{site.mailingAddress.name}</p>
            <p>{site.mailingAddress.line1}</p>
            <p>{site.mailingAddress.cityState}</p>
          </div>
          <Button asChild className="mt-4 w-fit">
            <a href={site.donateUrl} target="_blank" rel="noreferrer">
              Donate via PayPal
            </a>
          </Button>
        </Pillar>
      </Section>

      <Section className="pb-20">
        <div className="grid items-stretch gap-0 overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm lg:grid-cols-[1.4fr_1fr]">
          <div className="px-8 py-10 sm:px-12 sm:py-12">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Help shape the next chapter
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Lend your time on the board.
            </h2>
            <p className="mt-4 max-w-prose text-muted-foreground">
              The board meets a handful of times a year and steers the
              organization&apos;s priorities — fundraising, communications,
              programming, and hands-on garden work. If you&apos;d like to
              learn more about getting involved, we&apos;d love to hear from
              you.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contact">Tell us you&apos;re interested</Link>
            </Button>
          </div>
          <div className="relative min-h-[220px]">
            <Image
              src="/photos/path-with-azaleas.jpg"
              alt="Springtime path through Lafayette-Pointer Park with blooming azaleas"
              fill
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

const accentBg: Record<string, string> = {
  leaf: "bg-primary/10 text-primary",
  amber: "bg-[color:var(--amber)]/15 text-[color:var(--amber)]",
  clay: "bg-[color:var(--clay)]/12 text-[color:var(--clay)]",
};

const accentBorder: Record<string, string> = {
  leaf: "border-t-4 border-primary",
  amber: "border-t-4 border-[color:var(--amber)]",
  clay: "border-t-4 border-[color:var(--clay)]",
};

function Pillar({
  id,
  icon: Icon,
  title,
  highlight,
  accent,
  children,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  highlight: string;
  accent: "leaf" | "amber" | "clay";
  children: React.ReactNode;
}) {
  return (
    <article
      id={id}
      className={`flex scroll-mt-24 flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-sm ${accentBorder[accent]}`}
    >
      <div
        className={`flex size-11 items-center justify-center rounded-xl ${accentBg[accent]}`}
      >
        <Icon className="size-6" />
      </div>
      <h2 className="mt-5 font-heading text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <p className="mt-1 text-sm font-medium text-primary">{highlight}</p>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </article>
  );
}
