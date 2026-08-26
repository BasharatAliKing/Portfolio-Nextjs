import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/content";

export const metadata = {
  title: "Projects | Basharat Ali",
  description: "Explore projects built by Basharat Ali.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-10">
        <Link
          href="/"
          className="text-sm font-bold text-gray-500 hover:text-black mb-4 inline-block"
        >
          ← Back to Home
        </Link>
        <h1 className="font-display font-bold text-[40px] md:text-[54px] uppercase tracking-tight mb-6">
          All Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="border border-neutral-200/60 rounded-[36px] p-6 md:p-8 bg-white shadow-sm flex flex-col group hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`aspect-[4/3] rounded-2xl overflow-hidden mb-6 ${project.bgColor}`}
              >
                <Image
                  alt={project.title}
                  src={project.image}
                  width={800}
                  height={400}
                  className="w-full h-full"
                />
              </div>
              <h2 className="font-extrabold text-[22px] mb-2">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border shadow border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold text-neutral-700 transition-all duration-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-black mt-auto">
                View Project <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
