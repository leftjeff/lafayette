import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Sprout, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, PageHeader } from "@/components/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, become a member, or donate to support Lafayette-Pointer Park.",
};

export default function GetInvolvedPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Get involved"
        title="Three ways to help the park thrive."
        description="Show up with a rake. Send a check. Both. We're a volunteer organization — every bit of time and money goes back into the park."
      />

      <Section className="grid gap-6 py-16 lg:grid-cols-3">
        <Pillar
          id="volunteer"
          icon={Sprout}
          title="Volunteer"
          highlight="Tools and gloves provided."
        >
          <p>
            Our biggest workdays are spring and fall cleanups, when 40–50
            neighbors show up to rake, weed, mulch, and prune. Smaller groups
            tend the gardens through the season.
          </p>
          <p>
            No experience needed. Bring water and sunscreen. Coffee and
            pastries on the gazebo.
          </p>
          <Button asChild variant="outline" className="mt-4 w-fit">
            <Link href="/events">See upcoming workdays</Link>
          </Button>
        </Pillar>

        <Pillar
          id="membership"
          icon={Users}
          title="Become a member"
          highlight="200 friends keep the park going."
        >
          <p>
            Membership is a $100 annual gift. Our goal each year is two
            hundred neighbors at this level — that is what funds the work.
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
        >
          <p>
            Any gift helps — large or small, one-time or recurring. We use
            donations for plantings, supplies, bench and table replacements,
            and the occasional bigger project like the tennis courts.
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
        <div className="rounded-3xl border border-border/60 bg-secondary/50 px-6 py-12 sm:px-12">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Board recruitment
              </p>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Help shape the park&apos;s next chapter.
              </h2>
              <p className="mt-4 max-w-prose text-muted-foreground">
                We&apos;re looking for new board members — people with energy
                for fundraising, communications, programming, or hands-on
                garden work. The board meets a handful of times a year.
              </p>
            </div>
            <Button asChild size="lg" className="lg:justify-self-end">
              <Link href="/contact">Tell us you&apos;re interested</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

function Pillar({
  id,
  icon: Icon,
  title,
  highlight,
  children,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  highlight: string;
  children: React.ReactNode;
}) {
  return (
    <article
      id={id}
      className="flex scroll-mt-24 flex-col rounded-3xl border border-border/60 bg-card p-8"
    >
      <Icon className="size-7 text-primary" />
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
