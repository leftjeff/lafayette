# Stage audit: lafayette at GA (2026-11-09)

Task: STAGE-AUDIT-lafayette (bus #19072 from claude@ops). Jeff confirmed lafayette as
**ga** on 2026-11-09 ("live community site with real visitors"). This checks the repo against
the `ga` column of "Project stages set how much validation a change owes"
(`~/projects/ops/agent-rules-shared.md`).

Audited at base `4ebe252`. The cheap fixes are in the commit that adds this file.

## What existed before this audit

- CI (`.github/workflows/ci.yml`) ran **`pnpm lint` only**, on push to `main` and on PRs.
- Pre-commit hook: `biome check --staged`.
- **No tests, no typecheck step, no build step in CI, no gate script.**
- Deploys are CLI-only (`vercel.ts` disables git deploys on `main`). Nothing tied a deploy to a
  green gate.

## Gap table

| # | Item (ga column) | Status | Fix SHA or plan |
|---|---|---|---|
| 1 | A full gate exists and runs before every deploy | **Partly fixed.** `pnpm gate` = eslint + biome (new files) + `tsc --noEmit` + vitest + `next build`, about 21 s locally. CI now runs `pnpm gate` instead of lint only. **Still open:** nothing *forces* the gate before `vercel deploy`. | Fixed in this commit. Plan: a `deploy` script that refuses unless `pnpm gate` passed on a clean `HEAD` equal to `origin/main`, or a CI-green check (`gh run list --commit $(git rev-parse HEAD)`). Then point AGENTS.md "Working notes" at it. That is an authority-surface edit, so it needs a peer read. |
| 1b | Biome over `src` | **Gap.** `biome check src` reports ~66 pre-existing diagnostics: 24 format, 11 import order, 10 `noArrayIndexKey`, 7 `useImportType`, 6 a11y `noSvgWithoutTitle`, 6 parse (CSS). The gate checks biome on `tests/` only so it can be green today. | Plan: one formatting-only commit (`biome check --write src`), verified by `pnpm gate` plus a visual diff of the built pages. Then fix or suppress the a11y and index-key findings with reasons, and widen the gate to `src`. |
| 2 | Golden-path test per shipped feature; regression test per user-reported bug | **Partly fixed.** 33 vitest tests in `tests/` cover the server paths: newsletter API (valid, 4 invalid shapes, upstream 502), calendar `.ics` API (every upcoming event serves; past/unknown/missing 404), contact form action (send, 3 invalid fields, failure reported), signup action (send+redirect, 3 invalid fields), ICS/Google-calendar builders, and the event-data invariants (valid ISO dates, unique URL-safe slugs). **Still open:** no browser-level golden path for the pages (home, events, history, park, get-involved, donate links, archive). No user-reported bugs are on record, so no regression tests are owed yet. | Fixed in this commit (server paths). Plan: Playwright smoke against `next start`. Every route returns 200 and renders its h1. The newsletter, contact and signup forms submit with `@/lib/email` stubbed and show success. Add it to `pnpm gate`. |
| 3 | Independent read-only review before consequential releases | **Gap, process only.** No release has had one. Most changes are copy and event edits, which are not consequential under rule item 5. | Plan: name the triggers in AGENTS.md: changes to forms, email/Mailchimp wiring, donation links, `vercel.ts` redirects or env vars, and the first release after this gate lands. Those get a Codex read-only review recorded in `docs/reviews/`. Copy and event edits do not. Needs a peer read (AGENTS.md). |
| 4 | Rebaselines explained as review events | **N/A today.** There are no snapshots or golden files. The event-data tests assert invariants, not values. | None needed. If snapshot tests are added later, the rule applies. |
| 5 | Domain-edge tests for published numbers | **Fixed.** Published numbers: the bear-donor total ("Thank you to our N donors"), plus event dates rendered as calendar days and `.ics` ranges. Tests cover donor total = named + anonymous, no blank or duplicate names, and an integer anonymous count ≥ 0. Date edges covered: month end, year end, leap day, non-leap Feb 28, the DST-start date, and no-slug fallback. `annualGoal` ("200 pledges") and `donationAmounts` are static copy with no arithmetic. | Fixed in this commit. |
| 6 | Migrations keep real data; rollback proven | **Migrations N/A**: no database, and the content is file-driven. **Rollback unproven:** the rollback path is `vercel promote <previous deployment>` (alias swap, per `ops/runbooks/vercel-deploy-flow.md`). It has never been exercised on this project. | Plan: at the next production deploy, after verifying the new SHA, record the previous production deployment URL. Optionally rehearse `vercel promote` on it and back again. Note the times in `docs/reviews/`. Needs Jeff's deploy trigger. |
| 7 | Every deployable surface goes through the same release | **Gaps.** In the repo: the app, plus `vercel.ts` (the `.com`→`.org` redirect, git deploys off). Not in the repo, with no `--check`: (a) Vercel env var `MAILCHIMP_TRANSACTIONAL_API_KEY` is undeclared, and `email.ts` throws at send time if it is missing. (b) DNS for both domains is at GoDaddy, hand-edited, no API (see project memory). (c) Cloudflare Email Routing for `info@lafayettepointerpark.com`. (d) The `thefolp.org` legacy `.htaccess` 301 on HostMonster. (e) The Mailchimp list and the hosted form URL hard-coded in `email.ts`. | Plan: (a) add `docs/surfaces.md` declaring required env vars, plus a `scripts/check-env.ts` that diffs `vercel env ls production` against the declaration. Run it in the deploy script. (b)-(d) declare them in the same file with a read-only live check (`dig` for the DNS records, `curl -sI` for the redirects). The Cloudflare NS move (already recommended) would make DNS managed through `cf-dns.sh`. It is blocked on Stephanie's GoDaddy account, which is Jeff's call. (e) stays declared-only (third-party SaaS). |

## Other findings while auditing

- **The contact form shows raw upstream errors to visitors.** `submitContact` returns `e.message`.
  For a Mandrill failure that is `"Email send failed: <response body>"`, and a missing key gives
  `"MAILCHIMP_TRANSACTIONAL_API_KEY is not set"`. Both would appear on the public page. It is a
  small behaviour change, so it is not fixed in this audit commit. Plan: return a generic message,
  log the detail server-side, and add a regression test (the test harness is now in place).
  `submitSignup` has the same pattern.
- The ICS `UID` and `noreply@` sender still use the `.com` domain. That is harmless; the comment in
  `site.ts` explains the email part.
- `README.md` is the create-next-app stub. It is not a gate issue.

## Verification

`pnpm gate` on the audit commit: eslint clean, biome (tests) clean, `tsc --noEmit` clean,
vitest **33/33 passed**, `next build` succeeded (52 static pages). Wall clock was about 21 s.
vm-compute: a 21 s Next build plus tests, under the quick-check bar for a site this size; CI
reruns it on GitHub.

evidence: none — gate output above; no quality/visual claim.
