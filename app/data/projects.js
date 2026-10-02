export const projects = [
  {
    slug: "level-app",
    name: "Level App",
    kind: "Production PWA",
    status: "In production",
    tagline: "A digital wallet that replaced paper vouchers at the Level Up comic shop.",
    summary:
      "Level Up needed to stop printing vouchers. Level App is an installable PWA where customers see their credit, history and store events, while staff run the counter from an admin panel: issue vouchers, redeem credit, look up customers, reverse transactions.",
    highlights: [
      "Customer wallet with spendable credit, a personal barcode and real-time transaction history.",
      "Counter workflow for staff: voucher presets with reasons, credit redemption, customer search, reversals and operational diagnostics.",
      "Event calendar for TCG and comics nights with automatic reminders over Web Push.",
      "Supabase auth with password recovery, a privacy policy and a GDPR account-anonymisation flow.",
      "Scheduled jobs for backups and event reminders.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "PWA", "Web Push", "Vercel"],
    image: "/projects/level-app.png",
    link: "https://levelupwehavefun.com/",
    featured: true,
  },
  {
    slug: "riftforge",
    name: "Riftforge",
    kind: "Community product · PWA",
    status: "Live — updated monthly",
    tagline: "A collection, market and meta hub for Riftbound TCG players.",
    summary:
      "Riftforge gives Riftbound players one place to manage their collection, follow card prices and read the competitive meta — with Google or Discord sign-in, Excel import and export, and a PWA that installs like a native app.",
    highlights: [
      "Collection manager with variants, quantities and bulk import/export from Excel.",
      "Live price tracking through Cardmarket to follow market swings and the value of a collection over time.",
      "Meta analysis: tier lists, tournament results and a personal matchup matrix.",
      "Serverless architecture on Next.js, Prisma and Neon Postgres, with NextAuth for OAuth sign-in.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "NeonDB (PostgreSQL)", "PWA", "NextAuth"],
    image: "/projects/riftforge.webp",
    link: "https://riftforge.xyz/",
    featured: true,
  },
  {
    slug: "la-rustica",
    name: "La Rustica",
    kind: "Landing page",
    status: "Live",
    tagline: "A fast, mobile-first site for a traditional Neapolitan pizzeria.",
    summary:
      "The brief was to modernise the pizzeria's presence online without losing its handmade character. The page leads straight to what people come for — menu, photos, reviews, location — and turns takeaway orders into a pre-filled WhatsApp chat.",
    highlights: [
      "Sticky calls to action and a floating button that open a pre-filled WhatsApp order.",
      "Single-page navigation with anchored scrolling and an off-canvas mobile menu.",
      "next/image with modern formats for a low LCP on mobile.",
      "Privacy and cookie pages, a branded 404, and continuous deployment from GitHub to Vercel.",
    ],
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel", "GitHub"],
    image: "/projects/la-rustica.webp",
    link: "https://la-rustica-app.vercel.app/",
    featured: false,
  },
  {
    slug: "hagakure-tattoo-studio",
    name: "Hagakure Tattoo Studio",
    kind: "Studio site + booking",
    status: "Live",
    tagline: "Portfolio and booking flow for a tattoo studio.",
    summary:
      "Design and development of the Hagakure Tattoo Studio website: the studio's story, its resident artists and their work, and a guided booking form that sends requests straight to the studio's inbox.",
    highlights: [
      "Touch-friendly galleries with a lightbox for high-resolution work.",
      "Booking form validated in real time with React Hook Form and Zod, delivered by email through a serverless function with Nodemailer.",
      "Static and server rendering, a dynamic sitemap and structured metadata for search.",
      "Scroll-driven motion kept light enough not to cost performance.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "Nodemailer",
    ],
    image: "/projects/hagakure.webp",
    link: "https://hagakure-tattoo-app.vercel.app/",
    featured: false,
  },
  {
    slug: "vista-majella",
    name: "Vista Majella",
    kind: "Concept · booking UX",
    status: "Concept",
    tagline: "A booking experience for a fictional B&B in the Abruzzo mountains.",
    summary:
      "A self-initiated concept exploring hospitality UX: rooms, amenities, hiking activities and a gallery, leading into a mocked date-selection and booking flow that mirrors a real reservation system.",
    highlights: [
      "Mock booking flow with date selection and request handling.",
      "Room carousels and galleries with scroll transitions.",
      "Nature-inspired palette on Tailwind CSS, mobile-first and accessible.",
      "Optimised media delivery for fast loads on an image-heavy page.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/vista-majella.png",
    link: "https://vista-majella.vercel.app/",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const indexProjects = projects.filter((project) => !project.featured);

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return null;
  return projects[(index + 1) % projects.length];
}
