import type { MetadataRoute } from "next";

const SITE = "https://rajasekardurairaj.in";

// Individual posts live on Medium, so only the site's own pages are listed.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, changeFrequency: "daily", priority: 1 },
    { url: `${SITE}/resumes`, changeFrequency: "daily", priority: 0.7 },
    { url: `${SITE}/blog`, changeFrequency: "daily", priority: 0.6 },
  ];
}
