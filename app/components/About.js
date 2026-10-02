import Image from "next/image";
import Reveal from "./motion/Reveal";
import SectionHeading from "./SectionHeading";

const principles = [
  {
    title: "Data model first.",
    text: "A clear schema makes every screen after it simpler.",
  },
  {
    title: "Ship small, ship often.",
    text: "Riftforge gets an update every month.",
  },
  {
    title: "Accessible by default.",
    text: "Keyboard, contrast and reduced motion are part of done, not a follow-up.",
  },
  {
    title: "Boring where it counts.",
    text: "Proven tools for auth and data; experiments stay in the interface.",
  },
];

const facts = [
  { value: "5", label: "Projects live on the web" },
  { value: "2", label: "Installable PWAs" },
  { value: "6", label: "Certifications" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-40">
      <SectionHeading index="02" label="About" title="Full stack, literally." />

      <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-surface">
            <Image
              src="/profile.jpg"
              alt="Portrait of Alex Berardozzi"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </Reveal>

        <div className="md:col-span-7">
          <Reveal>
            <p className="text-muted">
              I&apos;m Alex, a full-stack developer based in Italy. I work across the
              whole stack — Postgres schemas, auth and server logic on one side,
              interfaces and motion on the other — because the best product
              decisions happen where those layers meet.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-muted">
              My background is split between design and infrastructure: Photoshop,
              Illustrator and Figma on one side, Cisco coursework in networking
              and cybersecurity on the other. That&apos;s why I care about type and
              spacing as much as indexes and access rules.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-muted">
              Most of my work sits close to real businesses: a comic shop that
              replaced paper vouchers with an installable wallet, a tattoo studio
              that takes bookings online, a pizzeria that receives takeaway orders
              on WhatsApp. Outside client work I build for the trading card game
              community — Riftforge is the result.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2">
        {principles.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <div className="border-t border-line pt-6">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-muted">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
        {facts.map((fact, index) => (
          <Reveal key={fact.label} delay={index * 0.05}>
            <p className="text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-none tracking-[-0.035em]">
              {fact.value}
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.08em] text-muted">
              {fact.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
