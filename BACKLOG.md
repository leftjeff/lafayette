# FOLP site backlog

Open work items and suggested improvements. Items from the 2026-05-18
board requirements doc are marked with their phase number.

## From the 2026-05-18 requirements (remaining)

- **Nature page species lists (Phase 6).** `/park/nature` has placeholder
  species lists (native plants, pollinators, birds). Replace with the
  board's curated lists when available — drop them into
  `src/app/park/nature/page.tsx`'s `sections` array.

- **Venmo QR code (Phase 4, deferred).** Add FOLP's Venmo QR image to
  donation widgets on the home and get-involved pages once the handle
  is confirmed.

- **Pointer historical text.** Eminent domain / African-American
  landowners 1830-1928 section — pending Stephanie/Dennis review per
  the requirements doc. Hold until they sign off.

- **Social media links (IG / FB).** Listed as "not yet provided" in the
  requirements doc — add to footer and contact page when handles exist.

## Previously captured

- **Recover legacy WP content.** 26 page-referenced images and ~30 PDFs
  (board minutes 2013-2019, `FOLP-BY-LAWS.pdf`, awards certificates,
  Phase II walkway plan) still on the live WordPress host, blocked by
  hotlink-prevention. Get an SFTP backup of `wp-content/uploads/` or
  disable hotlink protection and re-scrape. **Time-sensitive** — once
  the WP install goes away, unrecovered content is lost.

- **Pass donation amount to PayPal.** The `$25/$50/$100` radio on the
  donation widget is cosmetic — hosted-button URLs ignore the posted
  amount. Switch to PayPal Donate's `business=` URL with `amount=`, or
  move to Stripe Checkout / Donorbox / Givebutter.
  - Files: `src/app/page.tsx` (DonationForm), `src/lib/site.ts` (donateUrl).

- **Replace board placeholders with real names/bios.** All six cards on
  `/about` show "Add a name" with "AN" initials.
  - Files: `src/lib/content.ts` (boardMembers), `src/app/about/page.tsx`.

- **Add a location/map.** Embed a small map or static image + directions
  link on `/park` and `/contact`.

- **"Add to calendar" / .ics on events.** One-click `.ics` download or
  Google Calendar link per event.
  - File: `src/app/events/page.tsx`.

- **Park diagram with facilities.** Labeled SVG map of the 9 acres on
  `/park`.

- **501(c)(3) trust signals.** EIN, link to most recent 990, and
  "tax-deductible" line.

- **Press / coverage strip.** Section for neighborhood media mentions.

## Completed (2026-05-18 requirements)

- Phase 1: content edits (mission, about hero, park cards, partners, pledges)
- Phase 2: layout cleanups (circles removed, mailed-donation callout removed)
- Phase 3: bear-carving fundraiser (featured project + thermometer + event)
- Phase 4: donation overhaul (PayPal/Venmo/CC wording, new donate link)
- Phase 5: news signup flow (/signup page, footer + contact buttons, Resend notifications)
- Phase 6: Nature in the Park page (placeholder species lists)
- Phase 7: contact + email infra (Cloudflare Email Routing, Resend contact form delivery)
