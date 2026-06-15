import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";
import { ParkVignette } from "@/components/park-vignette";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
	annualGoal,
	bearCampaign,
	donationAmounts,
	featuredCampaign,
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
			<BearProject />
			<FeaturedProject />
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
				incorporated in the District of Columbia to assist the DC Department of
				Parks and Recreation in the maintenance and improvement of
				Lafayette-Pointer Park grounds. The Park includes extensive gardens, a
				gazebo, playgrounds, tennis and basketball courts, green spaces, and the
				Lafayette-Pointer Recreation Center. FOLP is a 501(c)(3) organization
				and all contributions are tax-deductible.
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
						<div
							className="mt-5 h-px w-24 bg-[color:var(--clay)]/60"
							aria-hidden
						/>
						<p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
							A community public park open to all — used every day by neighbors
							and visitors from across the area for pickup tennis and
							basketball, family picnics, after-school play, and gatherings by
							the childcare community. Volunteer-led, neighbor-funded, plant by
							plant since 1999.
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
		src: "/photos/tennis-courts-summer.jpg",
		alt: "The blue tennis courts at Lafayette-Pointer Park",
		label: "Tennis",
	},
	{
		kind: "photo",
		src: "/photos/basketball-court.jpg",
		alt: "The basketball court at Lafayette-Pointer Park",
		label: "Basketball",
	},
	{
		kind: "photo",
		src: "/photos/playground.jpg",
		alt: "Children's play structure at Lafayette-Pointer Park",
		label: "Playgrounds",
	},
	{
		kind: "photo",
		src: "/photos/gazebo.jpg",
		alt: "The gazebo at Lafayette-Pointer Park",
		label: "Gazebo",
	},
	{
		kind: "photo",
		src: "/photos/water-daisy.jpg",
		alt: "The Water Daisy splash pad at Lafayette-Pointer Park",
		label: "Water Daisy",
	},
];

function PhotoStrip() {
	return (
		<Section id="photos" className="scroll-mt-24 pb-12">
			<ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
				{photoStripTiles.map((t) => (
					<li
						key={t.label}
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

function BearProject() {
	return (
		<section className="border-y border-[color:var(--clay)]/20 bg-[color:var(--cream)]/60">
			<Section className="py-16 sm:py-20">
				<div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
					<div>
						<p className="eyebrow text-[color:var(--clay)]">
							Completed · summer 2026
						</p>
						<h2 className="mt-3 font-heading text-3xl tracking-tight text-balance sm:text-4xl">
							{bearCampaign.title}
						</h2>
						<div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
							{bearCampaign.body.map((p) => (
								<p key={p.slice(0, 40)}>{p}</p>
							))}
						</div>
						<p className="mt-6 text-base leading-relaxed text-muted-foreground">
							Read the{" "}
							<Link
								href="/events#bear-carving"
								className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
							>
								full story
							</Link>{" "}
							for project history, artist details, and how the carving came
							together.
						</p>
						<figure className="mt-8">
							<div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border/60">
								<Image
									src="/photos/bear-carving-paul-waclo.jpg"
									alt="Sculptor Paul Waclo carving a tree trunk with a chainsaw"
									fill
									sizes="(min-width: 1024px) 55vw, 100vw"
									className="object-cover"
								/>
							</div>
							<figcaption className="mt-2 text-sm text-muted-foreground">
								Artist Paul Waclo at work — see more at{" "}
								<a
									href="https://www.chainsawcarvingbypaul.com/"
									target="_blank"
									rel="noreferrer"
									className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
								>
									chainsawcarvingbypaul.com
								</a>
								.
							</figcaption>
						</figure>
					</div>

					<div className="space-y-6">
						<BearCampaignCard />
					</div>
				</div>
			</Section>
		</section>
	);
}

function BearCampaignCard() {
	return (
		<div className="flex flex-col items-center rounded-2xl border border-border bg-card p-4 shadow-sm">
			<iframe
				src={`https://www.paypal.com/giving/campaigns?campaign_id=${site.bearCampaignId}`}
				title="Donate to the bear carving — PayPal campaign card"
				width={382}
				height={550}
				scrolling="no"
				className="max-w-full rounded-lg border-0"
			/>
		</div>
	);
}

function FeaturedProject() {
	return (
		<Section className="py-16 sm:py-20">
			<div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
				<div>
					<p className="eyebrow">Ongoing support</p>
					<h2 className="mt-3 font-heading text-3xl tracking-tight text-balance sm:text-4xl">
						{featuredCampaign.title}
					</h2>
					<div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
						{featuredCampaign.body.map((p) => (
							<p key={p.slice(0, 40)}>{p}</p>
						))}
						<p>{annualGoal.description}</p>
					</div>
				</div>

				<DonationForm />
			</div>
		</Section>
	);
}

function DonationForm() {
	return (
		<div className="h-fit rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-8">
			<p className="font-heading text-2xl tracking-wide text-[color:var(--heading)]">
				Donation amount
			</p>
			<p className="mt-2 text-sm text-muted-foreground">
				Venmo, PayPal, Credit Card, or mailed check. All gifts are
				tax-deductible.
			</p>

			<div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
				{donationAmounts.map((amt) => (
					<span
						key={amt}
						className="rounded-xl border border-border bg-background px-4 py-3 text-center font-heading text-lg tracking-wide text-[color:var(--heading)]"
					>
						${amt}
					</span>
				))}
			</div>

			<Button asChild size="lg" className="mt-6 w-full">
				<a href={site.donateUrl} target="_blank" rel="noreferrer">
					Donate
				</a>
			</Button>

			<p className="mt-4 text-center text-xs text-muted-foreground">
				Or mail a check payable to {site.shortName} to{" "}
				{site.mailingAddress.line1}, {site.mailingAddress.cityState}.
			</p>
		</div>
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
	const next = upcomingEvents
		.filter((e) => e.status === "upcoming")
		.slice(0, 3);
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
				<NewsletterForm />
			</div>
		</Section>
	);
}
