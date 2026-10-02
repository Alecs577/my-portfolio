import Link from "next/link";
import { projects } from "./data/projects";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 py-28 md:px-10">
      <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">404</p>
      <h1 className="mt-4 text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.035em]">
        This page doesn&apos;t exist.
      </h1>
      <Link href="/" className="mt-8 inline-flex text-sm font-medium hover:text-accent">
        Back to home
      </Link>
      <ul className="mt-16 space-y-4 border-t border-line pt-8">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="text-lg hover:text-accent">
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
