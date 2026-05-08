export const site = {
  name: "Friends of Lafayette-Pointer Park",
  shortName: "FOLP",
  tagline: "Nine acres of green space in Chevy Chase, DC.",
  founded: 1999,
  parkAddress: "5900 33rd St NW, Washington, DC 20015",
  mailingAddress: {
    name: "Friends of Lafayette-Pointer Park, Treasurer",
    line1: "P.O. Box 6221",
    cityState: "Washington, DC 20015",
  },
  email: "info@thefolp.org",
  donateUrl: "https://www.paypal.com/donate?hosted_button_id=FOLP",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/park", label: "The Park" },
    { href: "/events", label: "Events" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/contact", label: "Contact" },
  ],
} as const;
