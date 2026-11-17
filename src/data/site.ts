export const profile = {
  name: "Lhexus Paul M. Sosong",
  firstName: "Lhexus Paul",
  lastName: "Sosong",
  role: "Full-Stack Developer",
  /** Shown under the name in the hero. */
  status: "Looking for Internships",
  course: "BS Information Technology",
  school: "STI College – Sta. Cruz",
  year: "4th Year",
  location: "Santa Cruz, Laguna, Philippines",
  email: "lhexuspaul@gmail.com",
  phone: "+63 907 275 2484",
  github: "https://github.com/NotNookie",
  linkedin: "https://www.linkedin.com/in/lhexus-paul-sosong-048b5b3b6/",
  itch: "https://notnookie.itch.io",
  resume: "/Lhexus_Sosong_CV.pdf",
  photo: "/images/profile.webp",
  photoFull: "/images/profile.jpg",
  tagline:
    "4th-year BS Information Technology student (expected graduation June-July 2027) building end-to-end web products with React, Node.js, and Laravel. Currently leading the full-stack infrastructure of a multi-tenant scholarship management platform as my capstone.",
};

/** Career objective: currently seeking an OJT / internship. */
export const careerObjective = [
  "To secure an OJT or internship as a full-stack or web developer, where I can contribute to real projects with React, Node.js, and Laravel, learn from an experienced team, and grow into a developer who owns products end to end.",
  "I've been programming since Senior High School, and I'm currently leading the full-stack infrastructure of Iskolar, a multi-tenant scholarship management platform, as my capstone project.",
];

export interface Skill {
  name: string;
  /** Simple Icons slug (brand logo), e.g. "react". */
  logo?: string;
  /** Material Symbols fallback when no brand logo exists. */
  icon?: string;
}

export interface SkillGroup {
  label: string;
  icon: string;
  items: Skill[];
}

/** Technical skills, grouped as in the CV. */
export const technicalSkills: SkillGroup[] = [
  {
    label: "Languages",
    icon: "code",
    items: [
      { name: "JavaScript", logo: "javascript" },
      { name: "PHP", logo: "php" },
      { name: "SQL", icon: "database" },
      { name: "Java", logo: "openjdk" },
      { name: "Dart", logo: "dart" },
      { name: "Python", logo: "python" },
      { name: "C#", icon: "tag" },
      { name: "HTML", logo: "html5" },
      { name: "CSS", logo: "css" },
    ],
  },
  {
    label: "Frontend",
    icon: "web",
    items: [
      { name: "React", logo: "react" },
      { name: "Flutter", logo: "flutter" },
      { name: "Vite", logo: "vite" },
      { name: "Tailwind CSS", logo: "tailwindcss" },
      { name: "Bootstrap", logo: "bootstrap" },
      { name: "React Router", logo: "reactrouter" },
      { name: "TanStack Query/Table", icon: "table_chart" },
      { name: "Zustand", icon: "deployed_code" },
      { name: "React Hook Form", logo: "reacthookform" },
      { name: "Zod", logo: "zod" },
      { name: "Framer Motion", logo: "framer" },
    ],
  },
  {
    label: "Backend & Data",
    icon: "database",
    items: [
      { name: "Node.js", logo: "nodedotjs" },
      { name: "Laravel (Sanctum)", logo: "laravel" },
      { name: "REST APIs", icon: "api" },
      { name: "PostgreSQL (Supabase)", logo: "postgresql" },
      { name: "Role-Based Access Control", icon: "admin_panel_settings" },
      { name: "Multi-tenant architecture", icon: "domain" },
    ],
  },
  {
    label: "Platforms & Tools",
    icon: "build",
    items: [
      { name: "Cloudflare Pages/Workers", logo: "cloudflare" },
      { name: "Vercel", logo: "vercel" },
      { name: "Sentry", logo: "sentry" },
      { name: "Git", logo: "git" },
      { name: "GitHub", logo: "github" },
      { name: "Android Studio", logo: "androidstudio" },
      { name: "Godot Engine", logo: "godotengine" },
      { name: "Visual Studio", icon: "integration_instructions" },
      { name: "VS Code", icon: "code_blocks" },
      { name: "Claude", logo: "claude" },
      { name: "Codex", logo: "openai" },
    ],
  },
  {
    label: "Enterprise",
    icon: "corporate_fare",
    items: [{ name: "SAP S/4HANA (SD, MM, PP, FI, CO modules)", logo: "sap" }],
  },
];

