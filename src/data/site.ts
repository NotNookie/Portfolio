export const profile = {
  name: "Lhexus Paul M. Sosong",
  role: "Full-Stack Developer",
  location: "Santa Cruz, Laguna, Philippines",
  email: "lhexuspaul@gmail.com",
  phone: "+63 907 275 2484",
  github: "https://github.com/NotNookie",
  linkedin: "https://www.linkedin.com/in/lhexus-paul-sosong-048b5b3b6/",
  tagline:
    "BS Information Technology student passionate about building end-to-end products, with experience developing modern React frontends, Node.js backends, REST APIs, and production-ready web applications.",
};

export const coreStack = [
  "React",
  "Astro",
  "Vite",
  "Node.js",
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
  imageUrl: string;
  imageAlt: string;
  tags: TechTag[];
  description: string;
  impact: string;
  liveUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Better Me Web",
    imageUrl: "/images/projects/betterme-web.png",
    imageAlt: "Better Me Web storefront preview",
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
    id: "02",
    title: "Latia POS",
    imageUrl: "/images/projects/latia-pos.jpg",
    imageAlt: "Latia POS login screen preview",
    tags: [
      { label: "React", icon: "javascript", iconSrc: techIcons.react },
      { label: "Node.js", icon: "terminal", iconSrc: techIcons.nodejs },
      { label: "REST API", icon: "api" },
      { label: "RBAC", icon: "admin_panel_settings" },
    ],
    description:
      "Multi-app POS ecosystem with a cashier client, backend services, and admin dashboard.",
    impact:
      "Improved checkout reliability with server-side validation and consistent state sync between cashier and admin interfaces.",
    codeUrl: "https://github.com/NotNookie",
  },
  {
    id: "03",
    title: "fuwa",
    imageUrl: "/images/projects/fuwa.png",
    imageAlt: "fuwa clothing brand mockup preview",
    tags: [
      { label: "React", icon: "javascript", iconSrc: techIcons.react },
      { label: "Tailwind", icon: "palette", iconSrc: techIcons.tailwind },
      { label: "Framer Motion", icon: "animation", iconSrc: techIcons.framerMotion },
    ],
    description:
      "Front-end design mockup for fuwa, a fictional \"ethereal comfort\" clothing brand.",
    impact:
      "Built a full storefront UI (home, shop, product detail, brand story) with scroll reveals and smooth-scroll motion design.",
    liveUrl: "https://fuwa-one.vercel.app",
    codeUrl: "https://github.com/NotNookie",
  },
  {
    id: "04",
    title: "Sillage",
    imageUrl: "/images/projects/sillage.png",
    imageAlt: "Sillage fragrance brand mockup preview",
    tags: [
      { label: "React", icon: "javascript", iconSrc: techIcons.react },
      { label: "Tailwind", icon: "palette", iconSrc: techIcons.tailwind },
      { label: "Framer Motion", icon: "animation", iconSrc: techIcons.framerMotion },
    ],
    description:
      "Visual mockup for Sillage, a fictional luxury fragrance brand's storefront experience.",
    impact:
      "Designed a multi-page collection/ateliers/discovery flow with page-transition and scroll-driven motion.",
    liveUrl: "https://sillage-gamma-six.vercel.app",
    codeUrl: "https://github.com/NotNookie",
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
