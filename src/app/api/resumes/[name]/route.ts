import { NextRequest, NextResponse } from "next/server";
import {
  RESUMES_BRANCH,
  RESUMES_REPO,
  isAllowedName,
  PDF_HEADERS,
} from "@/lib/resumes";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Serves one resume PDF from the public rajsek/resumes repo (main), cached
// server-side for 10 minutes. Only whitelisted names.
export async function GET(
  req: NextRequest,
  { params }: { params: { name: string } }
) {
  const name = params.name.replace(/\.pdf$/i, "");
  if (!isAllowedName(name)) {
    return new NextResponse("Not found", { status: 404, headers: PDF_HEADERS });
  }

  const url = `https://raw.githubusercontent.com/${RESUMES_REPO}/${RESUMES_BRANCH}/pdf/${name}.pdf`;
  let upstream: Response;
  try {
    upstream = await fetch(url, { next: { revalidate: 600 } });
  } catch {
    return new NextResponse("Could not reach GitHub", { status: 502, headers: PDF_HEADERS });
  }
  if (!upstream.ok) {
    return new NextResponse("Resume not available", { status: 502, headers: PDF_HEADERS });
  }

  const download = req.nextUrl.searchParams.get("download") === "1";
  return new NextResponse(await upstream.arrayBuffer(), {
    status: 200,
    headers: {
      ...PDF_HEADERS,
      "Content-Type": "application/pdf",
      "Content-Disposition": `${download ? "attachment" : "inline"}; filename="Raja-Sekar-D-${name}.pdf"`,
    },
  });
}
