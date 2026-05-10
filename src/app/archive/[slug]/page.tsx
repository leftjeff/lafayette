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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getLegacyPage(slug);
  if (!page) return { title: "Archive" };
  return {
    title: page.title,
    description: `Archived from the previous FOLP website (${page.date.slice(0, 10)}).`,
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
