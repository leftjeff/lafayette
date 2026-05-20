export type Facility = {
  slug: string;
  name: string;
  blurb: string;
  details: string;
};

export const facilities: Facility[] = [
  {
    slug: "recreation-center",
    name: "Lafayette-Pointer Recreation Center",
    blurb:
      "A new community building with after-school programming, classes, and gathering space.",
    details:
      "Opened in 2021 by Mayor Muriel Bowser, the recreation center anchors the park and is home to programs run by DC Parks and Recreation, including after-school care, fitness classes, and seasonal events.",
  },
  {
    slug: "playgrounds",
    name: "Playgrounds",
    blurb: "Two play areas designed for younger children and bigger kids.",
    details:
      "Shaded play structures, swings, and climbing equipment serve neighborhood families year-round. Volunteer crews keep mulch fresh and benches in good repair.",
  },
  {
    slug: "water-daisy",
    name: "Water Daisy",
    blurb: "A summertime sprayground that blooms from Memorial Day to Labor Day.",
    details:
      "The Water Daisy turns on each summer and is one of the park's most-loved features for cooling off on hot DC afternoons.",
  },
  {
    slug: "tennis",
    name: "Tennis Courts",
    blurb: "Newly resurfaced courts open to the public, first-come first-served.",
    details:
      "Recent court upgrades keep the courts smooth and well-lined for casual play and pickup matches.",
  },
  {
    slug: "basketball",
    name: "Basketball Court",
    blurb: "An open court for pickup games and after-school play.",
    details:
      "The basketball court is a regular gathering spot for neighborhood kids and weekend pickup games.",
  },
  {
    slug: "green-spaces",
    name: "Green Spaces",
    blurb: "Open lawns and shaded corners for picnics, frisbee, and quiet afternoons.",
    details:
      "Wide stretches of grass and mature trees give the park room to breathe. These public spaces are widely used for after-school play, family picnics, and the occasional stroller meet-up.",
  },
  {
    slug: "gardens",
    name: "Gardens & Gathering Spaces",
    blurb: "Pollinator beds, a gazebo, and shaded picnic areas.",
    details:
      "FOLP volunteers plant, weed, and mulch the perennial beds. The gazebo and surrounding picnic areas host parties, classes, and neighborhood meet-ups.",
  },
];

export type EventItem = {
  date: string;
  title: string;
  description: string;
  type: "volunteer" | "community" | "fundraiser";
  status: "past" | "upcoming";
  dateLabel?: string;
};

export const upcomingEvents: EventItem[] = [
  {
    date: "2026-04-18",
    title: "Spring Cleanup Day",
    description:
      "80–90 neighbors turned out to rake, weed, mulch, and prune across the park. Thank you to everyone who came — the gardens are in great shape heading into summer.",
    type: "volunteer",
    status: "past",
  },
  {
    date: "2026-09-30",
    title: "Annual Fund Drive Kickoff",
    description:
      "Fall kickoff for our annual fund. Meet the board, hear what's planned for the year, and renew your membership. Date TBD — check back closer to fall.",
    type: "fundraiser",
    status: "upcoming",
    dateLabel: "Fall — date TBD",
  },
  {
    date: "2026-10-31",
    title: "Fall Cleanup & Bulb Planting",
    description:
      "Plant tulip and daffodil bulbs in the perennial beds, rake leaves, and prep the gardens for winter. Date TBD — we'll announce once the weather forecast firms up.",
    type: "volunteer",
    status: "upcoming",
    dateLabel: "Fall — date TBD",
  },
];

export const accomplishments = [
  "Funded the resurfacing of the tennis courts",
  "Built and maintain the perennial gardens and pollinator beds",
  "Installed benches, picnic tables, and the gazebo",
  "Advocated for and helped open the new recreation center (2021)",
  "Renamed the park to honor the Pointer family (2020)",
  "Run spring and fall cleanup days every year since 1999",
];

export const donationAmounts = [25, 50, 100, 250, 500] as const;

export const featuredCampaign = {
  title: "Support the grounds and gardens",
  body: [
    "Friends of Lafayette-Pointer Park supports the ongoing care of the perennial beds and pollinator gardens, and picnic areas where neighbors gather. As an official park partner, FOLP works alongside DC Parks and Recreation. Over the past decade we have added benches and picnic tables, planted hundreds of gardens including native plants and Spring bulbs, and supported community cleanups and gatherings.",
    "We continue to raise money for an expanded planting program, bench replacements, and the steady work of caring for the park. Please support the effort and make a contribution today.",
  ],
};

export const annualGoal = {
  eyebrow: "Help us hit our annual goal",
  title: "Make your annual pledge today.",
  description:
    "Help us reach our goal of 200 pledges this year. Membership gifts fund the planting calendar, the supplies, and the small-scale projects that keep the park feeling like the neighborhood's.",
};

export type BoardMember = {
  name: string;
  role?: string;
};

export const boardMembers: BoardMember[] = [
  { name: "Tracy Bowen", role: "Chair" },
  { name: "Catherine Barnes-Domotor" },
  { name: "Stephanie Cappa" },
  { name: "Anna Knutzen" },
  { name: "Patty Myler" },
  { name: "Nancy Slade" },
  { name: "Dennis Smyth" },
];

export type Sponsor = {
  name: string;
  short: string;
  monogram: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "DC Department of Parks and Recreation",
    short: "DC Parks & Rec",
    monogram: "DC",
  },
  {
    name: "Advisory Neighborhood Commission 3/4G",
    short: "ANC 3/4G",
    monogram: "ANC",
  },
  {
    name: "Lafayette Home School Association",
    short: "Lafayette HSA",
    monogram: "HSA",
  },
  {
    name: "Ward 4 Council Office",
    short: "Ward 4 Council",
    monogram: "W4",
  },
  {
    name: "Lafayette Tennis Association",
    short: "Lafayette Tennis",
    monogram: "LTA",
  },
];
