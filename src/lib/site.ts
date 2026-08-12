export const site = {
	name: "Friends of Lafayette-Pointer Park",
	shortName: "FOLP",
	tagline: "Nine acres of green space in Chevy Chase, DC.",
	url: "https://lafayettepointerpark.org",
	founded: 1999,
	parkAddress: "5900 33rd St NW, Washington, DC 20015",
	mailingAddress: {
		name: "Friends of Lafayette-Pointer Park",
		line1: "P.O. Box 6221",
		cityState: "Washington, DC 20015",
	},
	email: "info@lafayettepointerpark.org",
	instagram: "friendsofthefolp",
	// Modern PayPal donation URL — surfaces Venmo as a funding option on
	// mobile as well as desktop. The legacy cgi-bin/webscr hosted-button page
	// only offered PayPal + card on mobile web.
	donateUrl: "https://www.paypal.com/donate/?hosted_button_id=V29WBZMS97CBQ",
	// Dedicated PayPal Giving campaign for the bear-carving fundraiser.
	bearDonateUrl: "https://www.paypal.com/donate?campaign_id=VP8NXPFYLTQQL",
	bearCampaignId: "VP8NXPFYLTQQL",
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
