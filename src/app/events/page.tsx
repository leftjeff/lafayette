import type { Metadata } from "next";
import Image from "next/image";
import { AddToCalendar } from "@/components/add-to-calendar";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { PageHeader, Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	bearDonorAnonymousCount,
	bearDonors,
	bearDonorTotalCount,
	upcomingEvents,
} from "@/lib/content";
import { site } from "@/lib/site";

const eventPhotos: Record<string, Array<{ src: string; alt: string }>> = {
	"Spring Cleanup Day": [
		{
			src: "/photos/cleanup-group.jpg",
			alt: "A large group of neighbors working together under the cherry trees during the spring cleanup",
		},
		{
			src: "/photos/cleanup-planting-families.jpg",
			alt: "Kids and parents planting in a freshly mulched bed during the spring cleanup",
		},
		{
			src: "/photos/cleanup-volunteers.jpg",
			alt: "Volunteers digging and planting along a roadside bed during the spring cleanup",
		},
	],
};

export const metadata: Metadata = {
	title: "Events",
	description:
		"Upcoming cleanup days, community gatherings, and volunteer events at Lafayette-Pointer Park in Chevy Chase, Washington DC.",
	alternates: { canonical: "/events" },
	openGraph: {
		title: "Events at Lafayette-Pointer Park",
		description:
			"Spring and fall cleanup days, the annual fund drive kickoff, and community gatherings throughout the year.",
		url: "/events",
		type: "website",
	},
};

function buildEventsJsonLd() {
	const items = upcomingEvents
		.filter((e) => e.status === "upcoming")
		.map((e) => ({
			"@type": "Event",
			name: e.title,
			description: e.description,
			startDate: e.date,
			eventStatus: "https://schema.org/EventScheduled",
			eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
			location: {
				"@type": "Place",
				name: "Lafayette-Pointer Park",
				address: {
					"@type": "PostalAddress",
					streetAddress: "5900 33rd St NW",
					addressLocality: "Washington",
					addressRegion: "DC",
					postalCode: "20015",
					addressCountry: "US",
				},
			},
			organizer: {
				"@type": "NGO",
				name: "Friends of Lafayette-Pointer Park",
				url: site.url,
			},
			url: `${site.url}/events`,
			isAccessibleForFree: true,
		}));
	return {
		"@context": "https://schema.org",
		"@type": "ItemList",
		itemListElement: items.map((event, i) => ({
			"@type": "ListItem",
			position: i + 1,
			item: event,
		})),
	};
}

const typeLabel: Record<(typeof upcomingEvents)[number]["type"], string> = {
	volunteer: "Volunteer",
	community: "Community",
	fundraiser: "Fundraiser",
};

const typeBadgeClass: Record<(typeof upcomingEvents)[number]["type"], string> =
	{
		volunteer: "bg-primary text-white",
		community: "bg-[color:var(--sky)] text-white",
		fundraiser: "bg-[color:var(--clay)] text-white",
	};

function BearDonorRoll() {
	return (
		<div className="mt-6 rounded-2xl border border-border/70 bg-card p-6 sm:p-8">
			<p className="eyebrow">With gratitude</p>
			<h4 className="mt-2 font-heading text-xl tracking-tight text-[color:var(--heading)]">
				Thank you to our {bearDonorTotalCount} donors
			</h4>
			<p className="mt-3 text-base leading-relaxed text-muted-foreground">
				The bear carving was made possible by the generosity of these neighbors
				and friends.
			</p>
			<ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-base text-[color:var(--heading)]">
				{bearDonors.map((name) => (
					<li
						key={name}
						className="after:ml-3 after:text-border after:content-['·'] last:after:hidden"
					>
						{name}
					</li>
				))}
			</ul>
			<p className="mt-4 text-sm text-muted-foreground">
				…and {bearDonorAnonymousCount} anonymous donors.
			</p>
		</div>
	);
}

