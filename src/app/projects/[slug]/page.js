import { ArrowRight, ArrowUpRight, ArrowUpRightIcon } from "lucide-react";
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
          {project.description.overview}
        </p>

       {/* Major Contributions */}
<div className="mb-10">
  <div className="flex items-center gap-3 mb-6">
    <div className="w-2 h-2 rounded-full bg-[#b5ff2b]" />
    <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
      Major Contributions
    </h2>
  </div>

  <div className="grid gap-3">
    {project.description.majorContributions.map((item, index) => (
      <div
        key={index}
        className="group flex items-start gap-4 p-4 md:p-5 rounded-2xl border border-neutral-200 bg-neutral-50 hover:bg-black hover:border-black transition-all duration-300"
      >
        {/* Number */}
        <div className="shrink-0 w-9 h-9 rounded-full bg-black text-white group-hover:bg-[#b5ff2b] group-hover:text-black flex items-center justify-center font-bold text-sm transition-all duration-300">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Contribution */}
        <p className="text-gray-700 group-hover:text-white font-medium leading-relaxed transition-colors duration-300 pt-1">
          {item}
        </p>

        {/* Arrow */}
        <ArrowUpRight
          size={18}
          className="ml-auto shrink-0 text-gray-400 group-hover:text-[#b5ff2b] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    ))}
  </div>
</div>

        {/* <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-neutral-200 text-gray-600 font-bold px-4 py-1.5 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div> */}
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
