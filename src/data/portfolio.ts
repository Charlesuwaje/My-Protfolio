export const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Contact"];

export const SKILLS: Record<string, string[]> = {
  "Languages & Frameworks": ["PHP (Laravel)", "Node.js (Express)", "JavaScript ES6+", "React", "HTML5 / CSS3"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  "DevOps & Tools": ["Docker", "AWS", "CI/CD Pipelines", "Git / GitHub", "Postman", "Swagger", "Heroku", "azure", "forge", "DigitalOcean"],
  Architecture: ["RESTful APIs", "Microservices", "Agile (Jira, ClickUp)", "Unit Testing", "QA Leadership"],
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  tag: string;
  color: string;
  points: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    company: "KREDO (UK)",
    role: "Senior Backend Developer & DevOps Engineer",
    period: "Apr 2025 – Present",
    tag: "Current",
    color: "#00D4AA",
    points: [
      "Architected the entire backend infrastructure for a UK-based recruitment & performance management platform using Node.js",
      "Designed scalable APIs for job matching and performance analytics supporting high-volume user role management",
      "Owned all DevOps operations — CI/CD pipelines, server provisioning, deployment automation, and infrastructure monitoring",
      "Streamlined third-party HR tool integrations, improving data synchronization efficiency by 99.9%",
    ],
  },
  {
    company: "THE PRICE IS RIGHT NIGERIA (ANYBID)",
    role: "Senior Backend Developer & Team Lead",
    period: "Aug 2025 – 2026",
    tag: "Contract",
    color: "#F59E0B",
    points: [
      "Spearheaded AnyBid — a high-concurrency lottery app featuring SuperBid, Instant Bid, and Jackpot game modes",
      "Led a cross-functional engineering team managing the end-to-end SDLC aligned with global 'The Price Is Right' brand standards",
      "Architected a digital wallet system handling real-world currency deposits converted to in-game coins",
      "Engineered high-performance RNG bidding logic and optimized backend to support thousands of concurrent users during live shows",
    ],
  },
  {
    company: "MANCE – HR Performance Management",
    role: "Backend Developer",
    period: "Jan 2024 – Present",
    tag: "Active",
    color: "#818CF8",
    points: [
      "Led end-to-end development of a comprehensive HR system in PHP Laravel focused on staff appraisal & KPI tracking",
      "Built real-time analytics dashboards providing management actionable insights into employee productivity",
      "Implemented rigorous security protocols and modular code architecture ensuring 99.9% system uptime",
    ],
  },
  {
    company: "JVT LOGISTICS",
    role: "Engineering Team Lead & CTO",
    period: "Jan 2024 – 2025",
    tag: "CTO",
    color: "#34D399",
    points: [
      "Served as CTO and Engineering Team Lead — overseeing architecture decisions, team direction, and technical roadmap",
      "Spearheaded backend of a scalable logistics platform handling real-time multi-currency processing",
      "Automated CI/CD deployment pipelines, reducing manual deployment errors and increasing release frequency",
      "Optimized shipment tracking algorithms resulting in significantly faster response times for end-users using PHP Laravel",
    ],
  },
  {
    company: "ZOJA-TECH",
    role: "Backend Engineer",
    period: "Oct 2021 – 2025",
    tag: "",
    color: "#60A5FA",
    points: [
      "Engineered microservices for enterprise clients including AIICO Insurance and ADDAX Petroleum",
      "Served as QA Lead for Unity Bank ChatBot — zero critical bugs at launch",
      "Built and integrated robust RESTful APIs powering mobile and web interface interactions",
    ],
  },
  {
    company: "SMARTSEND",
    role: "Backend Engineer",
    period: "Oct 2023 – Mar 2024",
    tag: "",
    color: "#F472B6",
    points: [
      "Developed a secure currency exchange backend using Laravel ensuring PCI-DSS compliance for all transactions",
      "Optimized database queries, reducing transaction processing time to the absolute minimum",
    ],
  },
  {
    company: "ZOJAPAY",
    role: "Backend Engineer",
    period: "Aug 2023 – Oct 2024",
    tag: "",
    color: "#A78BFA",
    points: [
      "Developed high-volume transaction systems using PHP Laravel for a fintech platform",
      "Ensured backend security, scalability and seamless integration with fintech payment providers",
      "Supported DevOps practices to streamline deployment and system monitoring",
    ],
  },
  {
    company: "NORAK TECHNOLOGY",
    role: "Junior Frontend Engineer",
    period: "Nov 2020 – Aug 2021",
    tag: "",
    color: "#FB923C",
    points: [
      "Built responsive UI interfaces using React, HTML, CSS, and Bootstrap",
      "Integrated frontend with RESTful APIs for full-stack functionality",
      "Collaborated with cross-functional teams to improve user experience and site performance",
    ],
  },
];

export interface Project {
  name: string;
  desc: string;
  stack: string[];
  category: string;
  color: string;
  github: string;
  live: string;
  role?: string;
  type: "client" | "personal" | "opensource" | "fullstack";
}

