"use client";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import Header from "./Header";
import { socialLinks } from "@/data/content";

export default function Hero() {
  return (
    <section
      className="bg-foreground text-white relative overflow-visible z-20 h-auto lg:h-[740px]"
      id="home-section"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 left-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-8 relative h-full">
        <Header />

        <div className="pt-24 sm:pt-28 md:pt-36 pb-0 lg:pt-0 lg:pb-0 h-full">
          <div className="lg:absolute mt-[60px] md:mt-0 lg:left-[32px] lg:top-[220px] lg:w-[520px] xl:w-[760px] 2xl:w-[1160px] z-10 relative">
            <FadeIn>
              <h1
                className="font-display font-bold text-white text-[30px] sm:text-[48px] md:text-[54px] lg:text-[62px] leading-[0.9] tracking-[-0.05em] uppercase mb-0"
                id="hero-heading"
              >
                CODING WITH <br className="hidden md:block" />
                🔥PASSION, BUILDING <br className="hidden md:block" />
                WITH PURPOSE
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p
                className="text-gray-400 text-[13px] leading-relaxed max-w-[540px] md:w-[540px] mt-[28px] font-medium"
                id="hero-description"
              >
                I'm Basharat Ali, a Full Stack MERN Developer passionate about
                building modern web applications, scalable backend systems, and
                seamless digital experiences. I specialize in React.js, Next.js,
                Node.js, Express.js, Django, Laravel, MongoDB, PostgreSQL, and
                cloud technologies—helping businesses turn ideas into powerful,
                reliable products.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div
                className="flex items-center gap-[18px] mt-[32px] relative z-10"
                id="hero-cta-buttons"
              >
                <a
                  href="#contact"
                  className="talk-btn h-[58px] pl-2.5 pr-6 rounded-full text-black bg-[#a7ff14] text-accent-contrast inline-flex items-center gap-[14px] text-sm font-black uppercase transition-colors duration-300 ease-out hover:shadow-[0_0_35px_rgba(167,255,20,0.65)] group/talk select-none cursor-pointer"
                  id="btn-talk"
                >
                  <div className="icon-circle w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center text-black shadow-md shrink-0 transition-transform duration-300 ease-out group-hover/talk:rotate-[-15deg] group-hover/talk:scale-[1.1]">
                    <span className="text-[20px] leading-none mb-0.5 select-none">
                      👋
                    </span>
                  </div>
                  <span className="tracking-wider flex items-center gap-2">
                    Let&apos;s Talk
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5] transition-transform duration-300 group-hover/talk:translate-x-1 group-hover/talk:-translate-y-0.5" />
                  </span>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex items-center gap-3 sm:gap-4 mt-[40px] pt-[20px] w-fit">
                <span className="text-white font-black text-xs sm:text-sm uppercase tracking-wider shrink-0 select-none">
                  Follow Me:
                </span>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-[42px] sm:h-[42px] border border-white/50 rounded-full flex items-center justify-center text-[11px] sm:text-[13px] font-black text-white hover:bg-accent hover:text-black hover:border-accent transition-colors duration-200 shadow-sm shrink-0"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="h-[1.5px] bg-white/50 w-[120px] ml-4 md:block hidden" />
              </div>
            </FadeIn>
          </div>

          <FadeIn
            delay={0.2}
            className="hidden lg:block lg:absolute lg:right-[32px] lg:top-[44px] lg:w-[400px] lg:h-[560px] xl:w-[550px] xl:h-[730px] z-30 select-none"
            id="hero-image-block"
          >
            <img
              alt="Basharat Ali"
              src="/me.png"
              className="w-full h-full object-cover object-center block"
              loading="eager"
              decoding="async"
              style={{
                maskImage: "linear-gradient(black 75%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(black 75%, transparent 100%)",
              }}
            />
          </FadeIn>
          
          <FadeIn
            delay={0.2}
            className="lg:hidden relative w-full max-w-[380px] h-[450px] mx-auto mt-8 select-none"
            id="hero-image-block-mobile"
          >
            <img
              alt="Basharat Ali"
              src="/me.png"
              className="w-full h-full object-cover object-center block"
              loading="eager"
              decoding="async"
              style={{
                maskImage: "linear-gradient(black 75%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(black 75%, transparent 100%)",
              }}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
