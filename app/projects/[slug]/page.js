"use client";

import Link from "next/link";
import { projects } from "../../data/projects";
import Header from "../../components/Header";
import { motion } from "motion/react";
import Image from "next/image";

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <main className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">Project not found</h1>
          <Link href="/" className="text-[var(--primary)] hover:underline">
            Return to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/#projects">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8 px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--secondary)] hover:text-[var(--primary)] transition-colors flex items-center gap-2"
            >
              ← Back to Projects
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-5xl font-bold text-[var(--foreground)] mb-6">
              {project.title}
            </h1>

            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-8 border border-[var(--card-border)]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="glass p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">About</h2>
              <p className="text-[var(--secondary)] text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="glass p-8 rounded-2xl mb-8">
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--secondary)] rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 bg-[var(--primary)] text-white rounded-xl font-bold hover:brightness-110 transition shadow-lg"
              >
                Visit Project →
              </motion.a>
            )}
          </motion.div>
        </div>
      </main>
    </>
  );
}
