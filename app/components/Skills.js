import { alsoShipped, skillGroups } from "../data/skills";
import Reveal from "./motion/Reveal";
import SectionHeading from "./SectionHeading";

const names = {
  "level-app": "Level App",
  riftforge: "Riftforge",
  "la-rustica": "La Rustica",
  "hagakure-tattoo-studio": "Hagakure",
  "vista-majella": "Vista Majella",
};

function usedIn(slugs) {
  if (slugs.length >= 4) return `Used in ${slugs.length} projects`;
  return slugs.map((slug) => names[slug] || slug).join(" · ");
}

export default function Skills() {
  return (
    <section id="stack" className="mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-40">
      <SectionHeading
        index="03"
        label="Stack"
        title="Stack"
        intro="The tools I reach for, grouped by layer. A project name next to an item means I've shipped with it, not just tried it."
      />

      <div className="space-y-16">
        {skillGroups.map((group) => (
          <div key={group.id} className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted md:sticky md:top-28">
                {group.label}
              </p>
            </div>
            <ul className="md:col-span-9">
              {group.items.map((item, index) => (
                <Reveal as="li" key={item.name} delay={index * 0.05}>
                  <div className="flex flex-col gap-1 border-t border-line py-4 last:border-b sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="text-xl font-medium">{item.name}</span>
                    {item.projects.length > 0 ? (
                      <span className="font-mono text-xs text-muted">{usedIn(item.projects)}</span>
                    ) : null}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm text-muted">{alsoShipped}</p>
    </section>
  );
}
