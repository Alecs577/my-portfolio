"use client";

import { useScroll, useSpring } from "motion/react";
import * as m from "motion/react-m";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <m.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-px origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
