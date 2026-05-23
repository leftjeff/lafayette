import type { Metadata } from "next";
import { SignupForm } from "./signup-form";
import { Section, PageHeader } from "@/components/section";

export const metadata: Metadata = {
  title: "Sign up for news",
  description:
    "Get periodic updates from Friends of Lafayette-Pointer Park — cleanup days, events, and ways to help.",
  alternates: { canonical: "/signup" },
  openGraph: {
    title: "Sign up for news — Lafayette-Pointer Park",
    description:
      "Periodic updates about cleanup days, events, and ways to get involved.",
    url: "/signup",
    type: "website",
  },
};

export default function SignupPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Stay in touch"
        title="Sign up for news."
        description="Periodic updates about cleanup days, events at the park, and ways to get involved. No spam — a few times a year at most."
      />
      <Section className="py-14">
        <div className="mx-auto max-w-xl">
          <SignupForm />
        </div>
      </Section>
    </div>
  );
}
