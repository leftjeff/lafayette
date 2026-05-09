import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { ParkIllustration } from "@/components/park-illustration";
import {
  donationAmounts,
  featuredCampaign,
  annualGoal,
  sponsors,
  upcomingEvents,
} from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div>
      <MissionStrip />
      <Hero />
      <FeaturedProject />
      <PledgeBanner />
      <Sponsors />
      <UpcomingPeek />
      <ContactSignup />
    </div>
  );
}

function MissionStrip() {
  return (
    <Section className="py-14 text-center sm:py-16">
      <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Friends of Lafayette-Pointer Park, Inc. is a non-profit organization
        incorporated in the District of Columbia to assist the DC Department
        of Parks and Recreation in the maintenance and improvement of
        Lafayette-Pointer Park, including the gardens, gazebo, ball fields,
        playgrounds, tennis courts, and the Lafayette-Pointer Recreation
        Center. FOLP is a 501(c)(3) organization and all contributions are
        tax-deductible.
      </p>
    </Section>
  );
}

function Hero() {
  return (
    <section
      aria-label="Be a part of your community"
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <ParkIllustration className="h-full w-full object-cover" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[color:var(--primary-deep)]/55 mix-blend-multiply"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[color:var(--primary-deep)]/40"
        />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-32 text-center text-white sm:px-6 sm:py-40 lg:px-8">
        <h1 className="font-heading text-4xl uppercase tracking-[0.18em] text-white sm:text-5xl lg:text-6xl">
          Be a part of your community
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
          Volunteer-led, neighbor-funded, plant by plant for twenty-five years.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/get-involved#donate">Donate now</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/70 bg-white/10 text-white hover:bg-white hover:text-[color:var(--primary-deep)]">
            <Link href="/about">Learn more</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function FeaturedProject() {
  return (
    <Section className="py-20 sm:py-24">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow">Featured project</p>
          <h2 className="mt-3 font-heading text-3xl tracking-tight text-balance sm:text-4xl">
            {featuredCampaign.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            {featuredCampaign.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-6 rounded-2xl border border-border bg-card px-5 py-4 text-sm leading-relaxed text-muted-foreground">
            {featuredCampaign.paymentNote}
          </p>
        </div>

        <DonationForm />
      </div>
    </Section>
  );
}

function DonationForm() {
  return (
    <form
      aria-label="Make a donation"
      className="h-fit rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-8"
      action={site.donateUrl}
      target="_blank"
      rel="noreferrer"
    >
      <p className="font-heading text-2xl tracking-wide text-[color:var(--heading)]">
        Donation amount
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        All gifts are tax-deductible. PayPal and check accepted.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {donationAmounts.map((amt) => (
          <label
            key={amt}
            className="cursor-pointer rounded-xl border border-border bg-background px-4 py-3 text-center font-heading text-lg tracking-wide text-[color:var(--heading)] transition-colors has-[input:checked]:border-primary has-[input:checked]:bg-secondary has-[input:checked]:text-primary-deep hover:border-primary/60"
          >
            <input
              type="radio"
              name="amount"
              value={amt}
              defaultChecked={amt === 100}
              className="sr-only"
            />
            ${amt}
          </label>
        ))}
        <label className="cursor-pointer rounded-xl border border-border bg-background px-4 py-3 text-center font-heading text-lg tracking-wide text-muted-foreground transition-colors has-[input:checked]:border-primary has-[input:checked]:bg-secondary has-[input:checked]:text-primary-deep hover:border-primary/60">
          <input type="radio" name="amount" value="other" className="sr-only" />
          Other
        </label>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full">
        Donate
      </Button>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Or mail a check payable to {site.shortName} to{" "}
        {site.mailingAddress.line1}, {site.mailingAddress.cityState}.
      </p>
    </form>
  );
}

function PledgeBanner() {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <p className="font-heading uppercase tracking-[0.22em] text-white/80">
          {annualGoal.eyebrow}
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl tracking-tight text-balance text-white sm:text-5xl">
          {annualGoal.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          {annualGoal.description}
        </p>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="mt-8 border-white bg-transparent text-white hover:bg-white hover:text-[color:var(--primary-deep)]"
        >
          <Link href="/get-involved#membership">Make your 2026 pledge</Link>
        </Button>
      </div>
    </section>
  );
}

function Sponsors() {
  return (
    <section className="bg-[color:var(--primary-deep)] text-white">
      <Section className="py-20 sm:py-24">
        <div className="text-center">
          <p className="font-heading uppercase tracking-[0.22em] text-white/70">
            Thanks to our supporters
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-heading text-3xl tracking-tight text-white sm:text-4xl">
            Neighbors and partners who help keep the park thriving.
          </h2>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((s) => (
            <li
              key={s.name}
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-7 text-center"
            >
              <p className="font-heading text-xl tracking-wide text-white">
                {s.name}
              </p>
              {s.tier ? (
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">
                  {s.tier}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>
    </section>
  );
}

function UpcomingPeek() {
  const next = upcomingEvents.slice(0, 3);
  return (
    <Section className="py-20 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">In the park</p>
          <h2 className="mt-3 font-heading text-3xl tracking-tight sm:text-4xl">
            What&rsquo;s coming up
          </h2>
        </div>
        <Button asChild variant="ghost">
          <Link href="/events">
            All events <ArrowRight className="ml-1 size-4" />
          </Link>
        </Button>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {next.map((e) => {
          const d = new Date(`${e.date}T12:00:00`);
          return (
            <article
              key={e.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="eyebrow">
                {d.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <h3 className="mt-3 font-heading text-2xl tracking-tight">
                {e.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {e.description}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function ContactSignup() {
  return (
    <Section className="pb-24">
      <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 sm:p-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contact us</p>
          <h2 className="mt-3 font-heading text-3xl tracking-tight sm:text-4xl">
            Keep in touch.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            E-mail:{" "}
            <a
              className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            <br />
            Follow us on Instagram:{" "}
            <a
              className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
              href={`https://instagram.com/${site.instagram}`}
              target="_blank"
              rel="noreferrer"
            >
              @{site.instagram}
            </a>
          </p>
        </div>

        <form
          className="flex flex-col gap-3"
          aria-label="Sign up for the newsletter"
        >
          <p className="font-heading text-xl tracking-wide text-[color:var(--heading)]">
            Stay in the loop
          </p>
          <p className="text-sm text-muted-foreground">
            Invitations to events and short updates on what we&rsquo;re working
            on. No spam.
          </p>
          <div className="flex overflow-hidden rounded-xl border border-border bg-background">
            <input
              type="email"
              required
              placeholder="you@neighborhood.org"
              className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary px-6 font-heading text-sm uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-[color:var(--primary-deep)]"
            >
              Sign up
            </button>
          </div>
          <p className="text-xs text-muted-foreground">
            We&rsquo;ll only email you about the park.
          </p>
        </form>
      </div>
    </Section>
  );
}
