"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { TypingText } from "./components/typingtext";
import AnimatedButton from "./components/AnimatedButton";
import SkillsCard from "./components/SkillsCard";
import { AboutCard } from "./components/AboutCard";
import { ProjectsCard } from "./components/ProjectsCard";
import { useEffect, useState } from "react";
import SocialLinks from "./components/SocialLinks";

export default function Home() {

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);


  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black p-8">
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-12 w-full max-w-6xl">
        
        {/* Immagine profilo con animazione */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="rounded-full shadow-2xl border-4 border-gray-700 overflow-hidden"
        >
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={250}
            height={250}
            className="rounded-full"
            priority
          />
        </motion.div>

        {/* Testo e pulsanti */}
        <div className="flex flex-col items-start gap-6 cursor-default">
          <div className="flex flex-col min-w-[300px]">
            <TypingText
              text="Hi, I'm Alex Berardozzi"
              className="md:text-5xl text-3xl text-center font-bold text-white"
              speed={100}
              highlightWord="Alex Berardozzi"
              highlightClass="text-yellow-400"
            />
            <TypingText
              text="I'm a FrontEnd Developer"
              className="md:text-3xl text-2xl text-gray-300 text-center md:mt-2"
              delay={2000}
              speed={60}
              highlightWord="FrontEnd Developer"
              highlightClass="text-yellow-400"
            />
          </div>

          <div className="flex flex-wrap gap-4 mx-auto self-end">
            <AnimatedButton label="About Me" href="/about" delay={3.5} />
            <AnimatedButton label="Projects" href="/projects" delay={4} />
            <AnimatedButton label="Contact" href="/contact" delay={4.5} />
          </div>
          <SocialLinks />
        </div>
      </div>

      {/* Linea separatrice animata */}
      <motion.hr
        className="w-1/2 border-t-2 border-gray-500 mt-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.8 }}
        style={{ transformOrigin: "right" }}
      />

      <AboutCard />
      <SkillsCard />
      <ProjectsCard />
    </main>
  );
}
