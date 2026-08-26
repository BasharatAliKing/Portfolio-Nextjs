import FadeIn from "./FadeIn";
import { trustedBy } from "@/data/content";

export default function TrustedBy() {
  return (
    <FadeIn>
      <section
        className="bg-white pt-10 pb-16 md:pt-16 md:pb-24 relative z-20"
        id="past-projects"
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-4">
            <h3 className="font-display font-extrabold text-[24px] md:text-[28px] text-neutral-900 uppercase tracking-tighter">
              Trusted By
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {trustedBy.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="group flex items-center justify-center gap-2.5 py-10 px-4 text-gray-500 transition-all duration-300 cursor-pointer rounded-2xl hover:bg-accent/15 hover:text-[#5c8a10] hover:shadow-[inset_0_0_20px_rgba(181,255,43,0.2)]"
              >
                <Icon className="w-[18px] h-[18px]" />
                <span className="font-bold tracking-tight text-[15px]">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
