import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section, PageHeader } from "@/components/section";

export const metadata: Metadata = {
  title: "Thanks for signing up",
  description:
    "Thanks for signing up for news from Friends of Lafayette-Pointer Park.",
  alternates: { canonical: "/signup/thanks" },
  robots: { index: false, follow: true },
};

export default function SignupThanksPage() {
  return (
    <div>
      <PageHeader
        eyebrow="You're on the list"
        title="Thanks for signing up!"
        description="You'll hear from us periodically about ways to get involved."
      />
      <Section className="py-14">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-base leading-relaxed text-muted-foreground">
            In the meantime, learn more about the park or pitch in.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/events">Upcoming events</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/get-involved">Other ways to help</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
