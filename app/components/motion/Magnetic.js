"use client";

import { useRef } from "react";
import { useMotionValue, useSpring, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";

const spring = { stiffness: 300, damping: 30, mass: 0.6 };

function canMagnetize() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export default function Magnetic({ children, className = "" }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  const onMove = (event) => {
    if (reduced || !canMagnetize() || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    const max = 6;
    x.set(Math.max(-max, Math.min(max, offsetX * 0.2)));
    y.set(Math.max(-max, Math.min(max, offsetY * 0.2)));
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </m.div>
  );
}
