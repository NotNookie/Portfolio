export const profile = {
  name: "Lhexus Paul M. Sosong",
  role: "Full-Stack Developer",
  location: "Santa Cruz, Laguna, Philippines",
  email: "lhexuspaul@gmail.com",
  phone: "+63 907 275 2484",
  github: "https://github.com/NotNookie",
  linkedin: "https://www.linkedin.com/in/lhexus-paul-sosong-048b5b3b6/",
  tagline:
    "4th-year BS Information Technology student (expected graduation June-July 2027) building end-to-end web products with React, Node.js, and Laravel. Currently leading the full-stack infrastructure of a multi-tenant scholarship management platform as my capstone.",
};

export const coreStack = [
  "React",
  "Astro",
  "Vite",
  "Node.js",
  "Laravel",
  "PostgreSQL",
  "Flutter",
  "Godot",
  "JavaScript",
  "PHP",
  "SQL",
  "Tailwind CSS",
  "Supabase",
  "REST APIs",
] as const;

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

export const codeFest = {
  title: "CodeFest",
  org: "STI College Sta. Cruz mobile app hackathon",
  detail:
    "Build a working Android app in 6-8 hours using only Android Studio and the Android/Java documentation. No internet search, no AI.",
  results: [
    { year: "1st Year", place: "1st Runner-up" },
    { year: "2nd Year", place: "2nd Runner-up" },
    { year: "3rd Year", place: "1st Runner-up" },
    { year: "4th Year", place: "1st Runner-up" },
  ],
};

export const certifications: TimelineItem[] = [
  {
    title: "Intro to SAP S/4HANA using Global Bike - Part II",
    org: "SAP University Alliances via STI College",
    period: "Jul 28 - Dec 12, 2025",
  },
  {
    title: "SAP S/4HANA using Global Bike (SD, MM, PP, FI, CO)",
    org: "SAP University Alliances via STI College",
    period: "Jan 20 - Jun 7, 2025",
  },
  {
    title: "SAP x Accenture Student Career Talk Webinar",
    org: "SAP Philippines",
    period: "Sept 26, 2025",
  },
];

export const activities: TimelineItem[] = [
  {
    title: "Graphic Designer",
    org: "Python Club, STI College Sta. Cruz",
    period: "1 year",
  },
  {
    title: "Peer Tutor: Java Fundamentals",
    org: "One-on-one with a first-year student",
    period: "6 sessions, 2 hrs each",
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
];

export const footerLinks: SocialLink[] = [
  { label: "github", href: profile.github, icon: "" },
  { label: "linkedin", href: profile.linkedin, icon: "" },
  { label: "source", href: profile.github, icon: "" },
];

