"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";
import { blogs } from "@/data/content";

export default function BlogSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const visibleCount = isMobile ? 1 : 3;
  const maxIndex = Math.max(blogs.length - visibleCount, 0);
  const visibleBlogs = blogs.slice(activeIndex, activeIndex + visibleCount);
  const canGoBack = activeIndex > 0;
  const canGoForward = activeIndex < maxIndex;

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobile(mobileQuery.matches);

    updateViewport();
    mobileQuery.addEventListener("change", updateViewport);
    return () => mobileQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    if (!isMobile || blogs.length <= 1) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % blogs.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [isMobile]);

  function moveSlider(direction) {
    setActiveIndex((currentIndex) =>
      Math.min(Math.max(currentIndex + direction, 0), maxIndex),
    );
  }

  return (
    <FadeIn>
      <section
        className="bg-white py-20 md:py-32 border-t border-gray-100"
        id="blog-highlights"
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[32px] sm:text-[44px] md:text-[52px] font-display font-bold text-black leading-[0.95] uppercase tracking-[-0.04em]">
                Creative Stories & <br />
                <span className="inline-flex items-center gap-2 align-baseline">
                  📝 Insights
                </span>
              </h2>
            </div>
            <p className="text-gray-500 text-sm sm:text-base max-w-sm md:text-right">
              Exploring the intersections of high-performance frontend
              engineering, modern design systems, and fluid physics motions.
            </p>
          </div>

          <div className="relative mb-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleBlogs.map((blog, index) => (
              <FadeIn key={blog.slug} delay={index * 0.08}>
                <Link href={`/blogs/${blog.slug}`} className="block h-full">
                  <article className="group flex flex-col h-full bg-white border border-neutral-200/80 rounded-3xl p-5 hover:border-black hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-300 cursor-pointer">
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-neutral-100">
                      <Image
                        alt={blog.title}
                        src={blog.image}
                        width={640}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 bg-black text-accent text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full select-none shadow-sm">
                        {blog.category}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg leading-snug text-neutral-900 group-hover:text-black mb-3 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                      {blog.excerpt}
                    </p>

                  </article>
                </Link>   
              </FadeIn>
            ))}
            </div>

            {blogs.length > visibleCount && (
              <div className="mt-8 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => moveSlider(-1)}
                  disabled={!canGoBack}
                  aria-label="Previous blog posts"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-black transition hover:border-black hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-neutral-300 disabled:hover:bg-transparent disabled:hover:text-black"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => moveSlider(1)}
                  disabled={!canGoForward}
                  aria-label="Next blog posts"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-black transition hover:border-black hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-neutral-300 disabled:hover:bg-transparent disabled:hover:text-black"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <Link
              href="/blogs"
              className="bg-neutral-900 text-white font-extrabold text-[15px] px-8 py-4 rounded-full hover:bg-black tracking-tight transition-all duration-200 inline-flex items-center gap-3 active:scale-98 cursor-pointer"
              id="btn-all-blogs"
            >
              Explore All Articles
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-black">
                <ArrowUpRight className="w-3 h-3 stroke-[3]" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
