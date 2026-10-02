import { SITE } from "../data/site";

const links = [
  { href: SITE.github, label: "GitHub" },
  { href: SITE.linkedin, label: "LinkedIn" },
];

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex flex-wrap gap-6 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group text-sm text-fg transition-colors duration-200 hover:text-accent"
        >
          {link.label}{" "}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      ))}
    </div>
  );
}
