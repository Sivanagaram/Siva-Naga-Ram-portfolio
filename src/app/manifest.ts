import type { MetadataRoute } from "next";
import { SITE } from "@/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Portfolio`,
    short_name: SITE.name,
    description: `${SITE.role} ${SITE.tagline.toLowerCase()}.`,
    start_url: "/",
    display: "standalone",
    background_color: "#05060a",
    theme_color: "#05060a",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
