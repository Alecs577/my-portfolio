"use client";

import { LazyMotion, MotionConfig, domMax } from "motion/react";

export default function MotionProvider({ children }) {
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
