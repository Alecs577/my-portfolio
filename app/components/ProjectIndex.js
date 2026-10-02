"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import * as m from "motion/react-m";
import Reveal from "./motion/Reveal";

const spring = { stiffness: 300, damping: 30, mass: 0.6 };

export default function ProjectIndex({ projects }) {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(null);
  const [finePointer, setFinePointer] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFinePointer(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const showPreview = finePointer && !reduced;

  return (
    <div
      className="relative"
      onMouseMove={(event) => {
        if (!showPreview) return;
        x.set(event.clientX + 24);
        y.set(event.clientY - 110);
      }}
    >
      <ul className="group/list">
        {projects.map((project, index) => (
          <Reveal as="li" key={project.slug} delay={index * 0.05}>
            <Link
              href={`/projects/${project.slug}`}
              onMouseEnter={() => setHovered(project)}
              onMouseLeave={() => setHovered(null)}
              className="group/item block border-t border-line py-6 transition-opacity duration-200 last:border-b group-hover/list:opacity-40 hover:!opacity-100"
            >
              <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-[4px] bg-surface md:hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.name}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="flex items-baseline justify-between gap-6 transition-transform duration-200 group-hover/item:translate-x-2">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight">{project.name}</h3>
                  <p className="mt-2 max-w-xl text-sm text-muted">{project.tagline}</p>
                </div>
                <p className="hidden shrink-0 font-mono text-xs uppercase tracking-[0.08em] text-muted sm:block">
                  {project.kind}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>

      <AnimatePresence>
        {showPreview && hovered ? (
          <m.div
            key={hovered.slug}
            data-reveal
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25 }}
            style={{ x: springX, y: springY }}
            className="pointer-events-none fixed top-0 left-0 z-40 hidden h-[225px] w-[360px] overflow-hidden rounded-[4px] bg-surface md:block"
          >
            <Image
              src={hovered.image}
              alt=""
              fill
              className="object-cover"
              sizes="360px"
            />
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
