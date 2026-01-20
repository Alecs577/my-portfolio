"use client";

import { motion, useAnimate } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AnimatedButton({ label = "Click", href = "/", className = "", delay = 0 }) {
  const router = useRouter();
  const [scope, animate] = useAnimate();
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    router.push(href);
  };

  return (
    <motion.button
      ref={scope}
      onClick={handleClick}
      className={`relative px-2 py-1 font-semibold text-[var(--foreground)] bg-transparent overflow-hidden cursor-pointer ${className}`}
      initial={{ y: 20, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1, transition: { delay } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseDown={() => animate(scope.current, { scale: 0.95 })}
      onMouseUp={() => animate(scope.current, { scale: 1.05 })}
    >
      {/* Testo */}
      <span className="relative z-10">{label}</span>

      {/* Linea sotto */}
      <motion.div
        className="absolute left-0 bottom-0 h-[2px] bg-[var(--accent)]"
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
