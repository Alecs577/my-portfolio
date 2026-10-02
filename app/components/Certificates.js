"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { certificateGroups } from "../data/certificates";
import Reveal from "./motion/Reveal";
import SectionHeading from "./SectionHeading";

export default function Certificates() {
  const dialogRef = useRef(null);
  const [selected, setSelected] = useState(null);

  const open = (certificate) => {
    setSelected(certificate);
    requestAnimationFrame(() => dialogRef.current?.showModal());
  };

  const close = () => {
    dialogRef.current?.close();
    setSelected(null);
  };

  return (
    <section id="credentials" className="mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-40">
      <SectionHeading
        index="04"
        label="Credentials"
        title="Education & certifications"
        intro="Formal training in full-stack web development, plus Cisco Networking Academy coursework in networking, IT and security."
      />

      <div className="space-y-16">
        {certificateGroups.map((group) => (
          <div key={group.label} className="grid gap-6 md:grid-cols-12">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted md:col-span-3 md:sticky md:top-28 self-start">
              {group.label}
            </p>
            <ul className="md:col-span-9">
              {group.items.map((certificate, index) => (
                <Reveal as="li" key={certificate.title} delay={index * 0.05}>
                  <div className="flex flex-col gap-3 border-t border-line py-5 last:border-b sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-medium">{certificate.title}</h3>
                      <p className="mt-1 text-sm text-muted">{certificate.issuer}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => open(certificate)}
                      className="self-start text-sm font-medium text-fg hover:text-accent"
                    >
                      View
                    </button>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        className="fixed inset-0 z-50 m-auto w-[min(56rem,calc(100vw-2rem))] max-h-[90vh] border border-line bg-bg p-0 text-fg backdrop:bg-black/70"
      >
        <AnimatePresence>
          {selected ? (
            <m.div
              data-reveal
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col"
            >
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <div>
                  <h3 className="text-lg font-medium">{selected.title}</h3>
                  <p className="text-sm text-muted">{selected.issuer}</p>
                </div>
                <button type="button" onClick={close} className="text-sm font-medium hover:text-accent">
                  Close
                </button>
              </div>
              <div className="relative h-[70vh] bg-surface">
                <Image
                  src={selected.image}
                  alt={`${selected.title} certificate issued by ${selected.issuer}`}
                  fill
                  className="object-contain p-4"
                  sizes="90vw"
                />
              </div>
            </m.div>
          ) : null}
        </AnimatePresence>
      </dialog>
    </section>
  );
}
