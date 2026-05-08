import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-heading text-xl font-semibold tracking-tight">
            {site.name}
          </p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            A 501(c)(3) volunteer-led nonprofit founded in {site.founded},
            caring for the gardens, gathering places, and community life of a
            nine-acre park in Chevy Chase, Washington DC.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Visit</p>
          <address className="not-italic mt-3 text-sm leading-relaxed text-muted-foreground">
            Lafayette-Pointer Park
            <br />
            {site.parkAddress}
            <br />
            Open daily, dawn to dusk
          </address>
        </div>

        <div>
          <p className="text-sm font-semibold">Mail</p>
          <address className="not-italic mt-3 text-sm leading-relaxed text-muted-foreground">
            {site.mailingAddress.name}
            <br />
            {site.mailingAddress.line1}
            <br />
            {site.mailingAddress.cityState}
          </address>
        </div>

        <nav className="sm:col-span-2 lg:col-span-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-border/60 pt-6 text-sm text-muted-foreground">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <span className="ml-auto">
            © {new Date().getFullYear()} {site.shortName}. All rights reserved.
          </span>
        </nav>
      </div>
    </footer>
  );
}
