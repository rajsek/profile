import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/data/blog";

const SITE = "https://rajasekardurairaj.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts().catch(() => []);
  return [
    { url: `${SITE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/resumes`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE}/blog`, changeFrequency: "monthly", priority: 0.5 },
    ...posts
      .filter((p: { slug: string }) => p.slug !== "hello-world") // placeholder post
      .map((p: { slug: string }) => ({
      url: `${SITE}/blog/${p.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