export interface SoftSkill {
  skill: string;
  icon: string;
  proof: string;
}

/** Soft skills, each backed by something on the CV. */
export const softSkills: SoftSkill[] = [
  {
    skill: "Team leadership",
    icon: "groups",
    proof: "Acting team lead on the Iskolar capstone (team of 5) when the group leader was absent.",
  },
  {
    skill: "Presenting technical work",
    icon: "co_present",
    proof: "Co-presented and demoed Iskolar to a panel of faculty and IT experts.",
  },
  {
    skill: "Mentoring & communication",
    icon: "school",
    proof: "Peer tutor for Java Fundamentals: 6 one-on-one sessions, 2 hours each.",
  },
  {
    skill: "Working under pressure",
    icon: "timer",
    proof:
      "Top-2 at CodeFest all four years (6–8 hr builds, no internet or AI), ITSO Java Programming Contest 2026, and a solo GMTK Game Jam 2026 release.",
  },
  {
    skill: "Full-stack ownership",
    icon: "hub",
    proof: "Sole full-stack developer on Iskolar, owning frontend, API, database, and deployment.",
  },
  {
    skill: "Visual design",
    icon: "palette",
    proof: "Graphic designer for the Python Club at STI College Sta. Cruz for one year.",
  },
  {
    skill: "Continuous learning",
    icon: "auto_stories",
    proof: "SAP S/4HANA training through SAP University Alliances, plus the “Hacking a Car” security seminar.",
  },
];

export interface TechTag {
  label: string;
  /** Material Symbols icon name, used when no brand iconSrc is available. */
  icon: string;
  /** Path to a brand logo image; takes precedence over `icon` when set. */
  iconSrc?: string;
}

const techIcons = {
  react: "/icons/tech/react.webp",
  vite: "/icons/tech/vite.jpg",
  nodejs: "/icons/tech/nodejs.svg",
  supabase: "/icons/tech/supabase.webp",
  paymongo: "/icons/tech/paymongo.png",
  tailwind: "/icons/tech/tailwind.webp",
  framerMotion: "/icons/tech/framer-motion.webp",
} as const;

