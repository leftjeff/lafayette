import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { ParkVignette } from "@/components/park-vignette";
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
      <Hero />
      <MissionStrip />
      <PhotoStrip />
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
    <Section className="py-10 text-center sm:py-12">
      <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Friends of Lafayette-Pointer Park, Inc. is a non-profit organization
        incorporated in the District of Columbia to assist the DC Department
        of Parks and Recreation in the maintenance and improvement of
        Lafayette-Pointer Park grounds. The Park includes extensive gardens,
        a gazebo, playgrounds, tennis and basketball courts, green spaces,
        and the Lafayette-Pointer Recreation Center. FOLP is a 501(c)(3)
        organization and all contributions are tax-deductible.
      </p>
    </Section>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-[color:var(--cream)]">
      <Section className="relative pb-16 pt-12 sm:pt-14 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">Chevy Chase, Washington DC</p>
            <h1 className="mt-4 font-heading text-4xl uppercase tracking-[0.16em] text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              Be a part of your community
            </h1>
            <div className="mt-5 h-px w-24 bg-[color:var(--clay)]/60" aria-hidden />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A community public park open to all — used every day by
              neighbors and visitors from across the area for pickup tennis
              and basketball, family picnics, after-school play, and
              gatherings by the childcare community. Volunteer-led,
              neighbor-funded, plant by plant since 1999.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/get-involved#donate">Donate now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Learn more</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-border/80 aspect-[3/4]">
              <Image
                src="/photos/sign-portrait.jpg"
                alt="The Lafayette-Pointer Park entrance sign with the stone Recreation Center behind"
                width={795}
                height={1059}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <span className="absolute -bottom-3 left-6 rounded-full bg-card px-4 py-2 font-heading text-xs uppercase tracking-[0.2em] text-[color:var(--clay)] shadow-md ring-1 ring-border/80">
              Nine acres · since 1999
            </span>
          </div>
        </div>
      </Section>
    </div>
  );
}

type PhotoTile = {
  kind: "photo";
  src: string;
  alt: string;
  label: string;
};

type VignetteTile = {
  kind: "vignette";
  slug:
    | "gardens"
    | "playgrounds"
    | "water-daisy"
    | "tennis"
    | "basketball"
    | "green-spaces"
    | "recreation-center";
  bg: string;
  label: string;
};

const photoStripTiles: Array<PhotoTile | VignetteTile> = [
  {
    kind: "photo",
    src: "/photos/rec-center.jpg",
    alt: "Lafayette-Pointer Recreation Center stone exterior with a flowering tree",
    label: "Rec Center",
  },
  {
    kind: "photo",
    src: "/photos/path-with-azaleas.jpg",
    alt: "A path through the park with blooming azaleas in the foreground",
    label: "Gardens",
  },
  {
    kind: "photo",
    src: "/photos/path-to-playground.jpg",
    alt: "Path through trees toward the park playground",
    label: "Playgrounds",
  },
  {
    kind: "photo",
    src: "/photos/tennis-courts.jpg",
    alt: "Tennis courts at Lafayette-Pointer Park, framed by blooming azaleas",
    label: "Tennis",
  },
  {
    kind: "photo",
    src: "/photos/cleanup-group.jpg",
    alt: "Neighbors gathered for a cleanup workday under cherry trees",
    label: "Cleanups",
  },
  {
    kind: "vignette",
    slug: "water-daisy",
    bg: "bg-[#dbe9f1]",
    label: "Water Daisy",
  },
];

function PhotoStrip() {
  return (
    <Section className="pb-12">
      <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {photoStripTiles.map((t, i) => (
          <li
            key={i}
            className={`group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-border/60 ${
              t.kind === "vignette" ? t.bg : "bg-secondary"
            }`}
          >
            {t.kind === "photo" ? (
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <ParkVignette slug={t.slug} className="h-full w-full" />
            )}
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color:var(--primary-deep)]/85 via-[color:var(--primary-deep)]/30 to-transparent px-3 py-2 font-heading text-xs uppercase tracking-[0.2em] text-white">
              {t.label}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function FeaturedProject() {
  return (
    <Section className="py-16 sm:py-20">
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
      className="h-fit rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-8"
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
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 text-center">
        <p className="font-heading uppercase tracking-[0.22em] text-white/80">
          {annualGoal.eyebrow}
        </p>
        <h2 className="mt-4 font-heading text-4xl tracking-tight text-balance text-white sm:text-5xl">
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
          <a href={site.donateUrl} target="_blank" rel="noreferrer">
            Make your annual pledge
          </a>
        </Button>
      </div>
    </section>
  );
}

function Sponsors() {
  return (
    <section className="bg-[color:var(--primary-deep)] text-white">
      <Section className="py-16 sm:py-20">
        <div className="text-center">
          <p className="font-heading uppercase tracking-[0.22em] text-white/70">
            Partners who help keep our park thriving
          </p>
        </div>
        <ul className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {sponsors.map((s) => (
            <li key={s.name} className="flex flex-col items-center text-center">
              <div className="flex size-24 items-center justify-center rounded-full bg-white/95 text-[color:var(--primary-deep)] shadow-md ring-1 ring-white/30">
                <span className="font-heading text-2xl tracking-wide">
                  {s.monogram}
                </span>
              </div>
              <p className="mt-4 font-heading text-base leading-tight text-white">
                {s.short}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </section>
  );
}

function UpcomingPeek() {
  const next = upcomingEvents.filter((e) => e.status === "upcoming").slice(0, 3);
  return (
    <Section className="py-16 sm:py-20">
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
        {next.map((e, i) => {
          const d = new Date(`${e.date}T12:00:00`);
          const dateStr =
            e.dateLabel ??
            d.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            });
          const accents = [
            "border-l-4 border-l-primary",
            "border-l-4 border-l-[color:var(--clay)]",
            "border-l-4 border-l-[color:var(--amber)]",
          ];
          return (
            <article
              key={e.title}
              className={`rounded-2xl border border-border bg-card p-6 shadow-sm ${accents[i % accents.length]}`}
            >
              <p className="eyebrow">{dateStr}</p>
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
      <div className="grid items-stretch gap-8 rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10 lg:grid-cols-[1fr_1.05fr_0.85fr]">
        <div className="relative overflow-hidden rounded-2xl bg-secondary aspect-[4/5] lg:aspect-auto lg:min-h-[260px]">
          <Image
            src="/photos/path-with-azaleas.jpg"
            alt="A path through Lafayette-Pointer Park with blooming azaleas"
            fill
            sizes="(min-width: 1024px) 32vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
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
            Follow on Instagram:{" "}
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
          className="flex flex-col justify-center gap-3"
          aria-label="Sign up for the newsletter"
        >
          <p className="font-heading text-xl tracking-wide text-[color:var(--heading)]">
            Stay in the loop
          </p>
          <p className="text-sm text-muted-foreground">
            Event invites and short updates. No spam.
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
              className="bg-primary px-5 font-heading text-sm uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-[color:var(--primary-deep)]"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
