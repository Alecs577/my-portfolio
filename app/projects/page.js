"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { projects } from "../data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <main className="cursor-default flex flex-col items-center px-12 py-16 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">

      {/* Back Button */}
      <Link className="self-start" href="/">
        <motion.button
            className="self-start cursor-pointer mb-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full shadow-md font-semibold"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            ← Back
        </motion.button>
      </Link>

      {/* Titolo */}
      <motion.h1
        className="text-5xl font-extrabold mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>

      <motion.p
        className="max-w-3xl text-gray-300 mb-12 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Here you can find some of my personal and professional projects, created with passion and attention to detail. 🛠️
      </motion.p>

      {/* Projects Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
            onClick={() => router.push(`/projects/${project.slug}`)}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
