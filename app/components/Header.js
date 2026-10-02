"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "motion/react";
import * as m from "motion/react-m";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import useActiveSection from "../hooks/useActiveSection";
import { NAV_LINKS, SITE } from "../data/site";

export default function Header() {
  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const active = useActiveSection();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 8);

    if (menuOpen || headerRef.current?.contains(document.activeElement)) {
      setHidden(false);
      return;
    }

    setHidden(latest > 120 && latest > previous);
  });

  return (
    <>
      <m.header
        ref={headerRef}
        data-reveal
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          scrolled ? "border-b border-line bg-bg" : "bg-bg/0"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
          <Link href="/#top" className="text-sm font-medium tracking-tight">
            {SITE.name}
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="relative text-sm text-muted transition-colors hover:text-fg"
              >
                {link.label}
                {active === link.id ? (
                  <m.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                  />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              ref={buttonRef}
              type="button"
              className="text-sm font-medium md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </m.header>
      <div id="mobile-menu">
        <MobileMenu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          buttonRef={buttonRef}
        />
      </div>
    </>
  );
}
