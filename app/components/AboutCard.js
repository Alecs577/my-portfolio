"use client";

import { motion } from "motion/react";

export function AboutCard() {
  return (
    <motion.div
      className="glass relative flex flex-col items-center self-start text-center p-8 mt-12 max-w-3xl rounded-2xl shadow-xl transition-all duration-300"
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--foreground)] mb-4 relative">
        About Me
        <span className="block w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto mt-3 rounded-full"></span>
      </h2>

      <p className="mt-6 text-[var(--secondary)] text-lg leading-relaxed">
        Hi, I’m Alex, 27 years old and passionate about technology and the video game industry.
        Over the years I have built skills across different areas of IT — from developing modern web applications to digital design, networking, and cybersecurity.
        I’m a positive and curious person, always eager to learn, grow, and bring value to every project I work on. 🚀
      </p>
    </motion.div>
  );
}