export interface Project {
  id: string;
  title: string;
  /** Omit to render a placeholder card until a screenshot is available. */
  imageUrl?: string;
  imageAlt: string;
  /** Short role/context line, e.g. "Capstone | Team of 5". */
  role?: string;
  tags: TechTag[];
  description: string;
  impact: string;
  liveUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Iskolar: Scholarship Management Platform",
    imageUrl: "/images/projects/iskolar.webp",
    imageAlt: "Iskolar landing page and admin dashboard preview",
    role: "Capstone | Sole full-stack dev in a team of 5",
    tags: [
      { label: "React", icon: "javascript", iconSrc: techIcons.react },
      { label: "Vite", icon: "bolt", iconSrc: techIcons.vite },
      { label: "Tailwind", icon: "palette", iconSrc: techIcons.tailwind },
      { label: "Laravel", icon: "deployed_code" },
      { label: "PostgreSQL", icon: "database", iconSrc: techIcons.supabase },
      { label: "Cloudflare", icon: "cloud" },
    ],
    description:
      "Multi-tenant platform that lets municipalities run and manage their own scholarship programs and applicants, starting with Sta. Cruz, Laguna (LYDO).",
    impact:
      "Own the entire infrastructure: React frontend, Laravel API with Sanctum auth, Supabase PostgreSQL, and Cloudflare Pages/Workers deployment. Co-presented the demo to a panel of faculty and IT experts.",
    codeUrl: "https://github.com/NotNookie/Scholarship-MonoRepo",
  },
  {
    id: "02",
    title: "Better Me Web",
    imageUrl: "/images/projects/betterme-web.png",
    imageAlt: "Better Me Web storefront preview",
    role: "Real client | Family-run digital products business",
    tags: [
      { label: "React", icon: "javascript", iconSrc: techIcons.react },
      { label: "Vite", icon: "bolt", iconSrc: techIcons.vite },
      { label: "Supabase", icon: "database", iconSrc: techIcons.supabase },
      { label: "PayMongo", icon: "payments", iconSrc: techIcons.paymongo },
    ],
    description:
      "Production-ready digital product storefront with serverless checkout on Vercel.",
    impact:
      "Increased payment reliability with PayMongo checkout sessions and webhook idempotency, eliminating duplicate fulfillment updates.",
    liveUrl: "https://betterme-web.vercel.app",
    codeUrl: "https://github.com/NotNookie",
  },
  {
    id: "03",
    title: "Latia POS",
    imageUrl: "/images/projects/latia-pos.jpg",
    imageAlt: "Latia POS login screen preview",
    role: "Academic project",
    tags: [
      { label: "React", icon: "javascript", iconSrc: techIcons.react },
      { label: "Node.js", icon: "terminal", iconSrc: techIcons.nodejs },
      { label: "Flutter", icon: "smartphone" },
      { label: "REST API", icon: "api" },
      { label: "RBAC", icon: "admin_panel_settings" },
    ],
    description:
      "Multi-app POS ecosystem with a Flutter mobile cashier app, backend services, and admin dashboard.",
    impact:
      "Improved checkout reliability with server-side validation and consistent state sync between cashier and admin interfaces.",
    codeUrl: "https://github.com/NotNookie",
  },
  {
    id: "04",
    title: "fuwa",
    imageUrl: "/images/projects/fuwa.png",
    imageAlt: "fuwa clothing brand mockup preview",
    tags: [
      { label: "React", icon: "javascript", iconSrc: techIcons.react },
      { label: "Tailwind", icon: "palette", iconSrc: techIcons.tailwind },
      { label: "Framer Motion", icon: "animation", iconSrc: techIcons.framerMotion },
    ],
    description:
      "Modern e-commerce storefront concept for a fictional clothing brand, focused on clean UI and UX.",
    impact:
      "Built responsive home, shop, product detail, and brand story pages with smooth scrolling and scroll-triggered micro-interactions via Framer Motion.",
    liveUrl: "https://fuwa-one.vercel.app",
    codeUrl: "https://github.com/NotNookie",
  },
  {
    id: "05",
    title: "Sillage",
    imageUrl: "/images/projects/sillage.png",
    imageAlt: "Sillage fragrance brand mockup preview",
    tags: [
      { label: "React", icon: "javascript", iconSrc: techIcons.react },
      { label: "Tailwind", icon: "palette", iconSrc: techIcons.tailwind },
      { label: "Framer Motion", icon: "animation", iconSrc: techIcons.framerMotion },
    ],
    description:
      "Premium multi-page storefront concept for a fictional fragrance brand with elegant visual storytelling.",
    impact:
      "Built animated page transitions and scroll-driven effects on a performance-conscious, reusable component architecture.",
    liveUrl: "https://sillage-gamma-six.vercel.app",
    codeUrl: "https://github.com/NotNookie",
  },
  {
    id: "06",
    title: "Knock the Count Down",
    imageUrl: "/images/projects/knock-the-count-down.png",
    imageAlt: "Knock the Count Down game preview",
    role: "GMTK Game Jam 2026 | Solo developer",
    tags: [
      { label: "Godot", icon: "sports_esports" },
      { label: "Itch.io", icon: "storefront" },
    ],
    description:
      "A complete game designed, built, and released solo within the GMTK Game Jam time limit.",
    impact:
      "Shipped and published on Itch.io as a submission to GMTK Game Jam 2026.",
    liveUrl: "https://notnookie.itch.io/knock-the-count-down",
  },
];

export interface TimelineItem {
  title: string;
  org: string;
  period: string;
  detail?: string;
  /** Link to the certificate or proof file for this entry. */
  certUrl?: string;
}

export const education: TimelineItem[] = [
  {
    title: "BS in Information Technology",
    org: "STI College - Sta. Cruz Branch",
    period: "Aug 2023 - Present",
    detail: "Currently 4th year, 1st semester (capstone). Expected graduation: June-July 2027.",
  },
  {
    title: "Senior High School: IT in Mobile App and Web Development",
    org: "STI College - Sta. Cruz Branch",
    period: "Graduated July 2023",
    detail: "Where I started programming.",
  },
];

const certDir = "/images/certificates";

export const codeFest = {
  title: "CodeFest",
  org: "STI College Sta. Cruz mobile app hackathon",
  detail:
    "Build a working Android app in 6-8 hours using only Android Studio and the Android/Java documentation. No internet search, no AI.",
  results: [
    { year: "1st Year", place: "1st Runner-up", certUrl: `${certDir}/codefest-2023.jpg` },
    { year: "2nd Year", place: "2nd Runner-up", certUrl: `${certDir}/codefest-2024.jpg` },
    { year: "3rd Year", place: "1st Runner-up", certUrl: `${certDir}/codefest-2025.jpg` },
    { year: "4th Year", place: "1st Runner-up", certUrl: `${certDir}/codefest-2026.jpg` },
  ],
};

