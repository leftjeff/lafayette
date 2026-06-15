import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { ParkVignette } from "@/components/park-vignette";
import { PageHeader, Section } from "@/components/section";
import { facilities } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
	title: "The Park",
	description:
		"Lafayette-Pointer Park covers nine acres in Chevy Chase DC and is home to playgrounds, tennis and basketball courts, the Water Daisy, gardens, green spaces, and the Lafayette-Pointer Recreation Center.",
	alternates: { canonical: "/park" },
	openGraph: {
		title: "The Park — Lafayette-Pointer Park",
		description:
			"Nine acres in Chevy Chase DC: playgrounds, tennis and basketball courts, the Water Daisy, gardens, and the Recreation Center.",
		url: "/park",
		type: "website",
	},
};

const placeJsonLd = {
	"@context": "https://schema.org",
	"@type": "Park",
	name: "Lafayette-Pointer Park",
	description:
		"A nine-acre public park in Chevy Chase, Washington DC, with playgrounds, tennis and basketball courts, gardens, the Water Daisy sprayground, green spaces, and the Lafayette-Pointer Recreation Center.",
	url: `${site.url}/park`,
	image: `${site.url}/photos/park-overview.jpg`,
	address: {
		"@type": "PostalAddress",
		streetAddress: "5900 33rd St NW",
		addressLocality: "Washington",
		addressRegion: "DC",
		postalCode: "20015",
		addressCountry: "US",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 38.9676,
		longitude: -77.066,
	},
	openingHours: "Mo-Su 06:00-21:00",
	isAccessibleForFree: true,
	publicAccess: true,
	amenityFeature: [
		{
			"@type": "LocationFeatureSpecification",
			name: "Playgrounds",
			value: true,
		},
		{
			"@type": "LocationFeatureSpecification",
			name: "Tennis courts",
			value: true,
		},
		{
			"@type": "LocationFeatureSpecification",
			name: "Basketball court",
			value: true,
		},
		{
			"@type": "LocationFeatureSpecification",
			name: "Sprayground (Water Daisy)",
			value: true,
		},
		{
			"@type": "LocationFeatureSpecification",
			name: "Athletic field",
			value: true,
		},
		{ "@type": "LocationFeatureSpecification", name: "Gardens", value: true },
		{
			"@type": "LocationFeatureSpecification",
			name: "Recreation Center",
			value: true,
		},
	],
};

const slugAccentBg: Record<string, string> = {
	"recreation-center": "bg-[color:var(--cream)]",
	playgrounds: "bg-[color:var(--cream)]",
	"water-daisy": "bg-[#dbe9f1]",
	tennis: "bg-[#f3dccf]",
	basketball: "bg-[#f3dccf]",
	"green-spaces": "bg-secondary",
	gardens: "bg-secondary",
};

const facilityPhoto: Record<string, { src: string; alt: string }> = {
	"recreation-center": {
		src: "/photos/rec-center.jpg",
		alt: "The stone exterior of the Lafayette-Pointer Recreation Center",
	},
	playgrounds: {
		src: "/photos/playground.jpg",
		alt: "The play structure and slides at the Lafayette-Pointer Park playground",
	},
	"water-daisy": {
		src: "/photos/water-daisy.jpg",
		alt: "The Water Daisy sprayground, with its flower sprinkler and frog feature running over a blue splash pad",
	},
	tennis: {
		src: "/photos/tennis-courts.jpg",
		alt: "The tennis courts at Lafayette-Pointer Park, framed by blooming azaleas",
	},
	basketball: {
		src: "/photos/basketball-court.jpg",
		alt: "The full basketball court at Lafayette-Pointer Park, ringed by mature trees",
	},
	"athletic-field": {
		src: "/photos/baseball-diamond.jpg",
		alt: "The baseball diamond and athletic field at Lafayette-Pointer Park",
	},
	"green-spaces": {
		src: "/photos/green-spaces-bench.jpg",
		alt: "An open lawn at Lafayette-Pointer Park with mature trees and a park bench",
	},
	gardens: {
		src: "/photos/gazebo.jpg",
		alt: "The green-roofed gazebo and picnic area beneath shade trees at Lafayette-Pointer Park",
	},
};

