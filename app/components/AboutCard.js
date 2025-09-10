"use client";

import { motion } from "motion/react";

export function AboutCard() {
  return (
    <motion.div
      className="relative flex flex-col items-center self-start text-center p-8 mt-12 max-w-3xl rounded-2xl bg-gradient-to-br from-gray-900 cursor-default via-gray-800 to-black shadow-2xl border border-gray-700"
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-5xl font-extrabold text-white mb-4 relative">
        About Me
        <span className="block w-20 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto mt-3 rounded-full"></span>
      </h2>

      <p className="mt-6 text-gray-300 text-lg leading-relaxed">
        Hi, I’m Alex, 27 years old and passionate about technology and the video game industry.
        Over the years I have built skills across different areas of IT — from developing modern web applications to digital design, networking, and cybersecurity.
        I’m a positive and curious person, always eager to learn, grow, and bring value to every project I work on. 🚀
      </p>
    </motion.div>
  );
}