export const itso: TimelineItem = {
  title: "15th IT Skills Olympics (ITSO): Java Programming Contest",
  org: "University of Makati",
  period: "Nov 4, 2026",
  detail: "Participant, representing STI College Sta. Cruz.",
  certUrl: `${certDir}/itso-java-contest-id.jpg`,
};

export const certifications: TimelineItem[] = [
  {
    title: "Intro to SAP S/4HANA using Global Bike - Part II",
    org: "SAP University Alliances via STI College",
    period: "Jul 28 - Dec 12, 2025",
    certUrl: `${certDir}/sap-s4hana-global-bike-part-2.pdf`,
  },
  {
    title: "SAP S/4HANA using Global Bike (SD, MM, PP, FI, CO)",
    org: "SAP University Alliances via STI College",
    period: "Jan 20 - Jun 7, 2025",
    certUrl: `${certDir}/sap-s4hana-global-bike.pdf`,
  },
  {
    title: "SAP x Accenture Student Career Talk Webinar",
    org: "SAP Philippines",
    period: "Sept 26, 2025",
    certUrl: `${certDir}/sap-accenture-career-talk.pdf`,
  },
];

export const seminars: TimelineItem[] = [
  {
    title: "Hacking a Car: One Target, Every Discipline of Security",
    org: "STI College Sta. Cruz",
    period: "Oct 21, 2026",
    detail: "Seminar, Certificate of Participation.",
    certUrl: `${certDir}/hacking-a-car.jpg`,
  },
];

export const activities: TimelineItem[] = [
  {
    title: "Graphic Designer",
    org: "Python Club, STI College Sta. Cruz",
    period: "1 year",
    certUrl: `${certDir}/python-club-graphic-designer.jpg`,
  },
  {
    title: "Peer Tutor: Java Fundamentals",
    org: "One-on-one with a first-year student",
    period: "6 sessions, 2 hrs each",
  },
];

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  /** Full certificate file (image or PDF), opened in a new tab. */
  fileUrl: string;
  /** Web-sized preview image. */
  thumbUrl: string;
  kind: "image" | "pdf";
  /** "pending" when only interim proof (e.g. a participant ID) exists. */
  status?: "pending";
  note?: string;
}

const thumb = (name: string) => `${certDir}/thumbs/${name}.webp`;

