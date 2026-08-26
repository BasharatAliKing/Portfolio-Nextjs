import FadeIn from "./FadeIn";
import { accomplishments } from "@/data/content";

function StarIcon({ className }) {
  return (
    <svg
      className={`w-12 h-12 fill-current ${className}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0c0 6.627-5.373 12-12 12 6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
    </svg>
  );
}

export default function Timeline() {
  return (
    <section className="bg-[#0b0c0f] text-white py-20 md:py-32 border-b border-white/5" id="timeline">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <FadeIn>
          <h2
            className="text-[26px] sm:text-[44px] md:text-[48px] font-display font-bold text-center text-white leading-[1.1] sm:leading-[0.95] uppercase tracking-[-0.04em] mb-20 md:mb-28 max-w-4xl mx-auto break-words"
            id="accomplishments-title"
          >
            I TAKE{" "}
            <span className="inline-flex items-center gap-1.5 align-baseline">
              🏆PRIDE
            </span>{" "}
            IN MY <br className="hidden md:block" />
            ACCOMPLISHMENTS
          </h2>
        </FadeIn>

        <div className="flex flex-col relative w-full" id="accomplishments-list">
          {accomplishments.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <div
                className={`flex flex-col ${item.align} select-none ${
                  index === 0
                    ? "pb-12 border-b border-white/5"
                    : index === 1
                      ? "py-12 border-b border-white/5"
                      : "pt-12"
                }`}
                id={item.id}
              >
                <div
                  className={`mb-6 flex items-center ${
                    item.align.includes("center") ? "justify-center" : "justify-start"
                  } ${item.color}`}
                  id={item.starId}
                >
                  <StarIcon />
                </div>
                <p className="text-lg sm:text-xl md:text-[23px] font-bold text-gray-200 leading-relaxed tracking-tight max-w-3xl">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
