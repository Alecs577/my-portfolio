"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useReducedMotion, useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m";
import Reveal from "./motion/Reveal";

export default function FeaturedProject({ project }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(6%)", "inset(0%)"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);

  return (
    <article ref={ref} className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
      <Link href={`/projects/${project.slug}`} className="md:col-span-7">
        <m.div
          className="relative aspect-[16/10] overflow-hidden rounded-[4px] bg-surface"
          style={reduced ? undefined : { clipPath }}
        >
          <m.div className="absolute inset-0" style={reduced ? undefined : { scale }}>
            <Image
              src={project.image}
              alt={`Screenshot of ${project.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </m.div>
        </m.div>
      </Link>

      <Reveal className="md:col-span-5">
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
          {project.kind} · {project.status}
        </p>
        <h3 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
          <Link href={`/projects/${project.slug}`} className="hover:text-accent">
            {project.name}
          </Link>
        </h3>
        <p className="mt-4 text-muted">{project.tagline}</p>
        <p className="mt-4 text-sm text-muted">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-8 inline-flex text-sm font-medium text-fg transition-colors hover:text-accent"
        >
          View details <span className="ml-1 inline-block">↗</span>
        </Link>
      </Reveal>
    </article>
  );
}
