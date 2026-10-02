"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { NAV_LINKS } from "../data/site";

const ease = [0.22, 1, 0.36, 1];

export default function MobileMenu({ open, onClose, buttonRef }) {
  const firstLinkRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      buttonRef.current?.focus();
    };
  }, [open, onClose, buttonRef]);

  return (
    <AnimatePresence>
      {open ? (
        <m.div
          key="mobile-menu"
          data-reveal
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease }}
          className="fixed inset-0 z-40 flex flex-col bg-bg px-5 pt-24 md:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link, index) => (
                <li key={link.id}>
                  <m.div
                    data-reveal
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.5, ease }}
                  >
                    <Link
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={link.href}
                      onClick={onClose}
                      className="block py-2 text-[2.5rem] font-medium leading-none tracking-[-0.035em]"
                    >
                      {link.label}
                    </Link>
                  </m.div>
                </li>
              ))}
            </ul>
          </nav>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
