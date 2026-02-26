"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen transition-colors duration-300">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      
      <footer className="text-center py-8 text-[var(--secondary)] text-sm">
        © {new Date().getFullYear()} Alex Berardozzi. All rights reserved.
      </footer>
    </main>
  );
}
