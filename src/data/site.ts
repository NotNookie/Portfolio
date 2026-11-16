export const profile = {
  name: "Lhexus Paul M. Sosong",
  firstName: "Lhexus Paul",
  lastName: "Sosong",
  role: "Full-Stack Developer",
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

export interface SkillGroup {
  label: string;
  icon: string;
  items: string[];
}

/** Technical skills, grouped as in the CV. */
export const technicalSkills: SkillGroup[] = [
  {
    label: "Languages",
    icon: "code",
    items: ["JavaScript", "PHP", "SQL", "Java", "Dart", "Python", "C#", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    icon: "web",
    items: [
      "React",
      "Flutter",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
      "React Router",
      "TanStack Query/Table",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Framer Motion",
    ],
  },
  {
    label: "Backend & Data",
    icon: "database",
    items: [
      "Node.js",
      "Laravel (Sanctum)",
      "REST APIs",
      "PostgreSQL (Supabase)",
      "Role-Based Access Control",
      "Multi-tenant architecture",
    ],
  },
  {
    label: "Platforms & Tools",
    icon: "build",
    items: [
      "Cloudflare Pages/Workers",
      "Vercel",
      "Sentry",
      "Git",
      "GitHub",
      "Android Studio",
      "Godot Engine",
      "Visual Studio",
      "VS Code",
      "Claude",
      "Codex",
    ],
  },
  {
    label: "Enterprise",
    icon: "corporate_fare",
    items: ["SAP S/4HANA (SD, MM, PP, FI, CO modules)"],
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
