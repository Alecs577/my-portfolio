"use client";

import Image from "next/image";
import { motion } from "motion/react";
import AnimatedButton from "./AnimatedButton";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-40 h-40 md:w-56 md:h-56 mb-8"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] rounded-full blur-xl opacity-50 animate-pulse"></div>
        <Image
          src="/profile.jpg"
          alt="Alex Berardozzi"
          fill
          className="rounded-full object-cover border-4 border-[var(--card-bg)] shadow-2xl relative z-10"
          priority
        />
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-[var(--foreground)]"
      >
        Alex Berardozzi
      </motion.h1>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-2xl md:text-3xl text-[var(--secondary)] mb-8 font-light"
      >
        FrontEnd Developer
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg md:text-xl text-[var(--secondary)] max-w-2xl mb-12 leading-relaxed"
      >
        Passionate about crafting beautiful, functional, and user-centric web experiences. 
        Specialized in modern JavaScript frameworks and responsive design.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col items-center gap-8"
      >
        <div className="flex gap-4">
          <AnimatedButton label="View Projects" href="#projects" className="!bg-[var(--primary)] text-white hover:brightness-110" />
          <AnimatedButton label="Contact Me" href="#contact" className="!bg-[var(--card-bg)] !text-[var(--foreground)] border border-[var(--card-border)] hover:bg-[var(--card-border)]" />
        </div>
        <SocialLinks />
      </motion.div>
    </section>
  );
}
