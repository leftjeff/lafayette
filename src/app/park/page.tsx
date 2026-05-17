import type { Metadata } from "next";
import Image from "next/image";
import { Section, PageHeader } from "@/components/section";
import { ParkVignette } from "@/components/park-vignette";
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
  url: "https://lafayetteparkfriends.org/park",
  image: "https://lafayetteparkfriends.org/photos/park-overview.jpg",
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
    { "@type": "LocationFeatureSpecification", name: "Playgrounds", value: true },
    { "@type": "LocationFeatureSpecification", name: "Tennis courts", value: true },
    { "@type": "LocationFeatureSpecification", name: "Basketball court", value: true },
    { "@type": "LocationFeatureSpecification", name: "Sprayground (Water Daisy)", value: true },
    { "@type": "LocationFeatureSpecification", name: "Gardens", value: true },
    { "@type": "LocationFeatureSpecification", name: "Recreation Center", value: true },
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
    src: "/photos/path-to-playground.jpg",
    alt: "A path leading toward the park playground beneath tall trees",
  },
  tennis: {
    src: "/photos/tennis-courts.jpg",
    alt: "The tennis courts at Lafayette-Pointer Park, framed by blooming azaleas",
  },
  "green-spaces": {
    src: "/photos/green-spaces-bench.jpg",
    alt: "An open lawn at Lafayette-Pointer Park with mature trees and a park bench",
  },
  gardens: {
    src: "/photos/azaleas-wide.jpg",
    alt: "Blooming azaleas along a tree-lined path in the park",
  },
};

export default function ParkPage() {
  return (
    <div>
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
                      slug={
                        f.slug as "water-daisy" | "basketball"
                      }
                      className="h-full w-full"
                    />
                  )}
                </div>
                <div className="p-6">
                  <p className="font-heading text-xl font-semibold tracking-tight">
                    {f.name}
                  </p>
                  <p className="mt-2 text-sm font-medium text-primary">{f.blurb}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {f.details}
                  </p>
                </div>
              </article>
            );
          })}
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
              basketball courts are first-come first-served. There&apos;s
              street parking on 33rd Street and along Broad Branch Road.
            </p>
            <address className="mt-6 not-italic text-base text-muted-foreground">
              <p className="font-medium text-foreground">Lafayette-Pointer Park</p>
              <p>{site.parkAddress}</p>
              <p className="mt-2 text-sm">
                <a
                  className="text-primary underline"
                  href="https://maps.apple.com/?q=Lafayette+Pointer+Park+Washington+DC"
                >
                  Open in Maps
                </a>
              </p>
            </address>
          </div>
          <div className="relative min-h-[260px]">
            <Image
              src="/photos/entrance-sign.jpg"
              alt="The Lafayette-Pointer Park entrance sign with surrounding greenery"
              fill
              sizes="(min-width: 640px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
