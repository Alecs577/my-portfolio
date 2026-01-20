"use client";

import { motion } from "motion/react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Header() {
  const links = [
    { label: "Home", href: "#" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-2 glass rounded-full shadow-lg w-[90%] max-w-2xl backdrop-blur-md border border-[var(--card-border)] bg-[var(--background)]/80"
    >
      <div className="text-lg font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
        AB
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
