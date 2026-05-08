import Link from "next/link";
import { ArrowRight, Calendar, Heart, Sprout, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/section";
import { ParkIllustration } from "@/components/park-illustration";
import { upcomingEvents, accomplishments } from "@/lib/content";

export default function Home() {
  return (
    <div>
      <Hero />
      <QuickLinks />
      <MissionStrip />
      <UpcomingEvents />
      <PointerHistory />
      <DonateBanner />
    </div>
  );
}

function Hero() {
  return (
    <Section className="pt-16 pb-20 sm:pt-20 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Chevy Chase, Washington DC
          </p>
          <h1 className="mt-4 font-heading text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
            Nine acres of green, looked after by neighbors.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Friends of Lafayette-Pointer Park is a volunteer-led nonprofit that
            plants, prunes, raises funds, and rallies the neighborhood to keep
            our park beautiful — and to honor the families whose history runs
            through it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/get-involved#donate">
                Become a Friend
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/events">Upcoming events</Link>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border/60 shadow-sm">
          <ParkIllustration className="aspect-[4/3]" />
        </div>
      </div>
    </Section>
  );
}

function QuickLinks() {
  const items = [
    {
      icon: Sprout,
      title: "Volunteer",
      body: "Spring and fall cleanup days, garden workdays, and special projects.",
      href: "/get-involved#volunteer",
    },
    {
      icon: Calendar,
      title: "Events",
      body: "Concerts at the amphitheater, community gatherings, and seasonal cleanups.",
      href: "/events",
    },
    {
      icon: Users,
      title: "Membership",
      body: "Join 200+ neighbors who keep the park thriving with annual support.",
      href: "/get-involved#membership",
    },
    {
      icon: Heart,
      title: "Donate",
      body: "Tax-deductible gifts fund landscaping, plantings, and park improvements.",
      href: "/get-involved#donate",
    },
  ];

  return (
    <Section className="pb-12">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, body, href }) => (
          <Link
            key={title}
            href={href}
            className="group rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
          >
            <Icon className="size-6 text-primary" />
            <p className="mt-4 font-heading text-lg font-semibold">{title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {body}
            </p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Learn more <ArrowRight className="ml-1 size-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function MissionStrip() {
  return (
    <div className="mt-12 border-y border-border/60 bg-secondary/40 py-20">
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Our mission"
            title="Care that goes beyond what the city alone can do."
            description="DC Parks and Recreation maintains the basics. We do the rest — the plantings, the events, the bench replacements, the slow work of building a place where the neighborhood actually wants to gather."
          />
          <ul className="space-y-3">
            {accomplishments.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                />
                <span className="text-base leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}

function UpcomingEvents() {
  const next = upcomingEvents.slice(0, 3);
  return (
    <Section className="pt-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="What's next"
          title="Upcoming in the park"
          description="A few things on the calendar. Everyone is welcome."
        />
        <Button asChild variant="ghost">
          <Link href="/events">
            All events <ArrowRight className="ml-1 size-4" />
          </Link>
        </Button>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {next.map((e) => (
          <Card key={e.title} className="border-border/60">
            <CardContent className="p-6">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-primary">
                {formatDate(e.date)}
              </p>
              <p className="mt-2 font-heading text-xl font-semibold">
                {e.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {e.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function PointerHistory() {
  return (
    <Section className="mt-24">
      <div className="grid gap-10 rounded-3xl bg-primary px-6 py-14 text-primary-foreground sm:px-12 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground/80">
            History
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            The Pointer family, and how this park got its name.
          </h2>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-primary-foreground/90">
          <p>
            The land was purchased by the District in 1928. Part of it was a
            farm owned by Horace Jones; part was owned by African-American
            families descended from George Pointer, who was born enslaved in
            1773 and became a freedman and a C&O Canal engineer.
          </p>
          <p>
            In 2020, after years of advocacy, the park was renamed
            Lafayette-Pointer Park to honor those families and the history
            that ran through the property long before the city took it over.
          </p>
          <Button
            asChild
            variant="secondary"
            className="mt-2 bg-background text-foreground hover:bg-background/90"
          >
            <Link href="/about">Read the full story</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

function DonateBanner() {
  return (
    <Section className="mt-24 mb-8">
      <div className="rounded-3xl border border-border/60 bg-secondary/50 px-6 py-12 text-center sm:px-12">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
          Become a friend
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          $100 a year keeps the gardens growing.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Our goal is 200 neighbors contributing $100 or more each year. All
          gifts are tax-deductible and go directly to plantings, supplies, and
          park improvements.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/get-involved#donate">Donate</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/get-involved#volunteer">Volunteer instead</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
