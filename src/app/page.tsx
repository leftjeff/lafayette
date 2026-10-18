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
			<UpcomingPeek />
			<BearProject />
			<FeaturedProject />
			<Sponsors />
			<ContactSignup />
		</div>
	);
}

function MissionStrip() {
	return (
		<Section className="py-8 text-center sm:py-10">
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
			<Section className="relative pb-12 pt-10 sm:pt-12 lg:pb-14">
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
		<Section id="photos" className="scroll-mt-24 pb-10">
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
			<Section className="py-12 sm:py-14">
				<div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
					<div>
						<p className="eyebrow text-[color:var(--clay)]">
							Completed · summer 2026
						</p>
						<h2 className="mt-3 font-heading text-3xl tracking-tight text-balance sm:text-4xl">
							{bearCampaign.title}
						</h2>
						<div className="mt-5 space-y-3 text-base leading-relaxed text-muted-foreground">
							{bearCampaign.body.map((p) => (
								<p key={p.slice(0, 40)}>{p}</p>
							))}
						</div>
						<p className="mt-4 text-base leading-relaxed text-muted-foreground">
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
					</div>
					<figure className="lg:self-center">
						<div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border/60">
							<Image
								src="/photos/bear-carving-finished.jpg"
								alt="The finished “Be Kind” bear carving on the old oak stump, with families and a dog gathered at the bench beneath it"
								fill
								sizes="(min-width: 1024px) 40vw, 100vw"
								className="object-cover object-[50%_62%]"
							/>
						</div>
						<div className="mt-3 grid grid-cols-3 gap-3">
							{[
								{
									src: "/photos/bear-carving-progress-trunk.jpg",
									alt: "The storm-damaged 250-year-old oak stump before carving, with a “Donate to the Bear” sign",
								},
								{
									src: "/photos/bear-carving-progress-form.jpg",
									alt: "The bear’s shape beginning to emerge from the oak as the carving gets underway",
								},
								{
									src: "/photos/bear-carving-finished-kids.jpg",
									alt: "Two children looking up at the nearly finished bear carving",
								},
							].map((p) => (
								<div
									key={p.src}
									className="relative aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-border/60"
								>
									<Image
										src={p.src}
										alt={p.alt}
										fill
										sizes="(min-width: 1024px) 13vw, 30vw"
										className="object-cover"
									/>
								</div>
							))}
						</div>
						<figcaption className="mt-3 text-sm text-muted-foreground">
							From storm-damaged oak to finished carving, June 8–12, 2026.
							Artist Paul Waclo — see more at{" "}
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
			</Section>
		</section>
	);
}

function FeaturedProject() {
	return (
		<Section className="py-12 sm:py-14">
			<div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
				<div>
					<p className="eyebrow">Ongoing support</p>
					<h2 className="mt-3 font-heading text-3xl tracking-tight text-balance sm:text-4xl">
						{featuredCampaign.title}
					</h2>
					<div className="mt-5 space-y-3 text-base leading-relaxed text-muted-foreground">
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
			<Section className="py-12 sm:py-14">
				<div className="text-center">
					<p className="font-heading uppercase tracking-[0.22em] text-white/70">
						Partners who help keep our park thriving
					</p>
				</div>
				<ul className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
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
	const wrapUp = upcomingEvents.find((e) => e.slug === "fall-cleanup");
	const next = upcomingEvents.filter(
		(e) =>
			e.status === "upcoming" &&
			e.title !== "Annual Fund Drive Kickoff" &&
			e.slug !== "lafayette-field",
	);
	const [featured, ...rest] = next;
	return (
		<Section className="py-12 sm:py-14">
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
			<div className="mt-8 space-y-5">
				{featured ? <FeaturedEventCard event={featured} /> : null}
				{rest.length > 0 ? (
					<div className="grid gap-6 sm:grid-cols-2">
						{rest.map((e, i) => {
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
									className={`flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm ${accents[i % accents.length]}`}
								>
									<p className="eyebrow">{dateStr}</p>
									<h3 className="mt-3 font-heading text-2xl tracking-tight">
										{e.title}
									</h3>
									<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
										{e.description}
									</p>
									{e.slug ? (
										<div className="mt-auto flex flex-wrap gap-2 pt-5">
											{e.cta ? (
												<Button asChild size="sm">
													<a href={e.cta.href} target="_blank" rel="noreferrer">
														{e.cta.label}
													</a>
												</Button>
											) : null}
											<Button asChild size="sm" variant="outline">
												<Link href={`/events#${e.slug}`}>Event details</Link>
											</Button>
										</div>
									) : null}
								</article>
							);
						})}
					</div>
				) : null}
				{wrapUp ? <FallCleanupWrapUpCard event={wrapUp} /> : null}
			</div>
		</Section>
	);
}

