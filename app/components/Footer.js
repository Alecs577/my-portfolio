import { SITE } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} {SITE.name}</p>
        <p className="max-w-md md:text-center">
          Designed and built in Next.js, Tailwind CSS and Motion.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg transition-colors hover:text-accent"
          >
            GitHub ↗
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg transition-colors hover:text-accent"
          >
            LinkedIn ↗
          </a>
          <a href="/#top" className="text-fg transition-colors hover:text-accent">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
