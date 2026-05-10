import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const LEGACY_DIR = join(process.cwd(), "content", "legacy", "md");
const PDFS_DIR = join(process.cwd(), "public", "legacy-pdfs");

// Human-readable labels and dates for the archived PDFs.
const PDF_META: Record<string, { label: string; date: string }> = {
  "Announcement-Merger-of-FOLP-and-FoLRAP.pdf": {
    label: "Announcement: Merger of FOLP and FoLRAP",
    date: "2017-09-18",
  },
  "Community-Survey-About-Lafayette-Park.pdf": {
    label: "Community survey about Lafayette Park",
    date: "2017",
  },
  "FOLP-Bioretention-Letter-5-5-2015.pdf": {
    label: "Letter on park & school drainage (bioretention)",
    date: "2015-05-05",
  },
  "FOLPBallFieldsLetter.pdf": {
    label: "Letter on updating the ball-fields area",
    date: "2015",
  },
  "FOLP-Letter-to-DPR-Director-June-2018.pdf": {
    label: "Letter to DPR Director on park improvements",
    date: "2018-06",
  },
  "Fund-Rasing-Letter-November-2021.pdf": {
    label: "Annual fundraising letter",
    date: "2021-11",
  },
  "Lafayette-Park-Stormwater-Assessment-3-22-18.pdf": {
    label: "Lafayette Park stormwater assessment",
    date: "2018-03-22",
  },
  "2015-7-23-PDF-1.pdf": {
    label: "Board meeting minutes",
    date: "2015-07-23",
  },
};

export type LegacyPage = {
  slug: string;
  title: string;
  date: string;
  modified: string;
  source: string;
  body: string;
};

export type LegacyPdf = {
  file: string;
  url: string;
  label: string;
  date: string;
};

function parseFrontmatter(raw: string): {
  meta: Record<string, string>;
  body: string;
} {
  const m = raw.match(/^---\n([\s\S]+?)\n---\n\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const sep = line.indexOf(":");
    if (sep < 0) continue;
    const key = line.slice(0, sep).trim();
    let val = line.slice(sep + 1).trim();
    if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
    meta[key] = val;
  }
  return { meta, body: m[2] };
}

let pagesCache: LegacyPage[] | null = null;

export async function getLegacyPages(): Promise<LegacyPage[]> {
  if (pagesCache) return pagesCache;
  const files = (await readdir(LEGACY_DIR)).filter((f) => f.endsWith(".md"));
  const pages = await Promise.all(
    files.map(async (f) => {
      const raw = await readFile(join(LEGACY_DIR, f), "utf8");
      const { meta, body } = parseFrontmatter(raw);
      return {
        slug: meta.slug ?? f.replace(/\.md$/, ""),
        title: meta.title ?? f,
        date: meta.date ?? "",
        modified: meta.modified ?? "",
        source: meta.source ?? "",
        body,
      };
    })
  );
  pagesCache = pages.sort((a, b) => a.title.localeCompare(b.title));
  return pagesCache;
}

export async function getLegacyPage(slug: string): Promise<LegacyPage | null> {
  const pages = await getLegacyPages();
  return pages.find((p) => p.slug === slug) ?? null;
}

export async function getArchivedPdfs(): Promise<LegacyPdf[]> {
  let files: string[] = [];
  try {
    files = (await readdir(PDFS_DIR)).filter((f) => f.toLowerCase().endsWith(".pdf"));
  } catch {
    return [];
  }
  return files
    .sort()
    .map((file) => {
      const meta = PDF_META[file] ?? { label: file, date: "" };
      return {
        file,
        url: `/legacy-pdfs/${file}`,
        label: meta.label,
        date: meta.date,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}
