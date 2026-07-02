export const profile = {
  name: "Lhexus Paul M. Sosong",
  role: "Full-Stack Developer",
  location: "Laguna, Philippines",
  email: "lhexuspaul@gmail.com",
  tagline:
    "I build clean, performant web experiences with a focus on developer ergonomics and product polish. Currently shaping the future of technical interfaces.",
};

export const coreStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
] as const;

export interface TechTag {
  label: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  tags: TechTag[];
  description: string;
  impact: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Project Alpha",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBw1cDYAtE6aQZlleXsAENbA0Sj_PdBxHyB4pIE57fEEn06mJ9meYuIIU7SGgNFm-1t4wI8YP6QDRn4yi8EYX5GnWtaAnuvdgEId6ZrelA6Qd4ptGib7xAN22C346MpYJaH05Q8LZFqsc0pOaPExntbmdqlXSe2fslrHvBCKAGzyK6pX6CYl7cNYCZdBZR41jzId9UEqwGP40w5mJC8eWI1DFwi3DBVM0xZ2w6UWzz15aBsSie8Qs2pEogwoJ74AmY2KgDnfyHLdUhU",
    imageAlt: "Project Alpha preview",
    tags: [
      { label: "React", icon: "javascript" },
      { label: "TypeScript", icon: "data_object" },
      { label: "Postgres", icon: "database" },
    ],
    description: "Realtime collaboration dashboard for enterprise teams.",
    impact: "Reduced status-meeting overhead by ~40% for the pilot team.",
  },
  {
    id: "02",
    title: "Project Beta",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCncyDj4fsLoT_und91Zl-sYYKKdRFeZm1k8u2G7SAg8SADCNVBnr-_2-VGRdYfjdqL7Ao5ZPNoc2yr2QAptamrYkcfrg0qQnmfGkt7hgjbDX9s8uK1EXQkRDNs48XY1ax09DndB_GumCeaAv5f9u4iFW-Q1IHJOnPN9gOFP5ziv7_5hK-pn0PTHjwpk-lwVJkI1eGIjFBPurUb1Afu4HSn-kcD9RYb_N42nbNb2QfMU3G5dblk_HMv9EG_GPX3fUMF_48Yh_Njm7zS",
    imageAlt: "Project Beta preview",
    tags: [
      { label: "Next.js", icon: "speed" },
      { label: "Tailwind", icon: "palette" },
      { label: "Supabase", icon: "database" },
    ],
    description: "Mobile-first marketplace for digital assets.",
    impact: "Reached 1k MAU in the first quarter after launch.",
  },
  {
    id: "03",
    title: "Project Gamma",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDv_VPX7yzhU_hWmsjuQrd3uN60xfpLPE6lpNqXVJT59NMMZQGQ4KIRJKj0ezDjMoQ0RAcm0_D2BTBc5uc2dIU_c9j5_-uGcbpspF0D-155oIOsuRQqeV_Gp2aBKCZF28oKdBqauEA_5dwsPkL8iU_6YE1qqqzge2122wXTZoiDZxM0Q55fsjUKGo8Z0ojnvtpqP0o1oEJosGQ3KWr6ywXBO3iQDBzVadInw8r8U_ytWO9AorOc-sUID67j2fMXg3zSAnjnoXJhyrWX",
    imageAlt: "Project Gamma preview",
    tags: [
      { label: "Vue.js", icon: "view_quilt" },
      { label: "Node.js", icon: "terminal" },
      { label: "AWS", icon: "cloud" },
    ],
    description: "Automated deployment pipeline and monitoring tool.",
    impact: "Decreased average deployment time by 60%.",
  },
];

export interface Milestone {
  index: string;
  title: string;
  description: string;
  date: string;
}

export const milestones: Milestone[] = [
  {
    index: "01",
    title: "1st Place - University Hackathon",
    description:
      "Built a campus logistics app over a weekend with a team of four. Won for innovation and technical implementation.",
    date: "JAN 2024",
  },
  {
    index: "02",
    title: "Open Source Contributor of the Month",
    description:
      "Recognized for contributions to a popular TypeScript tooling project, fixing over 12 critical bugs.",
    date: "NOV 2023",
  },
];

export interface Certificate {
  issuer: string;
  title: string;
  url: string;
}

export const certificates: Certificate[] = [
  { issuer: "AWS", title: "Cloud Practitioner", url: "#" },
  { issuer: "GOOGLE", title: "Professional Data Engineer", url: "#" },
  { issuer: "META", title: "Front-End Developer Professional", url: "#" },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: "mail" },
  { label: "GitHub", href: "#", icon: "code" },
  { label: "LinkedIn", href: "#", icon: "share" },
];

export const footerLinks: SocialLink[] = [
  { label: "github", href: "#", icon: "" },
  { label: "linkedin", href: "#", icon: "" },
  { label: "source", href: "#", icon: "" },
];