export default function ParkPage() {
	return (
		<div>
			<BreadcrumbJsonLd crumbs={[{ name: "The Park", href: "/park" }]} />
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is a static constant
				dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }}
			/>
			<PageHeader
				eyebrow="The park"
				title="Nine acres, dozens of corners worth visiting."
				description="Open daily, dawn to dusk. Here's what you'll find when you visit."
				accent="leaves"
			/>

			<Section className="py-14">
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{facilities.map((f) => {
						const photo = facilityPhoto[f.slug];
						return (
							<article
								key={f.slug}
								className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
							>
								<div
									className={`relative aspect-[5/3] w-full overflow-hidden ${
										slugAccentBg[f.slug] ?? "bg-secondary"
									}`}
								>
									{photo ? (
										<Image
											src={photo.src}
											alt={photo.alt}
											fill
											sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
											className="object-cover transition-transform duration-300 group-hover:scale-105"
										/>
									) : (
										<ParkVignette
											slug={f.slug as "water-daisy" | "basketball"}
											className="h-full w-full"
										/>
									)}
								</div>
								<div className="p-6">
									<p className="font-heading text-xl font-semibold tracking-tight">
										{f.name}
									</p>
									<p className="mt-2 text-sm font-medium text-primary">
										{f.blurb}
									</p>
									<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
										{f.details}
									</p>
									{f.url && (
										<a
											href={f.url}
											target="_blank"
											rel="noreferrer"
											className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline"
										>
											Learn more
											<ExternalLink className="ml-1 size-3.5" />
										</a>
									)}
								</div>
							</article>
						);
					})}
				</div>

				<Link
					href="/park/nature"
					className="group mt-14 grid gap-0 overflow-hidden rounded-2xl border-2 border-primary/30 bg-[color:var(--cream)] shadow-md transition-all hover:border-primary/50 hover:shadow-lg sm:grid-cols-[1.2fr_1fr]"
				>
					<div className="px-8 py-10 sm:px-10 sm:py-12">
						<p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
							Nature in the Park
						</p>
						<h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
							Over 200 species of native plants.
						</h2>
						<p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
							Butterflies, birds, fireflies and a wide range of pollinators seek
							them out for their nectar, seeds, and fruits. Learn more about the
							park&rsquo;s flora and fauna, and what you can do to help them.
						</p>
						<p className="mt-5 inline-flex items-center font-heading text-sm font-medium uppercase tracking-[0.18em] text-primary">
							Explore flora and fauna
							<ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
						</p>
					</div>
					<div className="relative min-h-[300px]">
						<Image
							src="/photos/azaleas-wide.jpg"
							alt="Blooming azaleas along a path in the park — native plants supporting pollinators"
							fill
							sizes="(min-width: 640px) 45vw, 100vw"
							className="object-cover"
						/>
					</div>
				</Link>

				<div
					id="stormwater"
					className="mt-14 scroll-mt-24 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm"
				>
					<div className="px-8 py-10 sm:px-10 sm:py-12">
						<p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
							City Projects and the park
						</p>
						<h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
							Stormwater mitigation projects
						</h2>
						<p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
							Lafayette-Pointer Park sits on rolling terrain that has long
							struggled with stormwater runoff and erosion. FOLP works with the
							DC Government on projects to stabilize the land, protect the field
							and gardens, and improve the park&apos;s ecological health.
						</p>
						<div className="mt-8">
							<h3 className="font-heading text-lg font-semibold tracking-tight">
								Lafayette-Pointer Erosion Control
							</h3>
							<p className="mt-1 text-sm font-medium text-primary">
								Planned for 2026
							</p>
							<p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">
								This project will stabilize the park using passive and active
								stormwater management systems: repairing erosion damage,
								stabilizing the existing field for recreational use, adding
								supplemental vegetation to improve ecological health,
								coordinating new stormwater systems with existing DCPS
								infrastructure, and enhancing access and amenities through new
								paths, benches, and landscaping.
							</p>
							<a
								href="https://dgs.dc.gov/page/lafayette-pointer-park-erosion-control"
								target="_blank"
								rel="noreferrer"
								className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline"
							>
								Learn more
								<ExternalLink className="ml-1 size-3.5" />
							</a>
						</div>

						<div className="mt-10 border-t border-border/60 pt-8">
							<h3 className="font-heading text-lg font-semibold tracking-tight">
								FOLP requested adjustments to the 2026 Erosion Control plan
							</h3>
							<p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">
								In response to the 2026 Erosion Control project above, the
								Friends of Lafayette-Pointer Park have provided a written
								summary, as well as a narrated PowerPoint presentation and
								video, explaining community concerns:
							</p>
							<ul className="mt-5 list-disc space-y-5 pl-5 marker:text-primary">
								<li>
									<a
										href="https://www.dropbox.com/scl/fi/4cmqgukwv2cmoon6thw0u/FOLP-Summary-Slide-Recommendation-to-Park-Stormwater-and-Erosion-Control-Schematic-Plan.jpg.pdf?rlkey=3xdi4jg42rgbw2kofnwq8rl7y&st=4w62cljp&dl=0"
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center text-sm font-medium text-primary hover:underline"
									>
										Alternative plan developed by Friends of Lafayette-Pointer
										<ExternalLink className="ml-1 size-3.5" />
									</a>
								</li>
								<li>
									<p className="text-sm leading-relaxed text-muted-foreground">
										A review of the Concept Plan presented at the 01/08/26
										Community Meeting and the Schematic Design presented at the
										04/07/26 Community Meeting by Sandy Wiggins. Mr. Wiggins is
										a community member, development and construction
										professional, former Chair of the U.S. Green Building
										Council, and long-time member of Mayor Bowser&apos;s Green
										Building Advisory Board.
									</p>
									<a
										href="https://www.dropbox.com/scl/fi/bv8bn94g6vhe1j46c6msg/FOLP-Recorded-Response-to-Park-Stormwater-and-Erosion-Control-Schematic-Plan-Sandy-Wiggins.mp4?rlkey=y7tbx36ffqccztbsqwvuw7syy&st=cwtodl0r&dl=0"
										target="_blank"
										rel="noreferrer"
										className="mt-2 inline-flex items-center text-sm font-medium text-primary hover:underline"
									>
										Watch the recorded review
										<ExternalLink className="ml-1 size-3.5" />
									</a>
								</li>
								<li>
									<p className="text-sm leading-relaxed text-muted-foreground">
										A four-minute narrated video filmed during a rain event of
										5/23/26 that clearly documents that the stormwater problems
										are at the top of the hill and demonstrates the need for the
										Erosion Control project to focus on the upper field, vs. the
										lower NW corner.
									</p>
									<a
										href="https://www.dropbox.com/scl/fi/wyryl3i64pgvgku9r0lcd/FOLP-Rain-Event-Video-on-5-23-26-by-Tracy-Bowen-SD-480p.mov?rlkey=8y8677nzj7ai1juxofpf2x178&st=dk1rw5c8&dl=0"
										target="_blank"
										rel="noreferrer"
										className="mt-2 inline-flex items-center text-sm font-medium text-primary hover:underline"
									>
										Watch the rain-event video (large file)
										<ExternalLink className="ml-1 size-3.5" />
									</a>
								</li>
							</ul>
						</div>

						<div className="mt-10 border-t border-border/60 pt-8">
							<p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
								Completed
							</p>
							<h3 className="mt-2 font-heading text-lg font-semibold tracking-tight">
								Lafayette-Pointer Water Mitigation
							</h3>
							<p className="mt-1 text-sm font-medium text-primary">
								Completed 2024
							</p>
							<p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">
								A DC DGS project, finished in 2024, that addressed water and
								drainage problems in the park, laying the groundwork for the
								erosion-control work to come.
							</p>
							<a
								href="https://dgs.dc.gov/page/lafayette-pointer-water-mitigation"
								target="_blank"
								rel="noreferrer"
								className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline"
							>
								Learn more
								<ExternalLink className="ml-1 size-3.5" />
							</a>
						</div>
					</div>
				</div>

				<div className="mt-14 grid gap-0 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm sm:grid-cols-[1.4fr_1fr]">
					<div className="px-8 py-10 sm:px-10 sm:py-12">
						<p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
							Visit
						</p>
						<h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
							Stop by anytime.
						</h2>
						<p className="mt-3 max-w-prose text-muted-foreground">
							The park is open to the public daily, dawn to dusk. The Water
							Daisy operates Memorial Day through Labor Day. Tennis and
							basketball courts are first-come first-served. There&apos;s street
							parking on 33rd Street and along Broad Branch Road.
						</p>
						<address className="mt-6 not-italic text-base text-muted-foreground">
							<p className="font-medium text-foreground">
								Lafayette-Pointer Park
							</p>
							<p>{site.parkAddress}</p>
							<p className="mt-2 flex gap-3 text-sm">
								<a
									className="text-primary underline"
									href="https://maps.apple.com/?q=Lafayette+Pointer+Park+Washington+DC"
								>
									Apple Maps
								</a>
								<a
									className="text-primary underline"
									href="https://www.google.com/maps/dir/?api=1&destination=Lafayette+Pointer+Park+Washington+DC"
									target="_blank"
									rel="noreferrer"
								>
									Google Maps directions
								</a>
							</p>
						</address>
					</div>
					<div className="relative min-h-[260px]">
						<iframe
							title="Lafayette-Pointer Park map"
							src="https://www.google.com/maps?q=Lafayette-Pointer+Park,+5900+33rd+St+NW,+Washington,+DC+20015&output=embed"
							className="absolute inset-0 h-full w-full border-0"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							allowFullScreen
						/>
					</div>
				</div>
			</Section>
		</div>
	);
}
