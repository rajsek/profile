import { PDFDocument, StandardFonts, rgb, PDFFont, PDFPage } from "pdf-lib";
import { yearsOfExperience } from "@/data/resume";

// Serves the resume PDF from the private rajsek/resumes repo
// (pdf/2-page-fullstack.pdf) via the GitHub API, cached server-side for 10
// minutes. Needs a READ-ONLY fine-grained token in the RESUMES_GITHUB_TOKEN
// env var (Vercel project settings; never commit it). If the fetch fails for
// any reason (missing token, network, GitHub error), falls back to building
// the ATS PDF here with pdf-lib, so the download always works.
// X-Resume-Source response header says which path served: "github" or
// "fallback".
export const dynamic = "force-dynamic";

const yoe = yearsOfExperience;

const RESUME_REPO = "rajsek/resumes";
const RESUME_PATH = "pdf/2-page-fullstack.pdf";

async function fetchRepoPdf(): Promise<Uint8Array | null> {
  const token = process.env.RESUMES_GITHUB_TOKEN;
  if (!token) return null;
  try {
    const res = await fetch(
      `https://api.github.com/repos/${RESUME_REPO}/contents/${RESUME_PATH}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.raw",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: { revalidate: 600 }, // 10 min server-side cache
      }
    );
    if (!res.ok) {
      console.warn(`resume fetch failed: GitHub ${res.status}`);
      return null;
    }
    return new Uint8Array(await res.arrayBuffer());
  } catch (e) {
    console.warn("resume fetch failed:", e);
    return null;
  }
}

const CONTENT = {
  name: "Raja Sekar D",
  contact1: "Bengaluru, India  |  raji.sekard@gmail.com",
  contact2:
    "linkedin.com/in/rajsekdurai  |  github.com/rajsek  |  rajasekardurairaj.in  |  medium.com/@rajsek",
  summary: `Technical Lead with ${yoe}+ years of experience across frontend, backend and cloud, based in Bengaluru. I build full-stack products with React, Node.js and cloud, with a focus on performance, micro-frontends and developer tools. My current AI work uses TypeScript and LangChain to check bug reports against code across repositories. Outside work, I research security vulnerabilities and write about them on Medium. Twice listed in Meta's bug bounty Hall of Fame (2015 and 2022).`,
  skills:
    "React, Node.js, TypeScript, JavaScript, Java, Spring Boot, gRPC, GraphQL, Socket.IO, HTML5, CSS3, Webpack, Redux, Tailwind CSS, Angular, Web Components, Micro-frontends, ag-Grid, Next.js, PostgreSQL, Docker, Kubernetes, Jenkins, Git, Vercel, LangChain, LangGraph (learning), RAG and LLM evaluation (learning)",
  experience: [
    {
      title: "Technical Lead",
      org: "Oracle India Private Limited",
      meta: "Bengaluru, India  |  Jul 2021 - Present",
      bullets: [
        "Built reusable React.js UI components that met 100% of Oracle Redwood standards, adopted across CX teams.",
        "Integrated the React components into the Oracle JET framework using Preact-Compat for better performance.",
        "Extended the micro-frontend setup to include OJET modules next to React, so teams reuse components across both.",
        "Migrated apps from VMs to a cloud setup on Kubernetes.",
        "Built a LangChain agent app that speeds up triage of bug reports from the Anthropic Glass project. The agent checks each reported issue against the actual code across connected repos, filtering out duplicates and wrongly raised issues.",
        "Pushed AI adoption in the team: showed how to use AI to write Jira stories, create Figma designs and develop VBCS apps (in-house Oracle products).",
        "Created a Codex skill hooked into an internal tool to automate workflows; shared it across the team and it made day-to-day dev work faster.",
      ],
    },
    {
      title: "Tech Lead",
      org: "BNY Mellon Technology Pvt Ltd",
      meta: "Chennai, India  |  Oct 2017 - Jul 2021",
      bullets: [
        "Led development of an Orchestration portal handling 100k+ records.",
        "Improved app performance by 50% through code optimization, caching and cloud infrastructure work.",
        "Led the move to a containerized architecture with a CI/CD pipeline. Deployment time dropped 30% and release cycles got 25% shorter.",
        "Built a UI tool for CLI-based deployment with React and Tailwind CSS, removing manual errors from the process.",
      ],
    },
    {
      title: "Senior Software Developer",
      org: "KRDS",
      meta: "Chennai, India  |  Aug 2016 - Oct 2017",
      bullets: [
        "Built web apps and chatbots for brands like AXA and Thomas Cook for social media promotion.",
        "Helped build the AXA Employee Customer Engagement web app using the Facebook Business Manager API to create and manage 1000+ Facebook accounts for AXA employees, so AXA could monitor and post insurance updates straight from agent profiles.",
      ],
    },
    {
      title: "Software Engineer",
      org: "TCS",
      meta: "Chennai, India  |  Sep 2012 - Aug 2016",
      bullets: [
        "Worked as a developer on the Strategic Lead Management (SLR) and E-Statement applications.",
        "Helped build an internal proof of concept for video banking with WebRTC and sockets.",
      ],
    },
  ],
  projects: [
    {
      title: "PokerPeeker - PlanITPoker Vote Audit",
      org: "Chrome Extension",
      meta: "Personal project  |  Apr 2026",
      bullets: [
        "Chrome extension that audits PlanITPoker (planning poker) votes in a browser side panel. It spots vote conflicts in the room data, can mirror a chosen participant's vote, and exports the room's audit data as JSON. Published on the Chrome Web Store.",
      ],
    },
    {
      title: "VBCS Variable Inspector",
      org: "Chrome Extension",
      meta: "Personal project  |  Mar 2026",
      bullets: [
        "Chrome dev tool for debugging Oracle VBCS/OJET apps. It inspects runtime bindings and namespaces, and comes with a state manager, query, export/import and backup/restore of app state. Published on the Chrome Web Store.",
      ],
    },
    {
      title: "WebSocket Debugger + Security Workbench",
      org: "Chrome Extension",
      meta: "Personal project  |  2026",
      bullets: [
        "Chrome extension (TypeScript, MV3) for WebSocket work: a small React debugger with explicit target context, plus an authorized, host-bound Security Lab that exports redacted evidence. Published on the Chrome Web Store.",
      ],
    },
  ],
  research: [
    {
      title: "Marathon Photo Platform",
      org: "Responsible Disclosure",
      meta: "Sep 2026",
      bullets: [
        "Found an IDOR flaw in a race photography platform: one valid order ID plus a changed bib number returned another runner's high-resolution photos for free, and a valid order ID also exposed the buyer's email and payment status. Reported both the same day; the platform fixed them and confirmed the fix. Write-up on Medium.",
      ],
    },
    {
      title: "BNY Mellon",
      org: "Cyber Steward Award",
      meta: "Jun 2021",
      bullets: [
        "Found a serious security vulnerability in BNY's competition portal, built a proof of concept and reported it to the Security Head. BNY recognized it with their Cyber Steward award.",
      ],
    },
    {
      title: "Samsung India",
      org: "Security Acknowledgment",
      meta: "Jul 2017",
      bullets: [
        "Found a serious vulnerability in Samsung India's shopping portal that allowed booking high-value products at very low prices. Reported it voluntarily; Samsung acknowledged it with a reward (Samsung Gear 2 watch).",
      ],
    },
    {
      title: "Zerodha",
      org: "Security Acknowledgment",
      meta: "Feb 2016",
      bullets: [
        "Found a vulnerability in Zerodha's registration flow that bypassed the normal authentication checks and gave access to extra services without paying the registration fee. Reported it voluntarily; Zerodha's security team acknowledged it.",
      ],
    },
    {
      title: "TicketNew",
      org: "Responsible Disclosure",
      meta: "Sep 2015",
      bullets: [
        "Found a serious flaw in TicketNew's booking system that allowed booking an entire theater for the price of one ticket. Reported it voluntarily.",
      ],
    },
    {
      title: "Facebook (Meta)",
      org: "Responsible Disclosure Program",
      meta: "Sep 2015",
      bullets: [
        "Reported 6+ high-severity security issues through Facebook's Responsible Disclosure Program (IDOR and reverse engineering findings) and worked with their security team until each one was fixed. Received US$25,000 in total rewards. Write-ups on Medium.",
      ],
    },
  ],
  awards: [
    "Listed in Meta's bug bounty Hall of Fame twice (2015 and 2022) for responsibly disclosed security reports, US$25,000 total rewards.",
    "Top 10 in the BountyCon 2022 CTF (Singapore), earning a place at the live bug bounty event.",
    "BNY Mellon Cyber Steward award (2021) for a responsibly reported vulnerability.",
    "Samsung security acknowledgment and reward (2017) for a critical shopping-portal vulnerability.",
    "Zerodha security acknowledgment (2016) for a responsibly reported registration-flow vulnerability.",
  ],
  certifications: [
    "Professional Scrum Master I (PSM I), Scrum.org - Feb 2024.",
    "Oracle Cloud Infrastructure (OCI) Foundations Associate.",
  ],
  education: {
    title: "Bachelor of Technology, Information Technology",
    org: "Sri Sairam Engineering College",
    meta: "Chennai, India  |  2008 - 2012",
  },
};

type Entry = { title: string; org: string; meta: string; bullets?: string[] };

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 50;
const BODY = 10.5;
const LEADING = 13;

function wrap(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(candidate, size) <= maxWidth) {
      line = candidate;
    } else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

async function buildPdf(): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  doc.setTitle("Raja Sekar D - Resume");
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const regular = await doc.embedFont(StandardFonts.Helvetica);

  let page: PDFPage = doc.addPage([PAGE_W, PAGE_H]);
  let y = PAGE_H - MARGIN;
  const black = rgb(0, 0, 0);
  const gray = rgb(0.27, 0.27, 0.27);

  const newPage = () => {
    page = doc.addPage([PAGE_W, PAGE_H]);
    y = PAGE_H - MARGIN;
  };
  const need = (h: number) => {
    if (y - h < MARGIN) newPage();
  };
  const center = (text: string, font: PDFFont, size: number, gap: number) => {
    need(size + gap);
    const w = font.widthOfTextAtSize(text, size);
    page.drawText(text, { x: (PAGE_W - w) / 2, y: y - size, size, font, color: black });
    y -= size + gap;
  };
  const heading = (text: string) => {
    need(40);
    y -= 8;
    const upper = text.toUpperCase();
    page.drawText(upper, { x: MARGIN, y: y - 12, size: 12, font: bold, color: black });
    y -= 16;
    page.drawLine({
      start: { x: MARGIN, y },
      end: { x: PAGE_W - MARGIN, y },
      thickness: 0.8,
      color: gray,
    });
    y -= 6;
  };
  const para = (text: string, size = BODY, indent = 0, gap = 3) => {
    const lines = wrap(text, regular, size, PAGE_W - 2 * MARGIN - indent);
    for (const line of lines) {
      need(LEADING);
      page.drawText(line, { x: MARGIN + indent, y: y - size, size, font: regular, color: black });
      y -= LEADING;
    }
    y -= gap;
  };
  const bullet = (text: string) => {
    const marker = "\u2022 ";
    const indent = 14;
    const lines = wrap(text, regular, BODY, PAGE_W - 2 * MARGIN - indent);
    lines.forEach((line, i) => {
      need(LEADING);
      if (i === 0) {
        page.drawText(marker, { x: MARGIN + 2, y: y - BODY, size: BODY, font: regular, color: black });
      }
      page.drawText(line, { x: MARGIN + indent, y: y - BODY, size: BODY, font: regular, color: black });
      y -= LEADING;
    });
    y -= 1;
  };
  const entryHeader = (e: { title: string; org: string; meta: string }) => {
    need(2 * LEADING + 6);
    y -= 4;
    page.drawText(`${e.title}, ${e.org}`, { x: MARGIN, y: y - 11, size: 11, font: bold, color: black });
    const label = `  |  ${e.meta}`;
    const leftW = bold.widthOfTextAtSize(`${e.title}, ${e.org}`, 11);
    page.drawText(label, { x: MARGIN + leftW, y: y - 11, size: 11, font: regular, color: black });
    y -= LEADING + 2;
  };
  const entry = (e: Entry) => {
    entryHeader(e);
    for (const b of e.bullets ?? []) bullet(b);
  };

  center(CONTENT.name, bold, 20, 4);
  center(CONTENT.contact1, regular, 9.5, 2);
  center(CONTENT.contact2, regular, 9.5, 8);

  heading("Professional Summary");
  para(CONTENT.summary);

  heading("Skills");
  para(CONTENT.skills);

  heading("Work Experience");
  CONTENT.experience.forEach(entry);

  heading("Personal Projects");
  CONTENT.projects.forEach(entry);

  heading("Security Research");
  CONTENT.research.forEach(entry);

  heading("Awards");
  CONTENT.awards.forEach(bullet);

  heading("Certifications");
  CONTENT.certifications.forEach(bullet);

  heading("Education");
  entryHeader(CONTENT.education);

  return doc.save();
}

const pdfHeaders = (source: string) => ({
  "Content-Type": "application/pdf",
  "Content-Disposition": 'attachment; filename="Raja_Sekar_Resume.pdf"',
  "Cache-Control": "no-store",
  "X-Resume-Source": source,
});

export async function GET() {
  const repoBytes = await fetchRepoPdf();
  if (repoBytes) {
    return new Response(Buffer.from(repoBytes), {
      headers: pdfHeaders("github"),
    });
  }
  const bytes = await buildPdf();
  return new Response(Buffer.from(bytes), {
    headers: pdfHeaders("fallback"),
  });
}
