import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lafayetteparkfriends.org"),
  title: {
    default: "Friends of Lafayette-Pointer Park",
    template: "%s — Friends of Lafayette-Pointer Park",
  },
  description:
    "A volunteer-led nonprofit caring for Lafayette-Pointer Park, nine acres of green space in Chevy Chase, Washington DC.",
  openGraph: {
    title: "Friends of Lafayette-Pointer Park",
    description:
      "Nine acres of green space in Chevy Chase, DC — stewarded by neighbors since 1999.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
