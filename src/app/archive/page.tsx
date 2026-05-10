import type { Metadata } from "next";
import Link from "next/link";
import { Section, PageHeader } from "@/components/section";
import { getArchivedPdfs, getLegacyPages } from "@/lib/legacy";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "Source pages from the previous Friends of Lafayette-Pointer Park website, preserved for reference.",
};

export default async function ArchiveIndex() {
  const pages = await getLegacyPages();
  const pdfs = await getArchivedPdfs();

  // Skip pages whose only purpose was administrative on the WP site.
  const SKIP = new Set(["contact-us", "privacy-policy", "terms-of-use", "home"]);
  const visible = pages.filter((p) => !SKIP.has(p.slug));

  // Group by simple topic.
  const groups: Record<string, typeof visible> = {
    "Org & history": [],
    "Park & facilities": [],
    "Cleanup days": [],
    Other: [],
  };
  for (const p of visible) {
    if (
      ["about", "accomplishments", "goals", "board-of-directors", "people-in-the-park", "folp-awards", "membership", "volunteer", "resources", "news", "gallery"].includes(
        p.slug,
      )
    ) {
      groups["Org & history"].push(p);
    } else if (p.slug.startsWith("folp-clean")) {
      groups["Cleanup days"].push(p);
    } else if (
      ["tennis", "baseball", "playgrounds", "landscaping", "ampitheater", "daisy-fountain", "gardens", "facilities"].includes(
        p.slug,
      )
    ) {
      groups["Park & facilities"].push(p);
    } else {
      groups["Other"].push(p);
    }
  }

  return (
    <div>
      <PageHeader
        eyebrow="Archive"
        title="Pages from the previous FOLP website."
        description="Saved here for reference: every text page from the WordPress site that ran at thefolp.org for many years. Some images haven't been re-uploaded yet — captions are preserved where they appeared."
      />
      <Section className="space-y-12 py-14">
        {Object.entries(groups)
          .filter(([, items]) => items.length > 0)
          .map(([heading, items]) => (
            <section key={heading} className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                {heading}
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {items
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/archive/${p.slug}`}
                        className="block rounded-lg border border-border/70 bg-card p-4 transition hover:border-primary hover:shadow-sm"
                      >
                        <p className="font-heading text-lg font-semibold text-foreground">
                          {p.title}
                        </p>
                        {p.date ? (
                          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            {p.date.slice(0, 10)}
                          </p>
                        ) : null}
                      </Link>
                    </li>
                  ))}
              </ul>
            </section>
          ))}

        {pdfs.length > 0 ? (
          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              Documents
            </h2>
            <p className="text-sm text-muted-foreground">
              Letters, surveys, and other PDFs preserved from the previous site.
              Many board minutes and additional documents were on the WordPress
              host but could not be retrieved automatically — see the note at
              the bottom of this page.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {pdfs.map((p) => (
                <li key={p.file}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-lg border border-border/70 bg-card p-4 transition hover:border-primary hover:shadow-sm"
                  >
                    <p className="font-heading text-lg font-semibold text-foreground">
                      {p.label}
                    </p>
                    {p.date ? (
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {p.date} · PDF
                      </p>
                    ) : (
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        PDF
                      </p>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="rounded-lg border border-dashed border-border bg-secondary/40 p-6 text-sm leading-relaxed text-muted-foreground">
          <p className="font-medium text-foreground">
            About this archive
          </p>
          <p className="mt-2">
            These pages are imported from the WordPress site that lived at{" "}
            <code className="rounded bg-background px-1 py-0.5">
              thefolp.org
            </code>{" "}
            for many years. Text content was retrieved cleanly via the WP REST
            API. Images and most PDFs are blocked by the host&apos;s
            hotlink-prevention rules and were not downloadable; image captions
            are preserved where they appeared, and a number of historical PDFs
            (board minutes 2013–2019, by-laws, awards certificates, the
            Phase II walkway plan) still need to be recovered. The simplest
            path is a backup of the host&apos;s{" "}
            <code className="rounded bg-background px-1 py-0.5">
              wp-content/uploads/
            </code>{" "}
            directory.
          </p>
        </section>
      </Section>
    </div>
  );
}