export default function EventsPage() {
	const past = upcomingEvents.filter((e) => e.status === "past");
	const upcoming = upcomingEvents.filter((e) => e.status === "upcoming");
	return (
		<div>
			<BreadcrumbJsonLd crumbs={[{ name: "Events", href: "/events" }]} />
			{upcoming.length > 0 ? (
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is a static constant
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(buildEventsJsonLd()),
					}}
				/>
			) : null}
			<PageHeader
				eyebrow="Events"
				title="What's coming up at the park."
				description="Cleanup days, fundraisers, and gatherings throughout the year. Most events meet at the Recreation Center or the gazebo."
				accent="blooms"
			/>

			<Section className="py-14">
				{upcoming.length > 0 && (
					<>
						<div className="flex items-baseline justify-between">
							<h2 className="font-heading text-2xl tracking-tight sm:text-3xl">
								Coming up
							</h2>
							<span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
								{upcoming.length} event{upcoming.length === 1 ? "" : "s"}
							</span>
						</div>
						<ol className="mt-6 space-y-5">
							{upcoming.map((e) => {
								const d = new Date(`${e.date}T12:00:00`);
								return (
									<li
										key={e.title}
										id={e.slug}
										className="grid scroll-mt-24 gap-6 overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-sm sm:grid-cols-[160px_1fr] sm:p-8"
									>
										<div className="flex flex-col items-start gap-1 border-l-4 border-primary pl-4 sm:border-l-0 sm:border-t-0 sm:pl-0">
											{e.dateLabel ? (
												<>
													<span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
														Save the date
													</span>
													<span className="font-heading text-2xl leading-tight text-[color:var(--heading)]">
														{e.dateLabel}
													</span>
												</>
											) : (
												<>
													<span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
														{d.toLocaleDateString("en-US", { month: "short" })}
													</span>
													<span className="font-heading text-5xl font-semibold leading-none text-[color:var(--heading)]">
														{d.getDate()}
													</span>
													<span className="text-sm text-muted-foreground">
														{d.toLocaleDateString("en-US", { weekday: "long" })}
													</span>
													<span className="text-sm text-muted-foreground">
														{d.getFullYear()}
													</span>
												</>
											)}
										</div>
										<div>
											<Badge className={typeBadgeClass[e.type]}>
												{typeLabel[e.type]}
											</Badge>
											<h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight">
												{e.title}
											</h3>
											{e.body ? (
												<div className="mt-3 space-y-3 text-base leading-relaxed text-muted-foreground">
													{e.body.map((p) => (
														<p key={p}>{p}</p>
													))}
												</div>
											) : (
												<p className="mt-3 text-base leading-relaxed text-muted-foreground">
													{e.description}
												</p>
											)}
											{e.cta ? (
												<Button asChild size="lg" className="mt-5 text-base">
													<a href={e.cta.href} target="_blank" rel="noreferrer">
														{e.cta.label}
													</a>
												</Button>
											) : null}
											<AddToCalendar event={e} />
										</div>
									</li>
								);
							})}
						</ol>
					</>
				)}

				{past.length > 0 && (
					<div className="mt-14">
						<h2 className="font-heading text-2xl tracking-tight sm:text-3xl">
							Recent
						</h2>
						<ol className="mt-6 space-y-5">
							{past.map((e) => {
								const d = new Date(`${e.date}T12:00:00`);
								const photos = eventPhotos[e.title];
								return (
									<li
										key={e.title}
										id={e.slug}
										className="grid scroll-mt-24 gap-6 overflow-hidden rounded-2xl border border-border/60 bg-secondary/30 p-6 sm:grid-cols-[160px_1fr] sm:p-8"
									>
										<div className="flex flex-col items-start gap-1">
											<span className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--clay)]">
												Took place
											</span>
											<span className="font-heading text-2xl leading-tight text-[color:var(--heading)]">
												{d.toLocaleDateString("en-US", {
													month: "long",
													day: "numeric",
													year: "numeric",
												})}
											</span>
											<span className="text-sm text-muted-foreground">
												{d.toLocaleDateString("en-US", { weekday: "long" })}
											</span>
										</div>
										<div>
											<div className="flex flex-wrap gap-2">
												<Badge className={typeBadgeClass[e.type]}>
													{typeLabel[e.type]}
												</Badge>
												<Badge
													variant="outline"
													className="border-[color:var(--clay)]/50 text-[color:var(--clay)]"
												>
													Past event
												</Badge>
											</div>
											<h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight">
												{e.title}
											</h3>
											{e.body ? (
												<div className="mt-3 space-y-3 text-base leading-relaxed text-muted-foreground">
													{e.body.map((p) => (
														<p key={p}>{p}</p>
													))}
												</div>
											) : (
												<p className="mt-3 text-base leading-relaxed text-muted-foreground">
													{e.description}
												</p>
											)}
											{photos ? (
												<div className="mt-5 grid gap-3 sm:grid-cols-3">
													{photos.map((p) => (
														<div
															key={p.src}
															className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-border/60"
														>
															<Image
																src={p.src}
																alt={p.alt}
																fill
																sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 100vw"
																className="object-cover"
															/>
														</div>
													))}
												</div>
											) : null}
											{e.slug === "bear-carving" ? <BearDonorRoll /> : null}
										</div>
									</li>
								);
							})}
						</ol>
					</div>
				)}

				<p className="mt-12 max-w-2xl text-sm text-muted-foreground">
					Add events to your calendar above, or{" "}
					<a className="text-primary underline" href="/signup">
						sign up for our newsletter
					</a>{" "}
					for reminders when dates are announced.
				</p>
			</Section>
		</div>
	);
}
