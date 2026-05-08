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
      "Recent court upgrades funded in part by Friends of Lafayette-Pointer Park keep the courts smooth and well-lined for casual play and pickup matches.",
  },
  {
    slug: "ball-fields",
    name: "Ball Fields",
    blurb: "Open diamonds and turf for baseball, softball, and pickup games.",
    details:
      "Used by little league teams in season and by the neighborhood for casual play. Backstops and benches were added through volunteer fundraising.",
  },
  {
    slug: "gardens",
    name: "Gardens & Gathering Spaces",
    blurb: "Pollinator beds, an amphitheater, a gazebo, and shaded picnic areas.",
    details:
      "FOLP volunteers plant, weed, and mulch the perennial beds. The amphitheater and gazebo host concerts, weddings, and neighborhood meet-ups.",
  },
];

export type EventItem = {
  date: string;
  title: string;
  description: string;
  type: "volunteer" | "community" | "fundraiser";
};

export const upcomingEvents: EventItem[] = [
  {
    date: "2026-05-16",
    title: "Spring Cleanup Day",
    description:
      "Help us rake, weed, mulch, and prune. Tools and gloves provided — bring water and sunscreen. Coffee and pastries at the gazebo from 9am.",
    type: "volunteer",
  },
  {
    date: "2026-06-21",
    title: "Summer Solstice Concert",
    description:
      "Live music at the amphitheater. Bring a blanket and a picnic. Free and open to all neighbors.",
    type: "community",
  },
  {
    date: "2026-09-12",
    title: "Annual Fund Drive Kickoff",
    description:
      "Meet the board, learn what's planned for the year, and renew your membership. Light refreshments at the recreation center.",
    type: "fundraiser",
  },
  {
    date: "2026-10-25",
    title: "Fall Cleanup & Bulb Planting",
    description:
      "Plant tulip and daffodil bulbs in the perennial beds, rake leaves, and prep the gardens for winter.",
    type: "volunteer",
  },
];

export const accomplishments = [
  "Funded the resurfacing of the tennis courts",
  "Built and maintain the perennial gardens and pollinator beds",
  "Installed benches, picnic tables, and the gazebo",
  "Added the amphitheater for concerts and gatherings",
  "Advocated for and helped open the new recreation center (2021)",
  "Renamed the park to honor the Pointer family (2020)",
  "Run spring and fall cleanup days every year since 1999",
];

export const boardSpotlight = {
  message:
    "We are recruiting new board members. If you love the park and want to help shape its next chapter, please reach out.",
};