/** Certificates and evidence, newest first. */
export const certificates: Certificate[] = [
  {
    title: "15th IT Skills Olympics: Java Programming Contest",
    issuer: "University of Makati",
    date: "Nov 4, 2026",
    fileUrl: `${certDir}/itso-java-contest-id.jpg`,
    thumbUrl: thumb("itso-java-contest-id"),
    kind: "image",
    status: "pending",
    note: "Certificate pending, participant ID shown",
  },
  {
    title: "Hacking a Car: One Target, Every Discipline of Security",
    issuer: "STI College Sta. Cruz",
    date: "Oct 21, 2026",
    fileUrl: `${certDir}/hacking-a-car.jpg`,
    thumbUrl: thumb("hacking-a-car"),
    kind: "image",
  },
  {
    title: "CodeFest, 1st Runner-up (4th Year)",
    issuer: "STI College Sta. Cruz",
    date: "Sept 25, 2026",
    fileUrl: `${certDir}/codefest-2026.jpg`,
    thumbUrl: thumb("codefest-2026"),
    kind: "image",
  },
  {
    title: "CodeFest, 1st Runner-up (3rd Year)",
    issuer: "STI College Sta. Cruz",
    date: "Mar 13, 2026",
    fileUrl: `${certDir}/codefest-2025.jpg`,
    thumbUrl: thumb("codefest-2025"),
    kind: "image",
  },
  {
    title: "Intro to SAP S/4HANA using Global Bike - Part II",
    issuer: "SAP University Alliances via STI College",
    date: "Jul 28 - Dec 12, 2025",
    fileUrl: `${certDir}/sap-s4hana-global-bike-part-2.pdf`,
    thumbUrl: thumb("sap-s4hana-global-bike-part-2"),
    kind: "pdf",
  },
  {
    title: "SAP x Accenture Student Career Talk Webinar",
    issuer: "SAP Philippines",
    date: "Sept 26, 2025",
    fileUrl: `${certDir}/sap-accenture-career-talk.pdf`,
    thumbUrl: thumb("sap-accenture-career-talk"),
    kind: "pdf",
  },
  {
    title: "SAP S/4HANA using Global Bike (SD, MM, PP, FI, CO)",
    issuer: "SAP University Alliances via STI College",
    date: "Jan 20 - Jun 7, 2025",
    fileUrl: `${certDir}/sap-s4hana-global-bike.pdf`,
    thumbUrl: thumb("sap-s4hana-global-bike"),
    kind: "pdf",
  },
  {
    title: "CodeFest, 2nd Runner-up (2nd Year)",
    issuer: "STI College Sta. Cruz",
    date: "Mar 7, 2025",
    fileUrl: `${certDir}/codefest-2024.jpg`,
    thumbUrl: thumb("codefest-2024"),
    kind: "image",
  },
  {
    title: "Service Award: Graphic Designer",
    issuer: "Python Club, STI College Sta. Cruz",
    date: "A.Y. 2024-2025",
    fileUrl: `${certDir}/python-club-graphic-designer.jpg`,
    thumbUrl: thumb("python-club-graphic-designer"),
    kind: "image",
  },
  {
    title: "CodeFest, 1st Runner-up (1st Year)",
    issuer: "STI College Sta. Cruz",
    date: "Mar 22, 2024",
    fileUrl: `${certDir}/codefest-2023.jpg`,
    thumbUrl: thumb("codefest-2023"),
    kind: "image",
  },
];

/** Each app window (and its dock tile) gets its own colour. */
export type AppColor = "cobalt" | "violet" | "orange" | "green" | "red" | "yellow";
export const appColors: Record<string, AppColor> = {
  hero: "cobalt",
  about: "violet",
  projects: "orange",
  skills: "green",
  background: "red",
  contact: "yellow",
};

/* ---------------- Background & Achievements ---------------- */

export interface Highlight {
  title: string;
  detail: string;
  icon: "medal" | "term" | "chip" | "person";
  color: "yellow" | "red" | "cobalt" | "green";
  /** Optional chips shown under the detail (e.g. yearly placements). */
  chips?: string[];
}

export const highlights: Highlight[] = [
  {
    title: "Top 2 at CodeFest, four years running",
    detail:
      "Placed at STI College Sta. Cruz's Android hackathon every year: 6–8 hour builds using only Android Studio and the docs. No internet, no AI.",
    icon: "medal",
    color: "yellow",
    chips: ["1st Year · 1st Runner-up", "2nd Year · 2nd Runner-up", "3rd Year · 1st Runner-up", "4th Year · 1st Runner-up"],
  },
  {
    title: "ITSO 2026 contestant",
    detail:
      "Represented STI College Sta. Cruz in the Java Programming Contest at the 15th IT Skills Olympics, University of Makati.",
    icon: "term",
    color: "red",
  },
  {
    title: "SAP S/4HANA trained",
    detail:
      "Two SAP University Alliances courses covering SD, MM, PP, FI and CO, plus the SAP × Accenture student career talk.",
    icon: "chip",
    color: "cobalt",
  },
  {
    title: "Mentor & club designer",
    detail:
      "Peer tutor for Java Fundamentals (6 one-on-one sessions, 2 hrs each) and graphic designer for the Python Club for a year.",
    icon: "person",
    color: "green",
  },
];

export type MilestoneKind = "competition" | "training" | "seminar" | "education" | "leadership";

export interface Milestone {
  /** Sortable date (YYYY-MM-DD); also decides the year group. */
  date: string;
  /** Human-readable date or range. */
  when: string;
  kind: MilestoneKind;
  title: string;
  org: string;
  detail?: string;
  /** fileUrl of the matching entry in `certificates`. */
  cert?: string;
}

