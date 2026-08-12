<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# About this project

This is the website for the **Friends of Lafayette-Pointer Park (FOLP)** — the
volunteer group supporting Lafayette-Pointer Park in Chevy Chase, Washington DC.
The site tells the park's story and history, lists events, and drives donations
and volunteer sign-ups.

- **Live site:** https://lafayettepointerpark.org (the `.com` redirects to
  `.org`). Hosted on Vercel (project `lafayette`). **Changes you push and deploy
  go live to the real public site immediately** — be accurate, and prefer small,
  reviewable changes.
- **Repo name is `park`** (package name), directory `~/projects/lafayette`,
  GitHub `leftjeff/lafayette`. Don't be thrown by the three names — same thing.

## Stack

- Next.js (App Router) + TypeScript, Tailwind + shadcn/ui. **Light stack: no
  database, no auth/Clerk.** Content is static/file-driven, not stored in a DB.
- Deployed on Vercel; `vercel.ts` holds the config (incl. the `.com`→`.org`
  host redirect).

## Where things live

- **Pages / routes** — `src/app/<route>/page.tsx`. Current routes: `/` (home),
  `/about`, `/park`, `/history`, `/events`, `/get-involved`, `/signup`,
  `/archive`, `/contact`. Shared layout in `src/app/layout.tsx`.
- **Reusable UI** — `src/components/`.
- **Page copy / structured content** — much of it is data arrays inside the
  route's `page.tsx` (e.g. `/park/nature`'s `sections`), loaded via
  `src/lib/content.ts`.
- **Imported legacy content** — `content/legacy/{pages,md}` holds the old
  WordPress site's pages/markdown, kept for reference and migration.
- **Work backlog** — `BACKLOG.md` is the open punch list (board requirements by
  phase). Check it before proposing new work; some items are explicitly on hold
  pending board/Stephanie/Dennis review.

## Working notes

- After a change: commit the specific files with a clear message and push;
  commit + push **before** any `vercel deploy` so git always matches prod. Don't
  commit stray screenshots/artifacts.
- Common asks are content edits — event listings, donation widgets (a Venmo QR
  is a pending backlog item), history/nature text, contact info. These are
  usually `page.tsx` data edits, not new infrastructure.
