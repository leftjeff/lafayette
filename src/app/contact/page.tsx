import { Mail, MailPlus, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { PageHeader, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Contact Friends of Lafayette-Pointer Park — email, mail, or Instagram. Volunteer-led 501(c)(3) nonprofit in Chevy Chase, Washington DC.",
	alternates: { canonical: "/contact" },
	openGraph: {
		title: "Contact — Friends of Lafayette-Pointer Park",
		description:
			"Reach Friends of Lafayette-Pointer Park — by email, by mail, or on Instagram.",
		url: "/contact",
		type: "website",
	},
};

export default function ContactPage() {
	return (
		<div>
			<BreadcrumbJsonLd crumbs={[{ name: "Contact", href: "/contact" }]} />
			<PageHeader
				eyebrow="Contact"
				title="Say hello."
				description="We are a small volunteer organization, so replies may take a few days. For urgent park maintenance issues, contact DC Parks and Recreation directly."
			/>

			<Section className="grid gap-10 py-16 lg:grid-cols-2">
				<div className="space-y-8">
					<ContactBlock
						icon={Mail}
						title="Email"
						body={
							<a
								href={`mailto:${site.email}`}
								className="text-primary underline"
							>
								{site.email}
							</a>
						}
						note="Best for general questions, board interest, and event coordination."
					/>
					<ContactBlock
						icon={MapPin}
						title="Mailing address"
						body={
							<address className="not-italic">
								{site.mailingAddress.name}
								<br />
								{site.mailingAddress.line1}
								<br />
								{site.mailingAddress.cityState}
							</address>
						}
						note="Preferred for membership checks and tax-deductible donations."
					/>
					<ContactBlock
						icon={MailPlus}
						title="Sign up for news"
						body={
							<p>
								Get periodic updates about cleanup days, events, and ways to
								help.
							</p>
						}
					>
						<Button asChild size="lg" className="mt-4 w-full text-base">
							<Link href="/signup">Sign up for news</Link>
						</Button>
					</ContactBlock>
				</div>

				<ContactForm />
			</Section>
		</div>
	);
}

function ContactBlock({
	icon: Icon,
	title,
	body,
	note,
	children,
}: {
	icon: React.ComponentType<{ className?: string }>;
	title: string;
	body: React.ReactNode;
	note?: string;
	children?: React.ReactNode;
}) {
	return (
		<div className="rounded-3xl border border-border/60 bg-card p-8">
			<Icon className="size-6 text-primary" />
			<p className="mt-4 font-heading text-xl font-semibold tracking-tight">
				{title}
			</p>
			<div className="mt-2 text-base text-foreground">{body}</div>
			{note ? (
				<p className="mt-3 text-sm text-muted-foreground">{note}</p>
			) : null}
			{children}
		</div>
	);
}
