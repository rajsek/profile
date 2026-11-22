/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The old placeholder post is gone; send any old link to the blog list.
  async redirects() {
    return [{ source: "/blog/:slug", destination: "/blog", permanent: true }];
  },
  experimental: {
    // /api/resume reads resume-fallback.pdf from disk as its fallback;
    // include it in the serverless function bundle on Vercel.
    outputFileTracingIncludes: {
      "/api/resume": ["./resume-fallback.pdf"],
    },
  },
};

export default nextConfig;
