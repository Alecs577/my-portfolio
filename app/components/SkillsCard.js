"use client";

import { motion } from "motion/react";

export default function SkillsCard() {
  return (
    <motion.div
      className="cursor-default relative flex flex-col self-end items-center text-center p-8 mt-12 max-w-3xl rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl border border-gray-700"
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // parte solo quando visibile
    >
      {/* Titolo con linea decorativa */}
      <h2 className="text-5xl font-extrabold text-white mb-4 relative">
        Skills
        <span className="block w-20 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto mt-3 rounded-full"></span>
      </h2>

      {/* Griglia skills */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <span className="px-4 py-2 text-sm font-semibold text-black bg-yellow-400 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition">JavaScript</span>
        <span className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition">React</span>
        <span className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-full shadow-md hover:scale-110 hover:shadow-lg transition">Next.js</span>
        <span className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition">CSS</span>
        <span className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition">HTML</span>
        <span className="px-4 py-2 text-sm font-semibold text-white bg-teal-400 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition">Tailwind CSS</span>
        <span className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition">Angular</span>
        <span className="px-4 py-2 text-sm font-semibold text-white bg-cyan-500 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition">SolidJS</span>
        <span className="px-4 py-2 text-sm font-semibold text-white bg-gray-700 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition">Git</span>
        <span className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition">NodeJS</span>
        <span className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition">TypeScript</span>
        <span className="px-4 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition">Photoshop</span>
        <span className="px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition">Illustrator</span>
        <span className="px-4 py-2 text-sm font-semibold text-white bg-pink-600 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition">InDesign</span>
        <span className="px-4 py-2 text-sm font-semibold text-white bg-teal-500 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition">Figma</span>
        <span className="px-4 py-2 text-sm font-semibold text-white bg-gray-600 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition">IT Essentials</span>
        <span className="px-4 py-2 text-sm font-semibold text-white bg-gray-500 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition">Networking Essentials</span>
        <span className="px-4 py-2 text-sm font-semibold text-white bg-red-700 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition">Cybersecurity</span>
      </div>
    </motion.div>
  );
}