export const PROJECTS: Project[] = [
  {
    name: "Fleetrify",
    desc: "Full-scale fleet & logistics management SaaS platform — real-time order tracking, multi-branch operations, subscription billing with Monnify, role-based access control, staff management, and wallet integrations.",
    stack: ["PHP Laravel", "Node.js", "MySQL", "React", "Docker", "REST APIs"],
    category: "Logistics / SaaS",
    color: "#00D4AA",
    github: "",
    live: "",
    role: "Lead Backend Engineer",
    type: "client",
  },
  {
    name: "KREDO Platform (UK)",
    desc: "UK-based recruitment and HR performance management platform. Architected the full backend and owned all DevOps — CI/CD, infrastructure, server provisioning, and third-party HR integrations achieving 99.9% data sync efficiency.",
    stack: ["Node.js", "Express", "PostgreSQL", "Docker", "AWS", "CI/CD"],
    category: "HR / Recruitment",
    color: "#00D4AA",
    github: "",
    live: "https://kredohq.com/",
    role: "Senior Backend Developer & DevOps Engineer",
    type: "client",
  },
  {
    name: "Mance HR System",
    desc: "Comprehensive HR performance management system featuring staff appraisal modules, KPI tracking, real-time analytics dashboards, and 99.9% uptime through rigorous security and modular architecture.",
    stack: ["PHP Laravel", "MySQL", "REST APIs", "Redis"],
    category: "HR / Enterprise",
    color: "#818CF8",
    github: "",
    live: "https://mance.app/",
    role: "Lead Backend Developer",
    type: "client",
  },
  {
    name: "JVT Logistics Platform",
    desc: "Scalable logistics management platform built as CTO & Engineering Team Lead — real-time multi-currency processing, automated CI/CD pipelines, optimized shipment tracking, and full team & architecture ownership.",
    stack: ["PHP Laravel", "MySQL", "Docker", "CI/CD", "REST APIs"],
    category: "Logistics",
    color: "#34D399",
    github: "",
    live: "https://www.jvtlogistics.ng/",
    role: "CTO & Engineering Team Lead",
    type: "client",
  },
  {
    name: "Haut Logistics (Canada)",
    desc: "Full-stack logistics and order fulfillment system built for North American operations — real-time shipment data, multi-currency processing, and a complete React frontend paired with a robust Laravel backend.",
    stack: ["PHP Laravel", "React", "MySQL", "REST APIs", "Docker"],
    category: "Full Stack / Logistics",
    color: "#F59E0B",
    github: "",
    live: "https://www.hautlogistics.com/",
    role: "Full Stack Engineer",
    type: "fullstack",
  },
  {
    name: "AnyBid — The Price is Right",
    desc: "High-concurrency lottery platform with SuperBid, Instant Bid, and Jackpot game modes. Includes a digital wallet with real-currency deposits, RNG engine, and infrastructure scaled to support thousands of concurrent live-show users.",
    stack: ["Node.js", "Redis", "PostgreSQL", "WebSockets", "Docker"],
    category: "Gaming / Fintech",
    color: "#F472B6",
    github: "",
    live: "https://dev-app.anybidng.com/login",
    role: "Senior Backend Developer & Team Lead",
    type: "client",
  },
  {
    name: "Chrisanatex",
    desc: "Automated inventory and stock management system with real-time tracking, purchase order workflows, supplier management, and reporting dashboards.",
    stack: ["PHP Laravel", "MySQL", "REST APIs"],
    category: "ERP",
    color: "#60A5FA",
    github: "",
    live: "https://www.chrisanatex-venture.com/login",
    role: "Backend Engineer",
    type: "personal",
  },
  {
    name: "Response Macros",
    desc: "My own open-source Laravel package that standardises and simplifies API response patterns across Laravel applications — published on GitHub and available via Composer for the community.",
    stack: ["PHP", "Laravel", "Composer", "Open Source"],
    category: "Open Source Package",
    color: "#e054cdff",
    github: "https://github.com/Charlesuwaje/response-macros",
    live: "",
    role: "Author & Maintainer",
    type: "opensource",
  },


  {
    name: "Content Management System for ZOJA-TECH",
    desc: "A content management system for ZOJA-TECH — a fintech platform that provides financial services to small businesses and individuals. Built with Laravel and MySQL, this system allows users to easily manage and update content, including articles, blog posts, and other types of content.",
    stack: ["PHP", "Laravel", "MySQL", "REST APIs"],
    category: "CMS Application",
    color: "#cbe3deff",
    github: "",
    live: "https://admin.oedfoundation.org",
    role: "Author & Maintainer",
    type: "opensource",
  },

  {
    name: "Zojapay",
    desc: "This is a Fintech Application that allows uers do fininancial transactions using fiat currencies. This application is built with Laravel and MySQL.",
    stack: ["PHP", "Laravel", "MySQL", "REST APIs"],
    category: "Fintech",
    color: "#adb9c0ff",
    github: "",
    live: "https://zojapay.com/",
    role: "Author & Maintainer",
    type: "opensource",
  },

  {
    name: "smartsend UK",
    desc: "This is a fintech company that allows users send money to other users using fiat currencies. This application is built with Laravel and MySQL.",
    stack: ["PHP", "Laravel", "MySQL", "REST APIs"],
    category: "Fintech",
    color: "#674408ff",
    github: "",
    live: "www.smartsendfinance.com",
    role: "Author & Maintainer",
    type: "opensource",
  },


  {
    name: "Perfect Edu Tech",
    desc: "This is a website that allows users to teach others how to code. This application is built with HTML, CSS, and JavaScript.",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    category: "website",
    color: "#c980a6ff",
    github: "",
    live: "tutor-recument-agency.vercel.app",
    role: "Author & Maintainer",
    type: "opensource",
  },
];