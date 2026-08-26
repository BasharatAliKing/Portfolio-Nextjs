import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { Logo } from "./Header";

export default function Contact() {
  return (
    <section className="bg-foreground text-white py-10" id="contact">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex flex-col items-center justify-center relative">
        <FadeIn>
          <h2
            className="text-[38px] sm:text-[68px] md:text-[84px] lg:text-[100px] font-display font-bold text-center tracking-[-0.04em] leading-[0.95] uppercase mb-14"
            id="work-together-title"
          >
            LET&apos;S BUILD <br className="hidden md:block" />
            <span className="inline-flex items-center gap-1 sm:gap-1 md:gap-1 justify-center">
              T
              <span className="relative inline-block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white align-middle select-none bg-neutral-300">
                <img
                  alt="Basharat Ali"
                  src="/me2.png"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover object-center"
                />
              </span>
              GETHER
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <a
            href="https://wa.me/923211339413"
            target="_blank"
            rel="noopener noreferrer"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-accent text-black flex items-center justify-center hover:scale-105 transition-all duration-300 active:scale-95 shadow-2xl shadow-accent/10 group"
            id="giant-circle-btn"
          >
            <ArrowUpRight className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-black stroke-[3.5] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-8 mb-4">
            <a
              href="/"
              className="text-gray-400 uppercase font-bold text-sm sm:text-base md:text-lg tracking-[0.2em] uppercase hover:text-white transition-colors"
            >
              HELLO Basharat Ali
            </a>
          </div>
        </FadeIn>

        <div className="w-full h-[1px] bg-neutral-800/80 mt-16 md:mt-24 mb-10" />

        <div
          className="w-full flex flex-col md:flex-row items-center justify-between gap-6"
          id="footer-menu"
        >
          <Logo id="footer-logo" />

          <div className="flex flex-wrap items-center justify-center gap-8 text-[14px] text-neutral-400 font-semibold">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About me
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#timeline" className="hover:text-white transition-colors">
              Accomplishments
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
