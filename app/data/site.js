export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const SITE = {
  name: "Alex Berardozzi",
  role: "Full-stack developer",
  description:
    "Alex Berardozzi is a full-stack developer in Italy building production web apps with Next.js, TypeScript and Postgres — from data model to interface.",
  github: "https://github.com/Alecs577",
  linkedin: "https://www.linkedin.com/in/alex-berardozzi-31449921a/",
};

export const NAV_LINKS = [
  { label: "Work", href: "/#work", id: "work" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Stack", href: "/#stack", id: "stack" },
  { label: "Credentials", href: "/#credentials", id: "credentials" },
  { label: "Contact", href: "/#contact", id: "contact" },
];
