import Link from "next/link";
import { projects } from "../../data/projects";

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return (
      <main className="flex items-center justify-center h-screen text-white">
        <h1>Project not found</h1>
      </main>
    );
  }

  return (
    <main className="cursor-default flex flex-col items-center px-12 py-16 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Link className="self-start" href="/projects">
        <button
            className="self-start cursor-pointer mb-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full shadow-md font-semibold"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            ← Back
        </button>
      </Link>
      
      <h1 className="text-5xl font-extrabold mb-6">{project.title}</h1>

      <img
        src={project.image}
        alt={project.title}
        className="w-full max-w-3xl rounded-2xl shadow-2xl mb-8"
      />

      <p className="max-w-3xl text-gray-300 text-lg mb-8">{project.description}</p>

      <div className="flex flex-wrap gap-3 max-w-3xl mb-8">
        {project.technologies?.map((tech, idx) => (
          <span
            key={idx}
            className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:scale-110 transition"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          className="px-6 py-3 bg-purple-600 rounded-full font-semibold hover:bg-purple-500 transition"
        >
          Visit Project
        </a>
      )}
      
    </main>
  );
}
