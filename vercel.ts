import { matchers, type VercelConfig } from "@vercel/config/v1";

export const config: VercelConfig = {
	git: {
		deploymentEnabled: {
			main: false,
		},
	},
	redirects: [
		{
			source: "/:path(.*)",
			has: [matchers.host("lafayettepointerpark.com")],
			destination: "https://lafayettepointerpark.org/:path",
			permanent: true,
		},
		{
			source: "/:path(.*)",
			has: [matchers.host("www.lafayettepointerpark.com")],
			destination: "https://lafayettepointerpark.org/:path",
			permanent: true,
		},
	],
};
