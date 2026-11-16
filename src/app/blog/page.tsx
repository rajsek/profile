import BlurFade from "@/components/magicui/blur-fade";
import { MEDIUM_PROFILE, getMediumPosts } from "@/lib/medium";
import type { Metadata } from "next";

// Re-fetch the Medium feed at most once an hour.
export const revalidate = 3600;

const DESC =
  "Writing by Raja Sekar D on Medium: security research, Node.js, Jenkins, Chrome extensions and AI-assisted engineering.";

export const metadata: Metadata = {
  title: "Blog",
  description: DESC,
  alternates: { canonical: "https://rajasekardurairaj.in/blog" },
  openGraph: {
    title: "Raja Sekar D - Blog",
    description: DESC,
    url: "https://rajasekardurairaj.in/blog",
    type: "website",
  },
};

const BLUR_FADE_DELAY = 0.04;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPage() {
  const { posts } = await getMediumPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-2 tracking-tighter">blog</h1>
        <p className="mb-8 text-sm text-muted-foreground">
          I write on Medium. Latest posts are listed here automatically.
        </p>
      </BlurFade>

      {posts.length === 0 ? (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="mb-6 text-sm text-muted-foreground">
            The latest posts could not be loaded right now. You can read everything on Medium.
          </p>
        </BlurFade>
      ) : (
        posts.map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.url}>
            <a
              className="flex flex-col space-y-1 mb-6"
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="tracking-tight font-medium">{post.title}</p>
              <p className="text-xs text-muted-foreground">{formatDate(post.date)}</p>
              {post.excerpt ? (
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              ) : null}
            </a>
          </BlurFade>
        ))
      )}

      <BlurFade delay={BLUR_FADE_DELAY * 3 + posts.length * 0.05}>
        <a
          href={MEDIUM_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border px-4 py-2 text-sm hover:bg-muted"
        >
          More on Medium
        </a>
      </BlurFade>
    </section>
  );
}
