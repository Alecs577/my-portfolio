"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex h-11 w-11 items-center justify-center text-fg"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={isDark ? "sun" : "moon"}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.25 }}
          className="absolute"
        >
          {isDark ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
        </m.span>
      </AnimatePresence>
    </button>
  );
}
