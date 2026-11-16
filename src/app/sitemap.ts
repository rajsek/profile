import type { MetadataRoute } from "next";

const SITE = "https://rajasekardurairaj.in";

// Blog posts live on Medium, so only the home page and /resumes are listed.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/resumes`, changeFrequency: "weekly", priority: 0.7 },
  ];
}
