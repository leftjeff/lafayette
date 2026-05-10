# FOLP site backlog

Suggested improvements, captured 2026-05-10. Not prioritized beyond the
groupings below — pick what's worth doing when there's time.

## High-impact / low-effort

- **Recover the rest of the legacy WP content before the cutover.** 26
  page-referenced images and ~30 PDFs (board minutes 2013-2019,
  `FOLP-BY-LAWS.pdf`, awards certificates, the Phase II walkway plan
  `Lafayette_road.pdf`) are still on the live WordPress host but blocked
  by its hotlink-prevention rule. Wayback is tapped out. Easiest path:
  log into `thefolp.org/wp-admin` or the hosting panel, disable hotlink
  protection (Wordfence / All In One WP Security / cPanel /
  `.htaccess`), then re-run the scrape; alternatively, get an SFTP
  backup of `wp-content/uploads/`. **Time-sensitive** — once the new
  site cuts over to thefolp.org, the live WP install goes away with
  it, and everything that's not already in this repo is lost. Test URL
  to confirm hotlink is off:
  `https://thefolp.org/wp-content/uploads/2018/06/Lafayette-Park-Stormwater-Assessment-3-22-18.pdf`
  should download (it's currently 403). Renderer in
  `src/components/markdown.tsx` already auto-detects local images, so
  dropped files just appear.

- **Wire up the newsletter and contact forms.** Both currently submit
  nowhere; the contact button is `disabled` with "coming soon". Options:
  Resend / Buttondown / Mailchimp, or a Server Action that emails
  `info@thefolp.org`.
  - Files: `src/app/page.tsx` (ContactSignup), `src/app/contact/page.tsx`.

- **Pass the donation amount to PayPal.** Hosted-button URLs ignore the
  form-posted `amount` radio, so `$25/$50/$100` is cosmetic today. Switch
  to PayPal Donate's `business=` URL with `amount=`, or move to Stripe
  Checkout / Donorbox / Givebutter (also unlocks recurring gifts).
  - Files: `src/app/page.tsx` (DonationForm), `src/lib/site.ts` (donateUrl).

- **Replace board placeholders with real names/bios.** All six cards on
  `/about` show "Add a name" with "AN" initials. Either populate or hide
  the section until ready.
  - Files: `src/lib/content.ts` (boardMembers), `src/app/about/page.tsx`.

- **Decide what the pledge thermometer represents.** "137 / 200 neighbors
  pledged" needs to be real and maintained, or swap for a generic
  "join your neighbors" CTA without the counter.
  - Files: `src/lib/content.ts` (annualGoal), `src/app/page.tsx` (Thermometer).

## Medium-impact

- **Add a location/map.** Embed a small map (or static image + directions
  link) on `/park` and `/contact` so first-time visitors can find the
  entrance, parking, and the gazebo.

- **"Add to calendar" / .ics on events.** One-click `.ics` download or
  Google Calendar link per event — biggest lift for cleanup-day turnout.
  - File: `src/app/events/page.tsx`.

- **Park diagram with facilities placed.** Extend the existing vignette
  components into a labeled SVG map of the 9 acres (rec center,
  playgrounds, Water Daisy, courts, gardens) on `/park`.
  - Files: `src/app/park/page.tsx`, `src/components/park-vignette.tsx`,
    `src/components/park-illustration.tsx`.

## Lower-impact / nice-to-have

- **501(c)(3) trust signals.** EIN, link to most recent 990 (or a
  one-page annual summary), and "tax-deductible — letter on request" line.
  Helps larger donors.

- **Press / coverage strip.** Small section for Northwest Current /
  DCist / neighborhood blog mentions, if any exist.

- **Verify analytics are mounted.** Per the standard stack,
  `@vercel/analytics` and `@vercel/speed-insights` should be in the root
  layout.
  - File: `src/app/layout.tsx`.

- **Custom OG image.** Confirm there's a 1200×630 social-share image so
  links posted in neighborhood Slacks / Facebook don't look generic.
