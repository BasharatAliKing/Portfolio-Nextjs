import FadeIn from "./FadeIn";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section className="bg-white py-12 md:py-24 border-t border-gray-50" id="about">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <FadeIn>
          <h2 className="text-[32px] sm:text-[48px] md:text-[54px] font-display font-bold text-center text-black leading-[0.95] uppercase tracking-[-0.04em] mb-16 md:mb-20">
            I SPECIALIZE IN A <br className="hidden md:block" />
            RANGE OF{" "}
            <span className="inline-flex items-center gap-1.5 align-baseline">
              💪 SKILLS
            </span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <FadeIn key={skill.title} delay={index * 0.05}>
                <div className="group border border-neutral-200/60 rounded-[32px] p-8 md:p-10 flex flex-col items-start bg-white shadow-[0_4px_24px_rgba(0,0,0,0.015)] hover:bg-accent hover:border-accent hover:shadow-xl hover:shadow-accent/20 hover:scale-[1.02] transition-all duration-300 min-h-[240px] cursor-default h-full">
                  <div className="mb-6 text-black transition-colors duration-300">
                    <Icon className="w-10 h-10 stroke-[2]" />
                  </div>
                  <h3 className="font-extrabold text-[22px] text-black mb-3 transition-colors duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-black/80 text-sm md:text-[15px] leading-relaxed font-semibold transition-colors duration-300">
                    {skill.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
