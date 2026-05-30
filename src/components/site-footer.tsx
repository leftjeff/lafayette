import { Camera, Mail, MailPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
	return (
		<footer className="mt-24 bg-[color:var(--primary-deep)] text-white">
			<div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
				<div>
					<Image
						src="/folp-logo-footer.png"
						alt={site.name}
						width={926}
						height={771}
						className="h-28 w-auto"
					/>
					<p className="sr-only">{site.name}</p>
					<p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
						A 501(c)(3) volunteer-led nonprofit founded in {site.founded},
						caring for the gardens, gathering places, and community life of a
						nine-acre park in Chevy Chase, Washington DC.
					</p>

					<div className="mt-6 space-y-2 text-sm text-white/80">
						<p className="flex items-center gap-2">
							<Mail className="size-4" />
							<a className="hover:text-white" href={`mailto:${site.email}`}>
								{site.email}
							</a>
						</p>
						<p className="flex items-center gap-2">
							<Camera className="size-4" />
							<a
								className="hover:text-white"
								href={`https://instagram.com/${site.instagram}`}
								target="_blank"
								rel="noreferrer"
							>
								@{site.instagram}
							</a>
						</p>
					</div>

					<Link
						href="/signup"
						className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-4 py-2 font-heading text-sm uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-[color:var(--primary-deep)]"
					>
						<MailPlus className="size-4" />
						Sign up for news
					</Link>
				</div>

				<div className="lg:pt-6">
					<p className="font-heading text-base tracking-wide text-white/80">
						Visit
					</p>
					<address className="mt-3 not-italic text-sm leading-relaxed text-white/75">
						Lafayette-Pointer Park
						<br />
						{site.parkAddress}
						<br />
						Open daily, dawn to dusk
					</address>

					<p className="mt-6 font-heading text-base tracking-wide text-white/80">
						Mail
					</p>
					<address className="mt-3 not-italic text-sm leading-relaxed text-white/75">
						{site.mailingAddress.name}
						<br />
						{site.mailingAddress.line1}
						<br />
						{site.mailingAddress.cityState}
					</address>
				</div>

				<nav className="flex flex-col gap-2 text-sm lg:pt-6">
					<p className="font-heading text-base tracking-wide text-white/80">
						Explore
					</p>
					{site.nav.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-white/75 hover:text-white"
						>
							{item.label}
						</Link>
					))}
				</nav>
			</div>

			<div className="border-t border-white/15">
				<div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-xs text-white/60 sm:px-6 lg:px-8">
					<span>
						© {new Date().getFullYear()} {site.name}. All rights reserved.
					</span>
					<span>501(c)(3) nonprofit · EIN on request</span>
				</div>
			</div>
		</footer>
	);
}
