import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Raja Sekar",
  initials: "Durairaj",
  url: "https://medium.com/@rajsek/",
  location: "Hyderabad, IN",
  locationLink: "https://www.google.com/maps/place/hyderabad",
  description:
    "Full-stack developer and parttime bounty hunter. Passionate about crafting a secure and innovative web solutions for business",
  summary:
    "Currently working as **Technical Lead** at **Oracle**, resposnible for *UI component development*,  architectural enhancements creating changes in **backend system** which uses node.js. Im specialized in **React.js** and **micro-frontend architecture**, and have a proven track record of optimizing app performance and leading significant projects. I’m passionate about leveraging technology to improve developer productivity and streamline processes.",
  avatarUrl: "/raja-2.jpg",
  skills: [
    "React",
    "Node.js",
    "Typescript",
    "Springboot",
    "gRPC",
    "GraphQL",
    "socket.io",
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
      location: "Hyderabad, IN",
      title: "Technical Lead",
      logoUrl: "/oracle.png",
      start: "Jul 2021",
      end: "Present",
      description:
        "Developed reusable UI components with React.js, adhering to 100% Oracle Redwood standards, which were widely adopted across CX teams• Led the integration of existing React components into Oracle JET framework, leveraging Preact-Compact for enhanced performance• Extended micro-frontend architecture to include OJET modules alongside React, enabling seamless component reuse and flexibility• Successfully migrated apps from VMs to a cloud-based setup using Kubernetes.",
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
        "Spearheaded development of Orchestration portal handling 100k+ records• Improved app performance by 50% through code optimization, caching, and cloud infrastructure enhancements• Led greenfield transformation to containerized architecture with CI/CD pipeline, reducing deployment time by 30% and streamlining release cycles by 25%• Engineered productivity-enhancing UI tool for CLI-based deployment using React and Tailwind CSS, reducing manual errors by 100%",
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
        "Web App and Chat Bot Development: Implemented web applications and chatbots for brands such as AXA and Thomas Cook for their social media promotion• AXA Employee Customer Engagement Web App: Contributed to building a web application that manages AXA employees’ customer engagement via Facebook Business Manager. Utilized The Facebook Business Manager API to create and manage 1000+ Facebook accounts for AXA employees. This system enables AXA to monitor and post insurance-related information directly from insurance agent profiles",
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
        "Contributed to the Strategic Lead Management (SLR) and E-Statement application as a developer.• Collaborated on an internal proof-of-concept (POC) for video banking, utilizing WebRTC and socket technology.",
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
  projects: [
    {
      title: "BountyCon Singapore 2022",
      href: "https://www.facebook.com/whitehat/ctf/bountycon2022/rules",
      dates: "September 24 - 25, 2022",
      active: false,
      description:
        "Competed in the BountyCon 2022 CTF Competition, a series of challenging security-related challenges. Ranked among the top scorers and was invited to attend the main event as part of the exclusive group of participants.Attended BountyCon Singapore 2022, a leading invitation-only security conference, where I had the opportunity to network with industry experts and learn from top security researchers.",
      technologies: [
        "Fiddler",
        "git",
        "SQL injection",
        "XSS",
        "Reverse Engineering",
        "javascript",
        "Node.js",
      ],
      image: "/boutycon2.jpg",
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
      title: "BNY Mellon Cyber Steward",
      href: "",
      dates: "Jun 2021",
      active: false,
      description:
        "BNY Mellon Cyber Steward Identified a critical security vulnerability in BNY's competition portal through meticulous analysis and research. Created a Proof of Concept (PoC) to demonstrate the vulnerability and reported it to the Security Head. Recognized for my efforts by being awarded the prestigious \"BNY Mellon Cyber Steward\" award, acknowledging my dedication to cybersecurity excellence.",
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
        "Identified a critical security vulnerability in TicketNew.com's booking system.Discovered a flaw that allowed me to book an entire theater for just the cost of one ticket, and later successfully exploited it to purchase tickets at an incredibly low rate (just 1 Rs).",
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
      title: "Zerodha.com",
      href: "",
      dates: "Feb 2016",
      active: false,
      description:
        "Identified a security vulnerability in Zerodha's registration flow, allowing me to bypass normal authentication checks. Successfully demonstrated the impact of this vulnerability by gaining unauthorized access to additional services without paying for registration fees. Voluntarily reported the issue to Zerodha and received recognition from their security team for my efforts to enhance their security.",
      technologies: [
        "Fiddler",
        "Insecure direct object references",
        "dev-tool",
        "Reverse Engineering",
        "payment portal"
      ],
      image: "",
      links: [
        {
          type: "Certificate",
          href: "https://www.linkedin.com/posts/rajsekdurai_acknowledged-by-zerodha-team-zerodha-infosec-activity-6370336134131744768-i9SI?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      video: ""
    },
    {
      title: "Samsung.com",
      href: "",
      dates: "July 2017",
      active: false,
      description:
        "Identified a critical security vulnerability in Samsung India's shopping portal, allowing me to book high-value products for significantly reduced prices. Successfully demonstrated the impact of this vulnerability by booking a product worth 1 lakh rupees for just 1000 rupees. Voluntarily reported the issue and received recognition from Samsung, including a reward (Samsung Gear 2 watch).",
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
        "Participated in Facebook's Responsible Disclosure Program and reported 6+ high-severity security issues to the company.Collaborated with Facebook's security team to ensure that all vulnerabilities were thoroughly remediated and resolved.Received a $25,000 reward for my efforts, which acknowledges my commitment to responsible disclosure and enhancing the overall security posture of Facebook.",
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
        {
          type: "Bug Report POC Blog  ",
          href: "https://medium.com/@rajsek/my-3rd-facebook-bounty-hat-trick-chennai-tcs-er-name-listed-in-facebook-hall-of-fame-47f57f2a4f71",
          icon: '🐛 '
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
        "Developed an application that utilizes AWS Vision API to identify authorized users based on their selfie, leveraging a machine learning model trained using existing employee photos. The app accurately predicts whether the user is permitted to use track/van services, enhancing security features for logistics customer requests.",
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
      title: "Present a tech session in Null Chennai Meet Up",
      dates: "18 March 2017",
      location: "Chennai, India",
      description:
        "Presented a topic about Node JS Security in Null Chennai Meet Up",
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
