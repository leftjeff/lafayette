import { site } from "@/lib/site";

type Crumb = { name: string; href: string };

export function BreadcrumbJsonLd({ crumbs }: { crumbs: Crumb[] }) {
	const data = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Home", item: site.url },
			...crumbs.map((c, i) => ({
				"@type": "ListItem",
				position: i + 2,
				name: c.name,
				item: `${site.url}${c.href}`,
			})),
		],
	};
	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from static data
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}
