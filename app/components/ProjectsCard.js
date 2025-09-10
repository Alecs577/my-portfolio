"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function ProjectsCard() {
  return (
    <motion.div
      className="cursor-default relative flex flex-col items-center self-start text-center p-8 mt-12 max-w-3xl rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl border border-gray-700"
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-5xl font-extrabold text-white mb-4 relative">
        Projects
        <span className="block w-20 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto mt-3 rounded-full"></span>
      </h2>

      <p className="mt-6 text-gray-300 text-lg leading-relaxed">
        Here you can explore some of my personal and professional projects, crafted with passion and attention to detail. ✨
      </p>

      <Link
        href="/projects"
        className="mt-6 px-6 py-3 text-white font-semibold bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition"
      >
        Discover Projects
      </Link>
    </motion.div>
  );
}
