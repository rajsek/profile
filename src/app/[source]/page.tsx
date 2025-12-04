import type { Metadata } from "next";

// Reuse the home page UI for any top-level alias path like /linkedin, /resume, etc.
export { default } from "../page";

// Mark these alias paths as noindex for SEO hygiene.
// Does not affect the real homepage at "/".
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};
