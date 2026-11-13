import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

// Years of experience computed from the career start (TCS, Sep 2012) so the
// number never goes stale. Rendered as "14+" in the intro.
const CAREER_START_YEAR = 2012;
const CAREER_START_MONTH = 8; // September, 0-based
export const yearsOfExperience = (() => {
  const now = new Date();
  let years = now.getFullYear() - CAREER_START_YEAR;
  if (now.getMonth() < CAREER_START_MONTH) years -= 1;
  return years;
})();

export const DATA = {
  name: "Raja Sekar",
  initials: "Durairaj",
  url: "https://medium.com/@rajsek/",
  location: "Bengaluru, IN",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    `Technical Lead at Oracle. I build full-stack products and AI agents. ${yearsOfExperience}+ years in engineering. Twice listed in Meta's security Hall of Fame.`,
  summary:
    "Based in **Bengaluru**, I work across **React, Node.js and cloud**, with a focus on performance, micro-frontends and developer tools. My current AI work uses **TypeScript and LangChain** to check bug reports against code across repositories. I'm also learning **LangGraph, RAG and LLM evaluation**. Outside work, I research security vulnerabilities and share what I learn on [Medium](https://medium.com/@rajsek).",
  avatarUrl: "/raja-2.jpg",
  skills: [
    "React",
    "Node.js",
    "TypeScript",
    "Springboot",
    "gRPC",
    "GraphQL",
    "Socket.IO",
    "HTML5",
    "CSS3",
    "Webpack",
    "Redux",
    "Tailwind CSS",
    "Angular",
    "Web Components",
    "Micro-frontends",
    "ag-Grid",
    "Jenkins",
    "git",
    "Docker",
    "Kubernetes",
    "Java",
    "Next.js",
    "PostgreSQL",
    "Vercel",
    "LangChain",
    "LangGraph (learning)",
    "RAG & LLM evals (learning)",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://medium.com/@rajsek/", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rajisekar.d@gmail.com",
    tel: "+919790889185",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rajsek/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rajsekdurai/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Medium: {
        name: "Medium blog",
        url: "https://medium.com/@rajsek/",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "rajisekar.d@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Oracle India Private Limited",
      badges: [],
      href: "https://www.oracle.com/in/",
      location: "Bengaluru, IN",
      title: "Technical Lead",
      logoUrl: "/oracle.png",
      start: "Jul 2021",
      end: "Present",
      description:
        "Built reusable React.js UI components that met 100% of Oracle Redwood standards and were adopted across CX teams• Integrated the React components into the Oracle JET framework using Preact-Compat for better performance• Extended the micro-frontend setup to include OJET modules next to React, so teams reuse components across both• Migrated apps from VMs to a cloud setup on Kubernetes• Built a LangChain agent app that speeds up triage of bug reports from the Anthropic Glass project. The agent checks each reported issue against the actual code across connected repos, so duplicates and wrongly raised issues get filtered out. One example: it rejects requests to add validation in the DAL layer when that case is already handled one level above DAL• Pushed AI adoption in the team: showed how to use AI to write Jira stories, create Figma designs and develop VBCS apps (in-house Oracle products)• Created a Codex skill hooked into an internal tool to automate workflows, shared it across the team, and it made day-to-day dev work faster.",
    },
    {
      company: "BNY Mellon Technology Pvt Ltd",
      href: "https://www.bny.com",
      badges: [],
      location: "Chennai, IN",
      title: "Tech Lead",
      logoUrl: "/bny.svg",
      start: "Oct 2017",
      end: "Jul 2021",
      description:
        "Led development of an Orchestration portal handling 100k+ records• Improved app performance by 50% through code optimization, caching and cloud infrastructure work• Led the move to a containerized architecture with a CI/CD pipeline. Deployment time dropped 30% and release cycles got 25% shorter• Built a UI tool for CLI-based deployment with React and Tailwind CSS, removing manual errors from the process.",
    },
    {
      company: "KRDS",
      href: "https://krds.com/in/en/",
      badges: [],
      location: "Chennai, IN",
      title: "Senior Software Developer",
      logoUrl: "/krds.webp",
      start: "Aug 2016",
      end: "Oct 2017",
      description:
        "Built web apps and chatbots for brands like AXA and Thomas Cook for social media promotion• AXA Employee Customer Engagement app: helped build a web app that manages AXA employees' customer engagement through Facebook Business Manager. Used the Facebook Business Manager API to create and manage 1000+ Facebook accounts for AXA employees, so AXA could monitor and post insurance updates straight from agent profiles.",
    },
    {
      company: "TCS",
      href: "https://www.tcs.com/",
      badges: [],
      location: "Chennai, IN",
      title: "Software Engineer",
      logoUrl: "/tcs.png",
      start: "Sep 2012",
      end: "Aug 2016",
      description:
        "Worked as a developer on the Strategic Lead Management (SLR) and E-Statement applications.• Helped build an internal proof of concept for video banking with WebRTC and sockets.",
    }
  ],
  education: [
    {
      school: "Sri Sairam Engineering College",
      href: "https://sairam.edu.in",
      degree: "Bachelor of Technology in Information Technology",
      logoUrl: "/sairam.png",
      start: "2008",
      end: "2012",
    },
  ],
  awards: [
    {
      title: "Meta Hall of Fame",
      dates: "2015 and 2022",
      location: "",
      description:
        "Listed in Meta's bug bounty Hall of Fame twice for responsibly disclosed security reports ($25K total rewards).",
      image: "/meta.svg",
      links: [
        {
          title: "Hall of Fame 2015",
          href: "https://bugbounty.meta.com/leaderboard/?league=&year=2015",
          icon: '🏆 '
        },
      ],
    },
    {
      title: "BountyCon 2022 - top 10",
      dates: "Sep 2022",
      location: "Singapore",
      description:
        "Came as a top 10 participant in the BountyCon CTF, securing a place at the next-level live bug bounty / live hacking events.",
      image: "/boutycon2.jpg",
      links: [
        {
          title: "BountyCon 2022",
          href: "https://www.facebook.com/whitehat/ctf/bountycon2022/rules",
          icon: '🏆 '
        },
      ],
    },
    {
      title: "Samsung security acknowledgment",
      dates: "Jul 2017",
      location: "",
      description:
        "Recognition and a Samsung Gear 2 reward for responsibly reporting a critical shopping-portal vulnerability.",
      image: "/samsung.png",
      links: [],
    },
    {
      title: "Zerodha security acknowledgment",
      dates: "Feb 2016",
      location: "",
      description:
        "Acknowledged by Zerodha's security team for a responsibly reported registration-flow vulnerability.",
      image: "/zerodha.svg",
      links: [
        {
          title: "Acknowledgment",
          href: "https://www.linkedin.com/posts/rajsekdurai_acknowledged-by-zerodha-team-zerodha-infosec-activity-6370336134131744768-i9SI?utm_source=share&utm_medium=member_desktop",
          icon: '🏆 '
        },
      ],
    },
  ],
  projects: [
    {
      title: "Marathon photo platform data leak",
      href: "https://medium.com/codetodeploy/i-found-a-data-leak-while-buying-my-marathon-photos-0829124ac386",
      dates: "Sep 2026",
      active: false,
      description:
        "While buying my marathon photos I found an IDOR flaw in the race photography platform: one valid order ID plus a changed bib number returned another runner's high-resolution photos for free, and a valid order ID also exposed the buyer's email and payment status. Reported both the same day; the platform fixed them, confirmed the fix, and sent a certificate ([post](https://medium.com/codetodeploy/i-found-a-data-leak-while-buying-my-marathon-photos-0829124ac386)).",
      technologies: [
        "IDOR",
        "Broken access control",
        "Responsible disclosure",
      ],
      image: "/card-marathon.png",
      links: [
        {
          type: "Write-up",
          href: "https://medium.com/codetodeploy/i-found-a-data-leak-while-buying-my-marathon-photos-0829124ac386",
          icon: '🐛 '
        },
      ],
      video: ""
    },
    {
      title: "PokerPeeker - PlanITPoker vote audit",
      href: "https://github.com/rajsek/PokerPeeker-Internal-Vote-Audit",
      dates: "Apr 2026",
      active: false,
      description:
        "A Chrome extension that audits PlanITPoker (planning poker) votes in a browser side panel. It spots vote conflicts in the room data, can mirror a chosen participant's vote, and exports the room's audit data as JSON.",
      technologies: [
        "Chrome extension",
        "Planning poker",
        "Vote auditing",
      ],
      image: "/card-pokerpeeker.png",
      links: [
        {
          type: "Source",
          href: "https://github.com/rajsek/PokerPeeker-Internal-Vote-Audit",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Chrome Web Store",
          href: "https://chromewebstore.google.com/detail/pokerpeeker-internal-vote/dampegbmhhomohphhhkjmpincdfnjaom",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      video: ""
    },
    {
      title: "VBCS Variable Inspector",
      href: "https://github.com/rajsek/VBCS-Variable-Inspector-",
      dates: "Mar 2026",
      active: false,
      description:
        "A Chrome dev tool for debugging Oracle VBCS/OJET apps. It inspects runtime bindings and namespaces, and comes with a state manager, query, export/import and backup/restore of app state.",
      technologies: [
        "Chrome extension",
        "Oracle VBCS",
        "OJET",
      ],
      image: "/card-vbcs.png",
      links: [
        {
          type: "Source",
          href: "https://github.com/rajsek/VBCS-Variable-Inspector-",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Chrome Web Store",
          href: "https://chromewebstore.google.com/detail/vbcs-variable-inspector/nhlbnbfihdnmmgncdfknekabdhlajhpl",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      video: ""
    },
    {
      title: "WebSocket Debugger + Security Workbench (personal project)",
      href: "https://github.com/rajsek/WebSocket-Debugger-Security-Workbench",
      dates: "2026",
      active: false,
      description:
        "My own Chrome extension (TypeScript, MV3) for WebSocket work: a small React debugger with explicit target context, plus an authorized, host-bound Security Lab that exports redacted evidence.",
      technologies: [
        "TypeScript",
        "Chrome extension",
        "WebSockets",
        "Security testing",
        "React",
      ],
      image: "/card-websocket.png",
      links: [
        {
          type: "Source",
          href: "https://github.com/rajsek/WebSocket-Debugger-Security-Workbench",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Chrome Web Store",
          href: "https://chromewebstore.google.com/detail/nlmbgbnhoampplflhohbionappfpapaa",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      video: ""
    },
    {
      title: "BNY Mellon Cyber Steward",
      href: "",
      dates: "Jun 2021",
      active: false,
      description:
        "Found a serious security vulnerability in BNY's competition portal, built a proof of concept for it and reported it to the Security Head. BNY gave me their Cyber Steward award for it.",
      technologies: [
        "Fiddler",
        "Insecure direct object references ",
        "Reverse Engineering",
        "javascript",
        "Node.js",
      ],
      image: "/raja-bny.jpg",
      links: [
        // {
        //   type: "Website",
        //   href: "",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      video: ""
    },
    {
      title: "TicketNew.com",
      href: "",
      dates: "September 2015",
      active: false,
      description:
        "Found a serious flaw in TicketNew's booking system: it let me book an entire theater for the price of one ticket, and later buy tickets for 1 Rs each.",
      technologies: [
        "Fiddler",
        "Insecure direct object references",
        "dev-tool",
        "Reverse Engineering",
        "payment portal"
      ],
      image: "/card-ticketnew.png",
      links: [
        // {
        //   type: "Website",
        //   href: "",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      video: ""
    },
    {
      title: "Zerodha.com",
      href: "",
      dates: "Feb 2016",
      active: false,
      description:
        "Found a vulnerability in Zerodha's registration flow that bypassed the normal authentication checks and gave access to extra services without paying the registration fee. Reported it to Zerodha voluntarily, and their security team acknowledged it ([post](https://www.linkedin.com/posts/rajsekdurai_acknowledged-by-zerodha-team-zerodha-infosec-activity-6370336134131744768-i9SI?utm_source=share&utm_medium=member_desktop)).",
      technologies: [
        "Fiddler",
        "Insecure direct object references",
        "dev-tool",
        "Reverse Engineering",
        "payment portal"
      ],
      image: "",
      links: [],
      video: ""
    },
    {
      title: "Samsung.com",
      href: "",
      dates: "July 2017",
      active: false,
      description:
        "Found a serious vulnerability in Samsung India's shopping portal that allowed booking high-value products at very low prices. Showed the impact by booking a product worth 1 lakh rupees for 1000 rupees, then reported it voluntarily. Samsung acknowledged it with a reward (Samsung Gear 2 watch).",
      technologies: [
        "Fiddler",
        "Insecure direct object references",
        "dev-tool",
        "Reverse Engineering",
        "payment portal"
      ],
      image: "",
      links: [
        // {
        //   type: "Website",
        //   href: "",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      video: ""
    },
    {
      title: "facebook.com",
      href: "",
      dates: "Sept 2015",
      active: false,
      description:
        "Reported 6+ high-severity security issues through Facebook's Responsible Disclosure Program and worked with their security team until each one was fixed. Received a $25K reward. Write-ups: [private friend list disclosure](https://medium.com/@rajsek/how-i-was-able-to-get-your-facebook-private-friend-list-responsible-disclosure-91984606e682), [IDOR birth year disclosure](https://medium.com/@rajsek/my-2nd-facebook-bounty-poc-fb-data-of-birth-disclosure-d02e1bec50), [DOB via Graph API reverse engineering](https://medium.com/@rajsek/my-3rd-facebook-bounty-hat-trick-chennai-tcs-er-name-listed-in-facebook-hall-of-fame-47f57f2a4f71), [birth year via Timeline data attribute](https://medium.com/@rajsek/curiosity-and-passion-to-your-profession-might-lead-to-make-your-dream-come-true-7d9be3c6029a).",
      technologies: [
        "Fiddler",
        "Insecure direct object references",
        "dev-tool",
        "Reverse Engineering",
      ],
      image: "",
      links: [
        {
          type: "Meta hall of fame Thanks Page",
          href: "https://bugbounty.meta.com/leaderboard/?league=&year=2015",
          icon: <Icons.globe className="size-3" />
        },
      ],
      video: ""
    },
  ],
  hackathons: [
    {
      title: "Lynk Hacks – Hackathon",
      dates: "September 16 - 17, 2017",
      location: "Chennai, India",
      description:
        "Built an app that uses the AWS Vision API to identify authorized users from a selfie, with a model trained on existing employee photos. The app predicts whether a user can use track/van services, adding a security check for logistics customer requests.",
      image:
        "lynk.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
       { icon: '🏆 ',
        title: 'Winner - Team Suzhiyam',
        href: 'https://www.facebook.com/lynk.india/posts/congratulations-to-the-winners-of-lynk-hackswinners-team-suzhiyam-logesh-kumar-r/2017238161893254/'
       }
        ],
    },
    {
      title: "Tech session at Null Chennai Meet Up",
      dates: "18 March 2017",
      location: "Chennai, India",
      description:
        "Gave tech talks at the Null Chennai meetup (Chennai, India)",
      image:
        "null.png",
      links: [
       { icon: '🎤 ',
        title: 'Node JS Security',
        href: 'https://null.community/events/296-chennai-null-owasp-dc-combined-meet/'
       },
       { icon: '🎤 ',
        title: 'Understand the client side state through Redux',
        href: 'https://null.community/events/598-chennai-null-owasp-combined-meet'
       },
       { icon: '🎤 ',
        title: 'Static Analysis of NodeJS',
        href: 'https://null.community/events/509-chennai-null-owasp-combined-meetup'
       },
       { icon: '🎤 ',
        title: 'Intro to FB bug bounty',
        href: 'https://null.community/events/645-chennai-null-owasp-combined-meet'
       }
        ],
    }
  ],
} as const;
