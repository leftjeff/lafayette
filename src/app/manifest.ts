import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Friends of Lafayette-Pointer Park",
    short_name: "FOLP",
    description:
      "A volunteer-led nonprofit caring for Lafayette-Pointer Park, nine acres of green space in Chevy Chase, Washington DC.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f1e8",
    theme_color: "#2d5e3e",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
