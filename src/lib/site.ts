export const site = {
  name: "Friends of Lafayette-Pointer Park",
  shortName: "FOLP",
  tagline: "Nine acres of green space in Chevy Chase, DC.",
  url: "https://lafayettepointerpark.com",
  founded: 1999,
  parkAddress: "5900 33rd St NW, Washington, DC 20015",
  mailingAddress: {
    name: "Friends of Lafayette-Pointer Park, Treasurer",
    line1: "P.O. Box 6221",
    cityState: "Washington, DC 20015",
  },
  email: "info@lafayettepointerpark.com",
  instagram: "friendsofthefolp",
  donateUrl:
    "https://www.paypal.com/donate?token=fhoyI9tiAH-uutbXz3KbqfCQnGlP9NeTNXPAdvr2YbZwzdqtIeL2kEwUNvLX7CEbXtCWoscNkZzz2HID",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/park", label: "The Park" },
    { href: "/events", label: "Events" },
    { href: "/history", label: "History" },
    { href: "/get-involved", label: "How you can help" },
    { href: "/contact", label: "Contact Us" },
  ],
} as const;