function FeaturedEventCard({
	event,
}: {
	event: (typeof upcomingEvents)[number];
}) {
	const d = new Date(`${event.date}T12:00:00`);
	const dateStr = d.toLocaleDateString("en-US", {
		weekday: "long",
		month: "long",
		day: "numeric",
	});
	return (
		<article
			id={event.slug}
			className="relative flex flex-col overflow-hidden rounded-2xl bg-[color:var(--primary-deep)] text-white shadow-xl ring-4 ring-[color:var(--amber)] lg:flex-row"
		>
			<div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px] lg:w-1/2">
				<Image
					src="/photos/gazebo.jpg"
					alt="The gazebo at Lafayette-Pointer Park"
					fill
					sizes="(min-width: 1024px) 50vw, 100vw"
					className="object-cover"
				/>
				<span className="absolute left-4 top-4 rounded-full bg-[color:var(--amber)] px-3 py-1 font-heading text-xs uppercase tracking-[0.18em] text-[color:var(--primary-deep)] shadow-md">
					Save the date
				</span>
			</div>
			<div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-10">
				<p className="font-heading text-sm uppercase tracking-[0.18em] text-[color:var(--amber)]">
					{dateStr} · 9 a.m.–Noon
				</p>
				<h3 className="mt-2 font-heading text-3xl tracking-tight text-white sm:text-4xl">
					{event.title}
				</h3>
				<p className="mt-3 text-base leading-relaxed text-white/85">
					{event.description}
				</p>
				<div className="mt-auto flex flex-col gap-2 pt-6">
					{event.cta ? (
						<Button
							asChild
							size="lg"
							className="w-full bg-[color:var(--amber)] text-base font-semibold text-[color:var(--primary-deep)] hover:bg-[color:var(--amber)]/90"
						>
							<a href={event.cta.href} target="_blank" rel="noreferrer">
								{event.cta.label}
							</a>
						</Button>
					) : null}
					<Link
						href={`/events#${event.slug}`}
						className="text-center text-sm text-white/80 underline decoration-white/40 underline-offset-4 hover:text-white"
					>
						Event details
					</Link>
				</div>
			</div>
		</article>
	);
}

const fallCleanupPhotos = [
	{
		src: "/photos/fall-cleanup-sign.jpg",
		alt: "Kids planting bulbs in the bed beside the Lafayette-Pointer Park sign",
	},
	{
		src: "/photos/fall-cleanup-beds.jpg",
		alt: "Volunteers clearing invasives and mulching the perimeter beds along the sidewalk",
	},
	{
		src: "/photos/fall-cleanup-field.jpg",
		alt: "Neighbors and kids with buckets weeding the new athletic field in front of the recreation center",
	},
];

function FallCleanupWrapUpCard({
	event,
}: {
	event: (typeof upcomingEvents)[number];
}) {
	return (
		<article className="flex flex-col rounded-2xl border border-border border-l-4 border-l-[color:var(--sky)] bg-card p-6 shadow-sm sm:p-8">
			<p className="eyebrow text-[color:var(--clay)]">Completed · fall 2026</p>
			<h3 className="mt-3 font-heading text-2xl tracking-tight">
				{event.title}
			</h3>
			<div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
				{(event.body ?? [event.description]).map((p) => (
					<p key={p}>{p}</p>
				))}
			</div>
			{event.highlights ? (
				<ul className="mt-4 space-y-1.5 text-sm text-[color:var(--heading)]">
					{event.highlights.map((h) => (
						<li key={h} className="flex gap-2">
							<span aria-hidden="true">✅</span>
							<span>{h}</span>
						</li>
					))}
				</ul>
			) : null}
			{event.afterword ? (
				<p className="mt-4 text-sm font-medium text-[color:var(--heading)]">
					{event.afterword}
				</p>
			) : null}
			<div className="mt-5 grid gap-3 sm:grid-cols-3">
				{fallCleanupPhotos.map((p) => (
					<div
						key={p.src}
						className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-border/60"
					>
						<Image
							src={p.src}
							alt={p.alt}
							fill
							sizes="(min-width: 1024px) 30vw, (min-width: 640px) 33vw, 100vw"
							className="object-cover"
						/>
					</div>
				))}
			</div>
			<div className="mt-auto pt-5">
				<Button asChild size="sm" variant="outline">
					<Link href={`/events#${event.slug}`}>Event details</Link>
				</Button>
			</div>
		</article>
	);
}

function ContactSignup() {
	return (
		<Section className="pb-16">
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
							href={`https://www.instagram.com/${site.instagram}`}
							target="_blank"
							rel="noreferrer"
						>
							@{site.instagram}
						</a>
						<br />
						Follow on Facebook:{" "}
						<a
							className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
							href={site.facebookUrl}
							target="_blank"
							rel="noreferrer"
						>
							{site.name}
						</a>
					</p>
				</div>
				<NewsletterForm />
			</div>
		</Section>
	);
}
