// Reads the public Medium RSS feed of the owner. Server-side only, no API key.
// Medium's RSS feed returns only the latest ~10 stories.

export const MEDIUM_PROFILE = "https://medium.com/@rajsek";
const FEED_URL = "https://medium.com/feed/@rajsek";

export type MediumPost = {
  title: string;
  url: string;
  date: string; // ISO
  excerpt: string;
  tags: string[];
  image?: string; // cover image URL (Medium CDN)
};

import archive from "@/data/medium-posts.json";

// Last good result, kept in memory so a failed refresh does not blank the page.
let lastGood: MediumPost[] = [];

function decode(input: string): string {
  // Medium sometimes double-encodes (e.g. &amp;apos;), so decode twice.
  return decodeOnce(decodeOnce(input));
}

function decodeOnce(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&rsquo;|&lsquo;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function cdata(block: string, tag: string): string | null {
  const m = block.match(new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`));
  return m ? m[1].trim() : null;
}

function textOf(html: string): string {
  return decode(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function excerptFrom(html: string): string {
  // Prefer the subtitle (first h4), else the first paragraph with real text.
  const h4 = html.match(/<h4[^>]*>([\s\S]*?)<\/h4>/);
  let text = h4 ? textOf(h4[1]) : "";
  if (!text) {
    for (const p of Array.from(html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g))) {
      const t = textOf(p[1]);
      if (t.length > 40) {
        text = t;
        break;
      }
    }
  }
  return text.length > 220 ? text.slice(0, 217).replace(/\s+\S*$/, "") + "..." : text;
}

function firstImage(html: string): string | undefined {
  const m = html.match(/<img[^>]+src="(https:\/\/[^"]+)"/);
  return m ? decode(m[1]) : undefined;
}

export function parseFeed(xml: string): MediumPost[] {
  const items = xml.split("<item>").slice(1);
  const posts: MediumPost[] = [];
  for (const raw of items) {
    const block = raw.split("</item>")[0];
    const title = cdata(block, "title");
    const link = cdata(block, "link");
    const pub = cdata(block, "pubDate");
    if (!title || !link || !pub) continue;
    const url = link.split("?")[0];
    // Posts in Medium publications can live on custom domains; require https only.
    if (!/^https:\/\//.test(url)) continue;
    const d = new Date(pub);
    if (isNaN(d.getTime())) continue;
    const content = cdata(block, "content:encoded") ?? "";
    const desc = cdata(block, "description") ?? "";
    const snippet = desc.match(/<p class="medium-feed-snippet">([\s\S]*?)<\/p>/);
    const tags = Array.from(block.matchAll(/<category>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/category>/g))
      .map((m) => m[1].trim())
      .slice(0, 3);
    posts.push({ title: decode(title), url, date: d.toISOString(), excerpt: content ? excerptFrom(content) : snippet ? textOf(snippet[1]) : "", tags, image: firstImage(content) ?? firstImage(desc) });
  }
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

function keyOf(url: string) {
  return url.split("?")[0].replace(/\/$/, "");
}

// Live RSS (latest ~10) wins; older posts come from the committed archive.
export function mergePosts(live: MediumPost[], saved: MediumPost[]): MediumPost[] {
  const map = new Map<string, MediumPost>();
  for (const p of saved) map.set(keyOf(p.url), p);
  for (const p of live) map.set(keyOf(p.url), { ...map.get(keyOf(p.url)), ...p });
  return Array.from(map.values()).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getMediumPosts(): Promise<{ posts: MediumPost[]; stale: boolean }> {
  try {
    const res = await fetch(FEED_URL, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; portfolio-blog/1.0)" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`Medium feed ${res.status}`);
    const posts = parseFeed(await res.text());
    if (posts.length === 0) throw new Error("Medium feed had no posts");
    const merged = mergePosts(posts, archive as MediumPost[]);
    lastGood = merged;
    return { posts: merged, stale: false };
  } catch (e) {
    console.warn("medium feed failed:", e);
    return { posts: lastGood.length ? lastGood : mergePosts([], archive as MediumPost[]), stale: true };
  }
}
