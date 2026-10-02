import { featuredProjects, indexProjects } from "../data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectIndex from "./ProjectIndex";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-40">
      <SectionHeading
        index="01"
        label="Selected work"
        title="Selected work"
        intro="Five projects live on the web, from a production PWA used at a shop counter to client sites and a self-initiated concept."
      />

      <div className="space-y-28 md:space-y-36">
        {featuredProjects.map((project) => (
          <FeaturedProject key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-28 md:mt-36">
        <ProjectIndex projects={indexProjects} />
      </div>
    </section>
  );
}
