"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import FadeIn from "./FadeIn";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const current = testimonials[active];

  return (
    <FadeIn>
      <section
        className="bg-white py-20 md:py-32 relative text-black overflow-hidden"
        id="testimonials"
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <FadeIn>
            <h2 className="text-[32px] sm:text-[48px] md:text-[54px] font-display font-bold text-center text-black leading-[0.95] uppercase tracking-[-0.04em] mb-20 md:mb-24">
              DON&apos;T JUST TAKE MY <br className="hidden md:block" />
              <span className="inline-flex items-center gap-2 align-baseline">
                😊 WORD
              </span>{" "}
              FOR IT.
            </h2>
          </FadeIn>

          <div className="max-w-4xl mx-auto relative flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-row md:flex-col items-center gap-3 shrink-0 order-2 md:order-1">
              <button
                className="w-12 h-12 border border-neutral-300 hover:border-black active:scale-95 transition-all outline-none rounded-full flex items-center justify-center text-black"
                title="Previous testimonial"
                id="testimonial-prev-btn"
                onClick={prev}
              >
                <ArrowUp className="w-5 h-5 rotate-[-90deg] md:rotate-0" />
              </button>
              <button
                className="w-12 h-12 bg-black text-white hover:bg-neutral-900 active:scale-95 transition-all outline-none rounded-full flex items-center justify-center"
                title="Next testimonial"
                id="testimonial-next-btn"
                onClick={next}
              >
                <ArrowDown className="w-5 h-5 rotate-[-90deg] md:rotate-0 animate-bounce" />
              </button>
            </div>

            <div className="flex-grow text-center px-4 md:px-10 min-h-[220px] flex flex-col justify-center items-center order-1 md:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center justify-center min-h-[160px] md:min-h-[140px]"
                >
                  <p className="text-xl sm:text-2xl md:text-[26px] font-bold text-gray-800 leading-relaxed tracking-tight max-w-2xl mb-8">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                  <div className="text-base md:text-lg">
                    <span className="font-extrabold text-black block mb-1">
                      {current.name}
                    </span>
                    <span className="text-gray-500 font-bold block text-sm">
                      {current.role}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-center gap-3.5 mt-10">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    className="relative focus:outline-none focus:ring-0 group rounded-full"
                    title={`View ${item.name}'s testimonial`}
                    onClick={() => setActive(index)}
                  >
                    <div
                      className={`relative w-14 h-14 rounded-full bg-neutral-300 flex items-center justify-center text-xs font-black border border-neutral-400/50 transition-all duration-300 select-none group-hover:scale-105 overflow-hidden ${
                        index === active
                          ? "ring-4 ring-accent ring-offset-2 scale-105"
                          : "opacity-50 hover:opacity-100"
                      }`}
                    >
                      <Image
                        alt={item.name}
                        src={item.image}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-row md:flex-col items-center justify-center gap-2 shrink-0 md:ml-4 order-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`rounded-full transition-all duration-300 focus:outline-none ${
                    index === active
                      ? "w-3 h-3 md:w-3 md:h-6 bg-black"
                      : "w-2 h-2 md:w-2 bg-neutral-300 hover:bg-neutral-500"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
