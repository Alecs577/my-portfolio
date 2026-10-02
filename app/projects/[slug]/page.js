import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNextProject, getProject, projects } from "../../data/projects";
import Reveal from "../../components/motion/Reveal";
import SplitText from "../../components/motion/SplitText";
import ScrollProgress from "../../components/ScrollProgress";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: project.name,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(slug);

  return (
    <article className="mx-auto max-w-4xl px-5 pb-28 pt-28 md:px-10 md:pb-40">
      <ScrollProgress />

      <Link
        href="/#work"
        className="text-sm text-muted transition-colors hover:text-fg"
      >
        ← All work
      </Link>

      <SplitText
        as="h1"
        text={project.name}
        mode="mount"
        className="mt-8 block text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.035em]"
      />

      <p className="mt-6 font-mono text-xs uppercase tracking-[0.08em] text-muted">
        {project.kind} · {project.status}
      </p>

      <dl className="mt-10 grid gap-6 border-y border-line py-8 sm:grid-cols-2">
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Type</dt>
          <dd className="mt-2">{project.kind}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Status</dt>
          <dd className="mt-2">{project.status}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Stack</dt>
          <dd className="mt-2 text-sm text-muted">{project.stack.join(" · ")}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Live site</dt>
          <dd className="mt-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              Visit project ↗
            </a>
          </dd>
        </div>
      </dl>

      <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-[4px] bg-surface">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 896px) 100vw, 896px"
        />
      </div>

      <Reveal>
        <p className="mt-12 text-lg text-muted">{project.summary}</p>
      </Reveal>

      <ol className="mt-12 space-y-6">
        {project.highlights.map((item, index) => (
          <Reveal as="li" key={item} delay={index * 0.05} className="flex gap-4 border-t border-line pt-6">
            <span className="font-mono text-xs text-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p>{item}</p>
          </Reveal>
        ))}
      </ol>

      {next ? (
        <div className="mt-20 border-t border-line pt-10">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">Next project</p>
          <Link
            href={`/projects/${next.slug}`}
            className="mt-3 inline-block text-3xl font-medium tracking-tight hover:text-accent"
          >
            {next.name} →
          </Link>
        </div>
      ) : null}
    </article>
  );
}
