import { projects } from "./data/projects";
import { SITE_URL } from "./data/site";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
    },
    ...projects.map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified,
    })),
  ];
}
