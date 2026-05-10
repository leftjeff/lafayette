import type { Metadata } from "next";
import Image from "next/image";
import { Section, PageHeader } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { upcomingEvents } from "@/lib/content";

const eventPhotos: Record<string, Array<{ src: string; alt: string }>> = {
  "Spring Cleanup Day": [
    {
      src: "/photos/cleanup-group.jpg",
      alt: "A large group of neighbors working together under the cherry trees during the spring cleanup",
    },
    {
      src: "/photos/cleanup-planting-families.jpg",
      alt: "Kids and parents planting in a freshly mulched bed during the spring cleanup",
    },
    {
      src: "/photos/cleanup-volunteers.jpg",
      alt: "Volunteers digging and planting along a roadside bed during the spring cleanup",
    },
  ],
};

export const metadata: Metadata = {
  title: "Events",
  description:
    "Cleanup days, fundraisers, and community events at Lafayette-Pointer Park.",
};

const typeLabel: Record<(typeof upcomingEvents)[number]["type"], string> = {
  volunteer: "Volunteer",
  community: "Community",
  fundraiser: "Fundraiser",
};

const typeBadgeClass: Record<(typeof upcomingEvents)[number]["type"], string> = {
  volunteer: "bg-primary text-white",
  community: "bg-[color:var(--sky)] text-white",
  fundraiser: "bg-[color:var(--clay)] text-white",
};

export default function EventsPage() {
  const past = upcomingEvents.filter((e) => e.status === "past");
  const upcoming = upcomingEvents.filter((e) => e.status === "upcoming");
  return (
    <div>
      <PageHeader
        eyebrow="Events"
        title="What's coming up at the park."
        description="Cleanup days, fundraisers, and gatherings throughout the year. Most events meet at the Recreation Center or the gazebo."
        accent="blooms"
      />

      <Section className="py-14">
        {upcoming.length > 0 && (
          <>
            <div className="flex items-baseline justify-between">
              <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">
                Coming up
              </h2>
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {upcoming.length} event{upcoming.length === 1 ? "" : "s"}
              </span>
            </div>
            <ol className="mt-6 space-y-5">
              {upcoming.map((e) => {
                const d = new Date(`${e.date}T12:00:00`);
                return (
                  <li
                    key={e.title}
                    className="grid gap-6 overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-sm sm:grid-cols-[160px_1fr] sm:p-8"
                  >
                    <div className="flex flex-col items-start gap-1 border-l-4 border-primary pl-4 sm:border-l-0 sm:border-t-0 sm:pl-0">
                      {e.dateLabel ? (
                        <>
                          <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                            Save the date
                          </span>
                          <span className="font-heading text-2xl leading-tight text-[color:var(--heading)]">
                            {e.dateLabel}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                            {d.toLocaleDateString("en-US", { month: "short" })}
                          </span>
                          <span className="font-heading text-5xl font-semibold leading-none text-[color:var(--heading)]">
                            {d.getDate()}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {d.toLocaleDateString("en-US", { weekday: "long" })}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {d.getFullYear()}
                          </span>
                        </>
                      )}
                    </div>
                    <div>
                      <Badge className={typeBadgeClass[e.type]}>
                        {typeLabel[e.type]}
                      </Badge>
                      <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight">
                        {e.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        {e.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </>
        )}

        {past.length > 0 && (
          <div className="mt-14">
            <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">
              Recent
            </h2>
            <ol className="mt-6 space-y-5">
              {past.map((e) => {
                const d = new Date(`${e.date}T12:00:00`);
                const photos = eventPhotos[e.title];
                return (
                  <li
                    key={e.title}
                    className="grid gap-6 overflow-hidden rounded-2xl border border-border/60 bg-secondary/30 p-6 sm:grid-cols-[160px_1fr] sm:p-8"
                  >
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--clay)]">
                        Took place
                      </span>
                      <span className="font-heading text-2xl leading-tight text-[color:var(--heading)]">
                        {d.toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {d.toLocaleDateString("en-US", { weekday: "long" })}
                      </span>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className={typeBadgeClass[e.type]}>
                          {typeLabel[e.type]}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-[color:var(--clay)]/50 text-[color:var(--clay)]"
                        >
                          Past event
                        </Badge>
                      </div>
                      <h3 className="mt-2 font-heading text-2xl font-semibold tracking-tight">
                        {e.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        {e.description}
                      </p>
                      {photos ? (
                        <div className="mt-5 grid gap-3 sm:grid-cols-3">
                          {photos.map((p) => (
                            <div
                              key={p.src}
                              className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-border/60"
                            >
                              <Image
                                src={p.src}
                                alt={p.alt}
                                fill
                                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 100vw"
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        )}

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
