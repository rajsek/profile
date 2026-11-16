import type { Metadata } from "next";
import {
  GROUPS,
  VARIANTS,
  VARIANT_LABELS,
  isAllowedName,
} from "@/lib/resumes";

export const dynamic = "force-dynamic";

const PAGE_URL = "https://rajasekardurairaj.in/resumes";
const PAGE_TITLE = "Resumes";
const PAGE_DESC =
  "Resumes of Raja Sekar D, Technical Lead in Bengaluru: full-stack, UI, AI and security variants, 1-page and 2-page. Preview and download as PDF.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Raja Sekar D - Resumes",
    description: PAGE_DESC,
    url: PAGE_URL,
    type: "website",
  },
  twitter: { card: "summary", title: "Raja Sekar D - Resumes", description: PAGE_DESC },
};

export default function ResumesPage({
  searchParams,
}: {
  searchParams: { v?: string; e?: string };
}) {
  const selected = searchParams.v && isAllowedName(searchParams.v) ? searchParams.v : "2-page-fullstack";

  return (
    <main className="w-full space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Resumes</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Raja Sekar D, Technical Lead. Pick a version to preview, or download the PDF.
        </p>
      </div>
      <nav className="space-y-3 text-sm" aria-label="Resume versions">
        {GROUPS.map((g) => (
          <div key={g} className="flex flex-wrap items-center gap-2">
            <span className="w-16 font-medium">{g === "1-page" ? "1 page" : "2 pages"}</span>
            {VARIANTS.map((v) => {
              const name = `${g}-${v}`;
              const active = name === selected;
              return (
                <a
                  key={name}
                  href={`/resumes?v=${name}`}
                  aria-current={active ? "page" : undefined}
                  className={
                    "rounded-full border px-3 py-1 " +
                    (active ? "bg-foreground text-background" : "hover:bg-muted")
                  }
                >
                  {VARIANT_LABELS[v]}
                </a>
              );
            })}
          </div>
        ))}
      </nav>
      <section>
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium">
            {selected.startsWith("1-page") ? "1 page" : "2 pages"} - {VARIANT_LABELS[selected.replace(/^[12]-page-/, "")]}
          </span>
          <span className="flex gap-4">
            <a href={`/api/resumes/${selected}`} target="_blank" rel="noreferrer" className="underline">
              Open in new tab
            </a>
            <a href={`/api/resumes/${selected}?download=1`} className="underline">
              Download PDF
            </a>
          </span>
        </div>
        <iframe
          key={selected}
          src={`/api/resumes/${selected}`}
          title={`Resume ${selected}`}
          className="h-[80vh] w-full rounded-md border bg-white"
        />
      </section>
    </main>
  );
}
