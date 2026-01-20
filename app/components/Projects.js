"use client";

import { motion } from "motion/react";
import { projects } from "../data/projects";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 max-w-6xl mx-auto bg-[var(--card-bg)]/30 rounded-3xl my-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-[var(--foreground)]">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative rounded-2xl overflow-hidden shadow-lg bg-[var(--background)] border border-[var(--card-border)]"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <Link href={`/projects/${project.slug}`} className="px-6 py-3 bg-[var(--primary)] text-white rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                 </Link>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)]">{project.title}</h3>
              <p className="text-[var(--secondary)] mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-[var(--card-bg)] text-[var(--secondary)] rounded-md border border-[var(--card-border)]">
                        {tech}
                    </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