export const milestones: Milestone[] = [
  {
    date: "2026-11-04",
    when: "Nov 4, 2026",
    kind: "competition",
    title: "15th IT Skills Olympics: Java Programming Contest",
    org: "University of Makati",
    detail: "Contestant, representing STI College Sta. Cruz.",
    cert: `${certDir}/itso-java-contest-id.jpg`,
  },
  {
    date: "2026-10-21",
    when: "Oct 21, 2026",
    kind: "seminar",
    title: "Hacking a Car: One Target, Every Discipline of Security",
    org: "STI College Sta. Cruz",
    detail: "Cybersecurity seminar. Certificate of Participation.",
    cert: `${certDir}/hacking-a-car.jpg`,
  },
  {
    date: "2026-09-25",
    when: "Sept 25, 2026",
    kind: "competition",
    title: "CodeFest: 1st Runner-up (4th Year)",
    org: "STI College Sta. Cruz, Tagisan ng Talino 2026-2027",
    cert: `${certDir}/codefest-2026.jpg`,
  },
  {
    date: "2026-03-13",
    when: "Mar 13, 2026",
    kind: "competition",
    title: "CodeFest: 1st Runner-up (3rd Year)",
    org: "STI College Sta. Cruz, Tagisan ng Talino 2025-2026",
    cert: `${certDir}/codefest-2025.jpg`,
  },
  {
    date: "2025-12-12",
    when: "Jul 28 – Dec 12, 2025",
    kind: "training",
    title: "Intro to SAP S/4HANA using Global Bike - Part II",
    org: "SAP University Alliances via STI College",
    cert: `${certDir}/sap-s4hana-global-bike-part-2.pdf`,
  },
  {
    date: "2025-09-26",
    when: "Sept 26, 2025",
    kind: "seminar",
    title: "SAP x Accenture Student Career Talk Webinar",
    org: "SAP Philippines",
    cert: `${certDir}/sap-accenture-career-talk.pdf`,
  },
  {
    date: "2025-06-07",
    when: "Jan 20 – Jun 7, 2025",
    kind: "training",
    title: "SAP S/4HANA using Global Bike (SD, MM, PP, FI, CO)",
    org: "SAP University Alliances via STI College",
    cert: `${certDir}/sap-s4hana-global-bike.pdf`,
  },
  {
    date: "2025-05-01",
    when: "A.Y. 2024–2025",
    kind: "leadership",
    title: "Service Award: Graphic Designer",
    org: "Python Club, STI College Sta. Cruz",
    detail: "Designed graphics for the college programming club for one year.",
    cert: `${certDir}/python-club-graphic-designer.jpg`,
  },
  {
    date: "2025-03-07",
    when: "Mar 7, 2025",
    kind: "competition",
    title: "CodeFest: 2nd Runner-up (2nd Year)",
    org: "STI College Sta. Cruz, Tagisan ng Talino 2024-2025",
    cert: `${certDir}/codefest-2024.jpg`,
  },
  {
    date: "2024-03-22",
    when: "Mar 22, 2024",
    kind: "competition",
    title: "CodeFest: 1st Runner-up (1st Year)",
    org: "STI College Sta. Cruz, Tagisan ng Talino 2023-2024",
    cert: `${certDir}/codefest-2023.jpg`,
  },
  {
    date: "2023-08-01",
    when: "Aug 2023 – Present",
    kind: "education",
    title: "BS in Information Technology",
    org: "STI College - Sta. Cruz Branch",
    detail: "Currently 4th year, 1st semester (capstone). Expected graduation: June-July 2027.",
  },
  {
    date: "2023-07-01",
    when: "Graduated July 2023",
    kind: "education",
    title: "Senior High School: IT in Mobile App and Web Development",
    org: "STI College - Sta. Cruz Branch",
    detail: "Where I started programming.",
  },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: "mail" },
  { label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}`, icon: "call" },
  { label: "GitHub", href: profile.github, icon: "code" },
  { label: "LinkedIn", href: profile.linkedin, icon: "share" },
  { label: "Itch.io", href: profile.itch, icon: "sports_esports" },
];

export const contactGroups: { label: string; links: SocialLink[] }[] = [
  {
    label: "connect",
    links: [
      { label: profile.email, href: `mailto:${profile.email}`, icon: "mail" },
      { label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}`, icon: "call" },
      { label: "LinkedIn", href: profile.linkedin, icon: "share" },
    ],
  },
  {
    label: "code",
    links: [
      { label: "GitHub", href: profile.github, icon: "code" },
      { label: "Itch.io", href: profile.itch, icon: "sports_esports" },
    ],
  },
  {
    label: "docs",
    links: [{ label: "Resume / CV (PDF)", href: profile.resume, icon: "description" }],
  },
];
