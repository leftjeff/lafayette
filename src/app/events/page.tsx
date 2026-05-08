import type { Metadata } from "next";
import { Section, PageHeader } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { upcomingEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Cleanup days, concerts, and community events at Lafayette-Pointer Park.",
};

const typeLabel: Record<(typeof upcomingEvents)[number]["type"], string> = {
  volunteer: "Volunteer",
  community: "Community",
  fundraiser: "Fundraiser",
};

export default function EventsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Events"
        title="What's coming up at the park."
        description="Cleanup days, concerts, fundraisers, and gatherings throughout the year. Most events meet at the gazebo or the recreation center."
      />

      <Section className="py-16">
        <ol className="space-y-6">
          {upcomingEvents.map((e) => {
            const d = new Date(`${e.date}T12:00:00`);
            return (
              <li
                key={e.title}
                className="grid gap-6 rounded-2xl border border-border/60 bg-card p-6 sm:grid-cols-[160px_1fr] sm:p-8"
              >
                <div className="flex flex-col items-start gap-1">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                    {d.toLocaleDateString("en-US", { month: "short" })}
                  </span>
                  <span className="font-heading text-5xl font-semibold leading-none">
                    {d.getDate()}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {d.toLocaleDateString("en-US", { weekday: "long" })}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {d.getFullYear()}
                  </span>
                </div>
                <div>
                  <Badge variant="secondary">{typeLabel[e.type]}</Badge>
                  <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight">
                    {e.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {e.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <p className="mt-12 max-w-2xl text-sm text-muted-foreground">
          Want event reminders? Send us a note from the{" "}
          <a className="text-primary underline" href="/contact">
            contact page
          </a>{" "}
          and we&apos;ll add you to the neighborhood list.
        </p>
      </Section>
    </div>
  );
}
