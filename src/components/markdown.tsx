import Link from "next/link";
import type { ReactNode } from "react";

// Tiny Markdown renderer scoped to the patterns in our legacy WP archive:
// headings, paragraphs, ordered + unordered lists, inline links, images,
// **bold**, *italic*, blockquotes, and horizontal rules. Not a general-purpose
// renderer — keep it close to what `content/legacy/md/*.md` actually contains.

const LEGACY_HOST = /^https?:\/\/(?:www\.)?thefolp\.org/i;
const UPLOADS = /\/wp-content\/uploads\//i;

function rewriteHref(href: string): string {
  // Strip zero-width and stray whitespace that the WP editor sometimes left
  // in URLs (e.g. trailing LRM marks).
  const clean = href.replace(/[​-‏‪-‮﻿]/g, "").trim();
  if (LEGACY_HOST.test(clean) && !UPLOADS.test(clean)) {
    const path = clean
      .replace(LEGACY_HOST, "")
      .replace(/^\/+/, "")
      .replace(/\/+$/, "");
    if (!path || path === "home") return "/archive";
    const slug = path.split("/").filter(Boolean).pop() ?? "";
    return slug ? `/archive/${slug}` : "/archive";
  }
  return clean;
}

function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let i = 0;
  let key = 0;
  while (i < text.length) {
    // ![alt](src)
    if (text[i] === "!" && text[i + 1] === "[") {
      const close = text.indexOf("]", i + 2);
      const open = close >= 0 ? text.indexOf("(", close) : -1;
      const end = open === close + 1 ? text.indexOf(")", open) : -1;
      if (end > 0) {
        const alt = text.slice(i + 2, close).trim();
        // Legacy uploads are blocked by the WP host's hotlink rule, so render
        // a caption placeholder instead of a broken <img>.
        out.push(
          <em key={key++} className="block text-xs text-muted-foreground">
            {alt ? `[image: ${alt}]` : "[image]"}
          </em>
        );
        i = end + 1;
        continue;
      }
    }
    // [text](href)
    if (text[i] === "[") {
      const close = text.indexOf("]", i + 1);
      const open = close >= 0 ? text.indexOf("(", close) : -1;
      const end = open === close + 1 ? text.indexOf(")", open) : -1;
      if (end > 0) {
        const label = text.slice(i + 1, close);
        const href = text.slice(open + 1, end).trim();
        const rewritten = rewriteHref(href);
        const isInternal = rewritten.startsWith("/");
        out.push(
          isInternal ? (
            <Link key={key++} href={rewritten} className="text-primary underline">
              {renderInline(label)}
            </Link>
          ) : (
            <a
              key={key++}
              href={rewritten}
              className="text-primary underline"
              target="_blank"
              rel="noreferrer"
            >
              {renderInline(label)}
            </a>
          )
        );
        i = end + 1;
        continue;
      }
    }
    // **bold**
    if (text[i] === "*" && text[i + 1] === "*") {
      const end = text.indexOf("**", i + 2);
      if (end > 0) {
        out.push(
          <strong key={key++} className="font-semibold text-foreground">
            {renderInline(text.slice(i + 2, end))}
          </strong>
        );
        i = end + 2;
        continue;
      }
    }
    // *italic*
    if (text[i] === "*") {
      const end = text.indexOf("*", i + 1);
      if (end > 0) {
        out.push(<em key={key++}>{renderInline(text.slice(i + 1, end))}</em>);
        i = end + 1;
        continue;
      }
    }
    // plain run — accumulate to next special char. Always advance at least
    // one char to make progress past unpaired markers (* [ etc.).
    let j = i + 1;
    while (
      j < text.length &&
      text[j] !== "*" &&
      !(text[j] === "[" || (text[j] === "!" && text[j + 1] === "["))
    ) {
      j++;
    }
    out.push(text.slice(i, j));
    i = j;
  }
  return out;
}

type Block =
  | { type: "h"; level: number; text: string }
  | { type: "p"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "hr" };

function parseBlocks(md: string): Block[] {
  const lines = md.split("\n");
  const blocks: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    if (line.trim() === "---") {
      blocks.push({ type: "hr" });
      i++;
      continue;
    }
    const h = /^(#{1,6})\s+(.*)$/.exec(line);
    if (h) {
      const text = h[2].trim();
      if (text) blocks.push({ type: "h", level: h[1].length, text });
      i++;
      continue;
    }
    if (/^>\s?/.test(line)) {
      const buf: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        buf.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({ type: "blockquote", text: buf.join(" ") });
      continue;
    }
    if (/^(\s*)(- |\d+\.\s)/.test(line)) {
      const isOrdered = /^\s*\d+\./.test(line);
      const items: string[] = [];
      while (i < lines.length) {
        const m = /^\s*(?:- |\d+\.\s+)(.*)$/.exec(lines[i]);
        if (!m) break;
        items.push(m[1]);
        i++;
        // Allow continuation lines (indented or non-empty, non-list lines)
        while (
          i < lines.length &&
          lines[i].trim() &&
          !/^\s*(?:- |\d+\.\s+)/.test(lines[i]) &&
          !/^#{1,6}\s+/.test(lines[i])
        ) {
          items[items.length - 1] += " " + lines[i].trim();
          i++;
        }
      }
      blocks.push({ type: isOrdered ? "ol" : "ul", items });
      continue;
    }
    // Paragraph: gather until blank line or a block-starter.
    const buf: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^#{1,6}\s+/.test(lines[i]) &&
      !/^>\s?/.test(lines[i]) &&
      !/^\s*(?:- |\d+\.\s)/.test(lines[i]) &&
      lines[i].trim() !== "---"
    ) {
      buf.push(lines[i]);
      i++;
    }
    blocks.push({ type: "p", text: buf.join(" ") });
  }
  return blocks;
}

export function Markdown({ source }: { source: string }) {
  const blocks = parseBlocks(source);
  return (
    <div className="space-y-4 text-base leading-relaxed text-muted-foreground [&_strong]:text-foreground">
      {blocks.map((b, i) => {
        if (b.type === "hr") return <hr key={i} className="my-8 border-border" />;
        if (b.type === "h") {
          const cls =
            b.level === 1
              ? "mt-8 font-heading text-3xl font-semibold tracking-tight text-foreground"
              : b.level === 2
                ? "mt-8 font-heading text-2xl font-semibold tracking-tight text-foreground"
                : "mt-6 font-heading text-xl font-semibold text-foreground";
          const Tag = (`h${Math.min(Math.max(b.level, 1), 6)}` as
            | "h1"
            | "h2"
            | "h3"
            | "h4"
            | "h5"
            | "h6");
          return (
            <Tag key={i} className={cls}>
              {renderInline(b.text)}
            </Tag>
          );
        }
        if (b.type === "p") return <p key={i}>{renderInline(b.text)}</p>;
        if (b.type === "ul")
          return (
            <ul key={i} className="ml-6 list-disc space-y-2">
              {b.items.map((it, j) => (
                <li key={j}>{renderInline(it)}</li>
              ))}
            </ul>
          );
        if (b.type === "ol")
          return (
            <ol key={i} className="ml-6 list-decimal space-y-2">
              {b.items.map((it, j) => (
                <li key={j}>{renderInline(it)}</li>
              ))}
            </ol>
          );
        if (b.type === "blockquote")
          return (
            <blockquote
              key={i}
              className="border-l-4 border-primary/40 pl-4 italic text-foreground/80"
            >
              {renderInline(b.text)}
            </blockquote>
          );
        return null;
      })}
    </div>
  );
}
