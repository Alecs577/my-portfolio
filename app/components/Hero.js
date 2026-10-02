"use client";

import { useRef } from "react";
import { useReducedMotion, useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m";
import SplitText from "./motion/SplitText";
import Magnetic from "./motion/Magnetic";

const ease = [0.22, 1, 0.36, 1];

const fade = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export default function Hero() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section
      id="top"
      ref={ref}
      className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-20 pt-28 md:px-10 md:pt-32"
    >
      <m.div style={reduced ? undefined : { y, opacity }}>
        <h1>
          <m.span
            data-reveal
            className="block font-mono text-xs uppercase tracking-[0.08em] text-muted"
            {...fade(0.35)}
          >
            Alex Berardozzi — Full-stack developer, Italy
          </m.span>
          <span className="sr-only">I build web apps from schema to pixel.</span>
          <span
            aria-hidden="true"
            className="mt-6 block max-w-6xl text-[clamp(3rem,8vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.045em]"
          >
            <SplitText as="span" text="I build web apps" mode="mount" announce={false} className="block" />
            <SplitText
              as="span"
              text="from schema to pixel."
              mode="mount"
              delay={0.24}
              announce={false}
              className="block"
            />
          </span>
        </h1>
      </m.div>

      <m.p
        data-reveal
        className="mt-10 max-w-2xl text-muted"
        {...fade(0.43)}
      >
        Next.js, TypeScript and Postgres. I design the data model, write the API,
        build the interface and ship it to production — then keep it running.
        Right now that means a digital wallet used at a comic shop counter and a
        TCG hub that gets an update every month.
      </m.p>

      <m.div data-reveal className="mt-10 flex flex-wrap gap-3" {...fade(0.51)}>
        <Magnetic>
          <a
            href="#work"
            className="inline-flex h-12 items-center rounded-full bg-accent px-6 text-sm font-medium text-accent-fg"
          >
            See the work
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href="#contact"
            className="inline-flex h-12 items-center rounded-full border border-line px-6 text-sm font-medium text-fg"
          >
            Get in touch
          </a>
        </Magnetic>
      </m.div>

      <m.dl
        data-reveal
        className="mt-20 grid gap-8 border-t border-line pt-8 sm:grid-cols-3"
        {...fade(0.59)}
      >
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Currently</dt>
          <dd className="mt-2 text-sm">Shipping monthly updates to Riftforge.</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Stack</dt>
          <dd className="mt-2 font-mono text-sm">Next.js · TypeScript · Postgres</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Status</dt>
          <dd className="mt-2 flex items-center gap-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Open to full-stack roles and freelance projects.
          </dd>
        </div>
      </m.dl>
    </section>
  );
}
