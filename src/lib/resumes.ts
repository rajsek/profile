// Unlisted /resumes page helpers (no nav link; indexable; whitelist of file names).

export const RESUMES_REPO = "rajsek/resumes";
export const RESUMES_BRANCH = "main";

export const VARIANTS = [
  "fullstack",
  "ui-heavy",
  "ai-fullstack",
  "ai-ui-heavy",
  "ai",
  "ai-security",
] as const;
export const GROUPS = ["1-page", "2-page"] as const;

export const VARIANT_LABELS: Record<string, string> = {
  fullstack: "Full-stack",
  "ui-heavy": "UI-heavy",
  "ai-fullstack": "AI + Full-stack",
  "ai-ui-heavy": "AI + UI-heavy",
  ai: "AI",
  "ai-security": "AI + Security",
};

// Whitelist: only these exact file names can ever be fetched.
export const ALLOWED_NAMES: string[] = GROUPS.flatMap((g) =>
  VARIANTS.map((v) => `${g}-${v}`)
);

export function isAllowedName(name: string): boolean {
  return ALLOWED_NAMES.includes(name);
}

export const PDF_HEADERS = {
  "Cache-Control": "public, max-age=300",
};
