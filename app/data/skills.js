export const skillGroups = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "React", projects: ["level-app", "riftforge", "la-rustica", "hagakure-tattoo-studio", "vista-majella"] },
      { name: "Next.js", projects: ["level-app", "riftforge", "la-rustica", "hagakure-tattoo-studio", "vista-majella"] },
      { name: "TypeScript", projects: ["level-app", "riftforge", "la-rustica", "hagakure-tattoo-studio", "vista-majella"] },
      { name: "Tailwind CSS", projects: ["level-app", "riftforge", "la-rustica", "hagakure-tattoo-studio", "vista-majella"] },
      { name: "Motion", projects: ["hagakure-tattoo-studio", "vista-majella"] },
      { name: "React Hook Form", projects: ["hagakure-tattoo-studio"] },
      { name: "JavaScript", projects: [] },
      { name: "HTML", projects: [] },
      { name: "CSS", projects: [] },
    ],
  },
  {
    id: "backend",
    label: "Backend & data",
    items: [
      { name: "PostgreSQL", projects: ["level-app", "riftforge"] },
      { name: "Supabase", projects: ["level-app"] },
      { name: "Prisma", projects: ["riftforge"] },
      { name: "Neon", projects: ["riftforge"] },
      { name: "NextAuth / OAuth", projects: ["riftforge"] },
      { name: "Zod", projects: ["hagakure-tattoo-studio"] },
      { name: "Nodemailer", projects: ["hagakure-tattoo-studio"] },
      { name: "Node.js", projects: [] },
    ],
  },
  {
    id: "platform",
    label: "Platform & delivery",
    items: [
      { name: "PWA", projects: ["level-app", "riftforge"] },
      { name: "Web Push", projects: ["level-app"] },
      { name: "Scheduled jobs", projects: ["level-app"] },
      { name: "Vercel", projects: ["level-app", "la-rustica", "hagakure-tattoo-studio", "vista-majella"] },
      { name: "Git & GitHub CI/CD", projects: ["la-rustica"] },
    ],
  },
  {
    id: "design",
    label: "Design",
    items: [
      { name: "Figma", projects: [] },
      { name: "Photoshop", projects: [] },
      { name: "Illustrator", projects: [] },
      { name: "InDesign", projects: [] },
    ],
  },
  {
    id: "security",
    label: "Networking & security",
    items: [
      { name: "Networking", projects: [] },
      { name: "Cybersecurity", projects: [] },
      { name: "IT Essentials", projects: [] },
      { name: "GDPR-aware data flows", projects: ["level-app"] },
    ],
  },
];

export const alsoShipped = "Also shipped with Angular and SolidJS.";
