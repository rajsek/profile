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
          I write on Medium. New posts show up here automatically.
        </p>
      </BlurFade>

      {posts.length === 0 ? (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="mb-6 text-sm text-muted-foreground">
            The latest posts could not be loaded right now. You can read everything on Medium.
          </p>
        </BlurFade>
      ) : (
        <ul className="mb-8 grid gap-5 sm:grid-cols-2">
          {posts.map((post, id) => (
            <li key={post.url}>
              <BlurFade delay={BLUR_FADE_DELAY * 2 + Math.min(id, 8) * 0.04}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-lg border bg-card transition-colors hover:bg-muted/50"
                >
                  {post.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.image}
                      alt=""
                      loading={id < 2 ? "eager" : "lazy"}
                      referrerPolicy="no-referrer"
                      className="aspect-[16/9] w-full object-cover"
                    />
                  ) : (
                    <div className="aspect-[16/9] w-full bg-muted" aria-hidden="true" />
                  )}
                  <div className="flex flex-1 flex-col gap-1 p-4">
                    <p className="text-xs text-muted-foreground">{formatDate(post.date)}</p>
                    <h2 className="font-medium leading-snug tracking-tight">{post.title}</h2>
                    {post.excerpt ? (
                      <p className="line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
                    ) : null}
                    <span className="mt-auto pt-2 text-sm underline-offset-2 group-hover:underline">
                      Read on Medium
                    </span>
                  </div>
                </a>
              </BlurFade>
            </li>
          ))}
        </ul>
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
