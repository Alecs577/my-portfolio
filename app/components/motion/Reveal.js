"use client";

import * as m from "motion/react-m";

const ease = [0.22, 1, 0.36, 1];

export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const Component = m[as] || m.div;

  return (
    <Component
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </Component>
  );
}
