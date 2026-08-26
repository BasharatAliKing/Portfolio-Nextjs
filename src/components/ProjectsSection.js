import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";
import { projects } from "@/data/content";

function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="border border-neutral-200/60 rounded-[36px] p-6 md:p-8 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.02)] flex flex-col group hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 cursor-pointer block h-full"
    >
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white mb-6 border border-gray-100/80 shadow-inner flex flex-col select-none">
        <div className="bg-neutral-900 px-4 py-3 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/90" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/90" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/90" />
          </div>
          <div className="bg-neutral-800/80 rounded-md px-3 py-1 text-[10px] text-gray-400 font-mono text-center w-48 truncate">
            {project.urlLabel}
          </div>
          <div className="w-8" />
        </div>
        <div
          className={`flex-grow ${project.bgColor} relative flex flex-col overflow-hidden`}
        >
          <Image
            alt={project.title}
            src={project.image}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h3 className="font-extrabold text-[22px] text-black mb-3">
        {project.title}
      </h3>
      <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-6 font-semibold line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tag) => (
          <span
      key={tag}
      className="inline-flex items-center rounded-full border shadow border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold text-neutral-700 transition-all duration-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
    >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-auto cursor-pointer self-start group/view">
        <span className="text-sm font-black text-black tracking-tight group-hover/view:text-accent transition-colors">
          View Project
        </span>
        <div className="w-8 h-8 rounded-full bg-[#1e1e24] text-white flex items-center justify-center group-hover/view:scale-110 transition-transform duration-200">
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </div>
      </div>
    </Link>
  );
}

export default function ProjectsSection() {
  return (
    <section className="bg-white py-12 md:py-24" id="projects">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <FadeIn>
          <h2 className="text-[32px] sm:text-[48px] md:text-[54px] font-display font-bold text-black leading-[0.95] uppercase tracking-[-0.04em] max-w-4xl mb-16 md:mb-20">
            HERE&apos;S A GLIMPSE OF <br className="hidden md:block" />
            SOME EXCITING{" "}
            <span className="inline-flex items-center gap-1.5">
              👨‍💻 PROJECTS
            </span>{" "}
            <br className="hidden md:block" />
            I&apos;VE BUILT
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.slice(0,4).map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="flex justify-center mt-16 md:mt-20">
            <Link
              href="/projects"
              className="bg-accent text-black font-extrabold text-[15px] px-8 py-4 md:py-4.5 rounded-full hover:bg-accent-strong tracking-tight transition-all duration-200 inline-flex items-center gap-3 active:scale-98 cursor-pointer"
              id="btn-view-all"
            >
              View All Projects
              <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-accent">
                <ArrowUpRight className="w-3 h-3 stroke-[3]" />
              </div>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
