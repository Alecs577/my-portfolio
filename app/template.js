"use client";

import * as m from "motion/react-m";

const ease = [0.22, 1, 0.36, 1];

export default function Template({ children }) {
  return (
    <m.div
      data-reveal
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease }}
    >
      {children}
    </m.div>
  );
}
