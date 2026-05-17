import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, PageHeader } from "@/components/section";
import { Markdown } from "@/components/markdown";
import { getLegacyPage, getLegacyPages } from "@/lib/legacy";

export async function generateStaticParams() {
  const pages = await getLegacyPages();
  return pages.map((p) => ({ slug: p.slug }));
}

function excerpt(body: string, max = 160): string {
  const stripped = body
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`>#-]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (stripped.length <= max) return stripped;
  const truncated = stripped.slice(0, max);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace > 80 ? lastSpace : max).trim()}…`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getLegacyPage(slug);
  if (!page) return { title: "Archive" };
  const description =
    excerpt(page.body) ||
    `Archived from the previous FOLP website (${page.date.slice(0, 10)}).`;
  const canonical = `/archive/${slug}`;
  return {
    title: page.title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${page.title} — Archive`,
      description,
      url: canonical,
      type: "article",
    },
  };
}

export default async function ArchivePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getLegacyPage(slug);
  if (!page) notFound();

  return (
    <div>
      <PageHeader eyebrow="Archive" title={page.title} />
      <Section className="py-14">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="rounded-lg border border-border/70 bg-secondary/40 p-4 text-xs text-muted-foreground">
            Saved {page.date.slice(0, 10)} from the previous WordPress site at{" "}
            <code className="rounded bg-background px-1 py-0.5">{page.source}</code>.
            Images from the original site are not yet re-uploaded — captions
            are kept where they appeared.
          </div>
          <Markdown source={page.body} />
          <div className="pt-6">
            <Link href="/archive" className="text-sm text-primary underline">
              ← All archived pages
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
