import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { Markdown } from "@/components/markdown";
import { PageHeader, Section } from "@/components/section";
import { getLegacyPage } from "@/lib/legacy";

export const metadata: Metadata = {
	title: "History",
	description:
		"More than two decades of work by neighbors to preserve and improve Lafayette-Pointer Park — founding goals, master plans, projects, and people.",
	alternates: { canonical: "/history" },
	openGraph: {
		title: "History — Friends of Lafayette-Pointer Park",
		description:
			"Founding goals, master plans, capital projects, and the people who have shaped Lafayette-Pointer Park since 1999.",
		url: "/history",
		type: "article",
	},
};

export default async function HistoryPage() {
	const goals = await getLegacyPage("goals");
	const accomplishments = await getLegacyPage("accomplishments");
	const landscaping = await getLegacyPage("landscaping");

	return (
		<div>
			<BreadcrumbJsonLd crumbs={[{ name: "History", href: "/history" }]} />
			<PageHeader
				eyebrow="History"
				title="More than two decades of stewardship."
				description="The Friends of Lafayette Park began in 1999. Successive generations of neighbors have shaped the park through master plans, capital projects, gardens, and gatherings. This page preserves that record."
				accent="blooms"
			/>

			<Section className="py-14">
				<div className="mx-auto max-w-3xl space-y-12">
					<Block
						eyebrow="History of the park"
						title="1928 — twelve acres become parkland"
					>
						<p>
							In 1928 the District of Columbia purchased twelve acres of rolling
							parkland — roughly bounded by Broad Branch Road, Northampton,
							33rd, and Quesada Streets — to build Lafayette School. Part of the
							land had been a farm owned by the late Mr. Horace Jones, whose
							original 1859 farmhouse still stands on Quesada Street. Behind the
							house the Jones cattle once grazed in the area where children play
							in the tot lot today.
						</p>
						<p>
							Much of the land, however, was acquired from African-American
							families who owned several small houses and farm plots near Broad
							Branch Road and Oliver Street. The families farmed the land for
							nearly 80 years, until 1928, when the city acquired it to build
							the park and Lafayette Elementary School. Many were descendants of
							Captain George Pointer, who was born enslaved in 1773, purchased
							his own freedom, and worked for more than 40 years as a
							supervising engineer on what became the C&amp;O Canal. They were
							among the first freed African-Americans to become landowners in
							upper Northwest DC.
						</p>
						<p>
							The houses were torn down to make way for the first school — a
							collapsible frame building. When the brick school opened in 1931,
							the land around it was woods, a barn, and just a few houses on
							33rd Street, a farm-like setting that delighted the children.
							During World War II, victory gardens took advantage of the sunny
							south side.
						</p>
						<p>
							These remembrances of local residents were summarized by Sharon
							Moran in <em>Origins II</em>, published by Neighborhood Planning
							Council #2 and #3 in 1976.
						</p>
					</Block>

					<Block
						eyebrow="Founding"
						title="1999 — Friends of Lafayette Park forms"
					>
						<p>
							In 1999 a group of Chevy Chase DC neighbors organized as Friends
							of Lafayette Park (FOLP), a 501(c)(3) nonprofit dedicated to
							preserving and improving the park. Beth Pierce and Jeff Stoiber
							were among the founders. From the start, the organization
							partnered with DC Parks and Recreation to do the work the city
							budget alone could not.
						</p>
					</Block>

					<Block
						eyebrow="Phase I master plan"
						title="1999–2009 — the first decade of goals"
					>
						<p>
							When FOLP was founded, the directors worked with the community to
							develop the organization&apos;s first phase of goals — the Phase I
							Master Plan. Those goals were completed in the first ten years and
							shaped most of what visitors see today: the perimeter gardens,
							playgrounds, the former tot lot, the amphitheater, upgraded tennis
							courts and ball fields, benches, picnic tables, and the Daisy
							Fountain.
						</p>
						<p>
							Park-perimeter gardening began earlier still: in the early 1990s,
							before FOLP existed, neighbor Judy Goodman organized a small group
							of gardeners to rehabilitate the Quesada Street corner and plant
							the hill at Quesada and Broad Branch with azaleas. American Plant
							Food donated plants; local Boy Scouts helped prepare the site;
							garden designer Jane Berger donated plans. When FOLP formed, the
							garden group folded into the organization.
						</p>
					</Block>

					<Block
						eyebrow="Phase II master plan"
						title="2009 — tenth-anniversary plan"
					>
						<p>
							In commemoration of FOLP&apos;s tenth anniversary in 2009, the
							board developed a Phase II master plan. The capital improvements
							section called for replacing all walkways in the park, new upper-
							park lighting to match the lower park, a rubberized running track
							around the baseball fields, additional picnic tables, a renovated
							school gym, a new recreation center, and an extension of the green
							water irrigation system to the Broad Branch Road garden.
						</p>
						<p>
							The maintenance section called for correcting drainage and erosion
							problems, repairing the earthen wall between the spray park and
							the play area, grading and seeding the baseball fields, and
							resurfacing the tennis courts (last color-coated in 2003). Many —
							though not all — of these items have since been addressed.
						</p>
						<p className="text-sm">
							The complete Phase II goals list is preserved in the archive:
							<Link
								href="/archive/goals"
								className="ml-1 text-primary underline"
							>
								FOLP Goals
							</Link>
							.
						</p>
					</Block>

					<Block eyebrow="2011" title="Amphitheater repair project">
						<p>
							The Friends of Lafayette-Pointer Park played a vital role in
							getting extensive repairs done to the amphitheater in August 2011,
							with the rehabilitation completed at the start of the 2011–2012
							school year. FOLP and the Lafayette Home and School Association
							(HSA) paid for and managed the project, funded by the generous
							support of neighbors and Lafayette school families.
						</p>
						<p>
							The amphitheater — adjacent to the ball field and originally built
							in 2001 — had fallen into disrepair from heavy use. The work
							restored it to its place as a wonderful asset for the park.
						</p>
						<figure className="mt-6">
							<div className="relative aspect-[2/1] overflow-hidden rounded-xl ring-1 ring-border/60">
								<Image
									src="/photos/amphitheater-construction.jpg"
									alt="Workers and wheelbarrows during the 2011 reconstruction of the Lafayette-Pointer Park amphitheater retaining wall"
									fill
									sizes="(min-width: 768px) 48rem, 100vw"
									className="object-cover"
								/>
							</div>
							<figcaption className="mt-2 text-sm text-muted-foreground">
								Rebuilding the amphitheater retaining wall, summer 2011.
							</figcaption>
						</figure>
					</Block>

					<Block
						eyebrow="2017"
						title="Merger with Friends of Lafayette Recreation Center and Park"
					>
						<p>
							In 2016 a parallel organization, the Friends of Lafayette
							Recreation Center and Park (FoLRAP), was founded by Elizabeth
							Engel and Patty Myler to focus on the recreation center
							redevelopment then under discussion with DPR. In 2017 FOLP and
							FoLRAP merged, consolidating volunteer effort under a single
							501(c)(3) and broadening the board&apos;s remit to cover both the
							park grounds and the rec center building.
						</p>
					</Block>

					<Block eyebrow="2020" title="Park renamed Lafayette-Pointer Park">
						<p>
							In 2020, after extensive advocacy and conversations with
							descendants of Captain George Pointer (1773–1862) — who was born
							enslaved, purchased his freedom at age 19, and worked as an
							engineer on the Chesapeake & Ohio Canal — the District renamed the
							park Lafayette-Pointer Park. The land had been home to
							African-American families including the descendants of George
							Pointer from the 1830s until 1928 when their homes were taken by
							eminent domain to build Lafayette Elementary School and Lafayette
							Park.
						</p>
						<p>
							Beginning in 2018, Historic Chevy Chase DC researched the
							park&apos;s history, launched a petition in 2019 to rename the
							park, and located and contacted a number of Pointer family
							descendants. The DC Council approved the name change in late 2020.
							A sign near the recreation center now offers additional
							information, maps, and historic drawings.
						</p>
						<p>
							<a
								href="https://www.historicchevychasedc.org/category/lafayette-pointer-project/"
								target="_blank"
								rel="noreferrer"
							>
								Read more from Historic Chevy Chase DC
							</a>
							.
						</p>
					</Block>

					<Block eyebrow="2021" title="New recreation center opens">
						<p>
							The new Lafayette-Pointer Recreation Center opened in 2021,
							replacing the older structure. FOLP provided community input to
							the city throughout the design and construction process — work
							that began with the Phase II master plan and continued through the
							merger with FoLRAP.
						</p>
					</Block>

					<Block eyebrow="A new master plan" title="2026 — the next chapter">
						<p>
							FOLP is currently developing a new master plan for the park, the
							first since 2009. The work is in progress; this page will be
							updated as goals firm up. In the meantime, the historical record
							of past plans, projects, and the people who carried them out is
							preserved in the archive.
						</p>
						<p>
							<Link href="/archive" className="text-primary underline">
								Browse the archive →
							</Link>
						</p>
					</Block>
				</div>
			</Section>

			<Section className="border-t border-border py-14">
				<div className="mx-auto max-w-3xl space-y-8">
					<div>
						<p className="eyebrow">Past projects & accomplishments</p>
						<h2 className="mt-3 font-heading text-3xl tracking-tight">
							What the FOLP has built and rebuilt.
						</h2>
						<p className="mt-4 text-base leading-relaxed text-muted-foreground">
							Over more than two decades of volunteer work, the FOLP has
							supported the addition of gardens (particularly on the park&apos;s
							perimeter), playgrounds, the former tot lot, the amphitheater, the
							gazebo, upgraded tennis courts and ball fields, and added benches,
							picnic tables, and much more. The FOLP provided input to the city
							for the renovation of the park playground in 2015 and for the new
							recreation center in 2021, and continues to work with the city on
							an improved stormwater management plan to address erosion and
							other park improvements.
						</p>
						<p className="mt-4 text-base leading-relaxed text-muted-foreground">
							The original write-ups are preserved in the archive. Below is the
							landing-page narrative of accomplishments and the gardening
							history.
						</p>
					</div>

					<div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm sm:grid sm:grid-cols-[1fr_1.1fr]">
						<div className="relative aspect-[4/3] sm:aspect-auto">
							<Image
								src="/photos/bear-carving-paul-waclo.jpg"
								alt="Artist Paul Waclo carving a bear from a storm-damaged oak stump at Lafayette-Pointer Park, June 2026"
								fill
								sizes="(min-width: 640px) 24rem, 100vw"
								className="object-cover"
							/>
						</div>
						<div className="p-6 sm:p-8">
							<p className="eyebrow text-primary">June 2026 — most recent</p>
							<h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight">
								The bear carving
							</h3>
							<p className="mt-3 text-base leading-relaxed text-muted-foreground">
								Thanks to generous community members, FOLP reached its
								fundraising goal and commissioned artist Paul Waclo to transform
								a storm-damaged 250-year-old oak into a sculpture of a bear —
								the longtime mascot of Lafayette Elementary School — the week of
								June 8–12, 2026.
							</p>
							<Link
								href="/events#bear-carving"
								className="mt-4 inline-block text-primary underline"
							>
								Read the story →
							</Link>
						</div>
					</div>

					{accomplishments ? (
						<details className="rounded-lg border border-border/70 bg-card p-4">
							<summary className="cursor-pointer font-heading text-lg font-semibold">
								Park enhancements (full list)
							</summary>
							<div className="mt-4">
								<Markdown source={accomplishments.body} />
							</div>
						</details>
					) : null}

					{landscaping ? (
						<details className="rounded-lg border border-border/70 bg-card p-4">
							<summary className="cursor-pointer font-heading text-lg font-semibold">
								Landscaping & gardens history
							</summary>
							<div className="mt-4">
								<Markdown source={landscaping.body} />
							</div>
						</details>
					) : null}

					{goals ? (
						<details className="rounded-lg border border-border/70 bg-card p-4">
							<summary className="cursor-pointer font-heading text-lg font-semibold">
								Phase II Master Plan — full goals list (2009)
							</summary>
							<div className="mt-4">
								<Markdown source={goals.body} />
							</div>
						</details>
					) : null}

					<div className="rounded-lg border border-dashed border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
						Looking for a specific page? The full set of pages from the previous
						site is in the{" "}
						<Link href="/archive" className="text-primary underline">
							archive
						</Link>
						.
					</div>
				</div>
			</Section>
		</div>
	);
}

function Block({
	eyebrow,
	title,
	children,
}: {
	eyebrow: string;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section className="space-y-4">
			<div>
				<p className="eyebrow">{eyebrow}</p>
				<h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
					{title}
				</h2>
			</div>
			<div className="space-y-4 text-base leading-relaxed text-muted-foreground [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline">
				{children}
			</div>
		</section>
	);
}
