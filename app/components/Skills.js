"use client";

import { motion } from "motion/react";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-[var(--foreground)]">Skills</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col items-center gap-3 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-sm cursor-default group"
            >
              <skill.icon className={`text-4xl ${skill.color} transition-transform duration-300 group-hover:scale-110`} />
              <span className="font-semibold text-sm text-[var(--secondary)]">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
