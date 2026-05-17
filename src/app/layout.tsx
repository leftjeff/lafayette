import type { Metadata, Viewport } from "next";
import { PT_Serif, Forum } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

const ptSerif = PT_Serif({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const forum = Forum({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lafayetteparkfriends.org"),
  title: {
    default: "Friends of Lafayette-Pointer Park",
    template: "%s — Friends of Lafayette-Pointer Park",
  },
  description:
    "A volunteer-led nonprofit caring for Lafayette-Pointer Park, nine acres of green space in Chevy Chase, Washington DC.",
  applicationName: site.name,
  keywords: [
    "Lafayette-Pointer Park",
    "Lafayette Park",
    "Chevy Chase DC",
    "Chevy Chase park",
    "Washington DC parks",
    "Friends of Lafayette-Pointer Park",
    "FOLP",
    "Ward 4 DC",
    "DC nonprofit",
    "park volunteer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Friends of Lafayette-Pointer Park",
    description:
      "Nine acres of green space in Chevy Chase, DC — stewarded by neighbors since 1999.",
    type: "website",
    url: "/",
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Friends of Lafayette-Pointer Park",
    description:
      "Nine acres of green space in Chevy Chase, DC — stewarded by neighbors since 1999.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "nonprofit",
};

export const viewport: Viewport = {
  themeColor: "#2d5e3e",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  alternateName: site.shortName,
  url: "https://lafayetteparkfriends.org",
  logo: "https://lafayetteparkfriends.org/icon",
  image: "https://lafayetteparkfriends.org/opengraph-image",
  description:
    "Volunteer-led 501(c)(3) nonprofit caring for Lafayette-Pointer Park, nine acres of green space in Chevy Chase, Washington DC.",
  foundingDate: String(site.founded),
  email: site.email,
  sameAs: [`https://www.instagram.com/${site.instagram}`],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.mailingAddress.line1,
    addressLocality: "Washington",
    addressRegion: "DC",
    postalCode: "20015",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Place",
    name: "Chevy Chase, Washington, DC",
  },
  nonprofitStatus: "Nonprofit501c3",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${ptSerif.variable} ${forum.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is a static constant
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
