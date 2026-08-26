import { ArrowUpRight, ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/content";
import ProjectImageSlider from "@/components/ProjectImageSlider";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Basharat Ali`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-[900px] mx-auto px-6 md:px-8 py-10">
        <Link
          href="/projects"
          className="text-sm font-bold text-gray-500 hover:text-black mb-8 inline-block"
        >
          ← All Projects
        </Link>
        <div className="mb-10">
          <ProjectImageSlider
            image={project.image}
            video={project.video}
            title={project.title}
            background={project.bgColor}
          />
        </div>

        <h1 className="font-display font-bold text-[36px] md:text-[48px] uppercase tracking-tight mb-6">
          {project.title}
        </h1>

        <p className="text-gray-600 text-lg font-medium leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-neutral-200 text-gray-600 font-bold px-4 py-1.5 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4 mb-10">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border-2 border-black bg-white text-black font-extrabold px-7 py-3.5 rounded-full hover:bg-black hover:text-white transition-all duration-300"
            >
              Go to Website
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#b5ff2b] text-black font-extrabold px-8 py-4 rounded-full hover:bg-[#a5ec24] transition-colors"
          >
            Start a Similar Project <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  );
}
