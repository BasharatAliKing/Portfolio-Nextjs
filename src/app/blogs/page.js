import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/content";

export const metadata = {
  title: "Blog | Basharat Ali",
  description: "Articles on mobile development, startups, and web development.",
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-10">
        <Link
          href="/"
          className="text-sm font-bold text-gray-500 hover:text-black mb-8 inline-block"
        >
          ← Back to Home
        </Link>
        <h1 className="font-display font-bold text-[40px] md:text-[54px] uppercase tracking-tight mb-16">
          All Articles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group border border-neutral-200/80 rounded-3xl p-5 hover:border-black transition-all duration-300"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                <Image
                  alt={blog.title}
                  src={blog.image}
                  width={640}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
             <h2 className="font-display font-bold text-lg mb-3 line-clamp-2">{blog.title}</h2>
              <p className="text-gray-500 text-sm line-clamp-3 mb-4">{blog.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase">
                Read Post <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
