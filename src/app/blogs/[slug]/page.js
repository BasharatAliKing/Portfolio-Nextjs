import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/data/content";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Article Not Found" };
  return {
    title: `${blog.title} | Basharat Ali`,
    description: blog.excerpt,
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();

  return (
    <main className="min-h-screen bg-white text-black">
      <article className="max-w-[760px] mx-auto px-6 md:px-8 py-10">
        <Link
          href="/blogs"
          className="text-sm font-bold text-gray-500 hover:text-black mb-8 inline-block"
        >
          ← All Articles
        </Link>
      
        <h1 className="font-display font-bold text-[32px] md:text-[44px] leading-tight mb-6">
          {blog.title}
        </h1>
        <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-10">
          <Image
            alt={blog.title}
            src={blog.image}
            width={1200}
            height={750}
            className="w-full h-full object-cover"
            priority
          />
        </div>
          <span className="inline-block bg-black text-[#b5ff2b] ml-auto text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-6">
          {blog.category}
        </span>
        <p className="text-gray-600 text-lg leading-relaxed font-medium">{blog.excerpt}</p>
        {blog.url && (
            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex mt-5 items-center gap-2 border-2 border-black bg-white text-black font-extrabold px-7 py-3.5 rounded-full hover:bg-black hover:text-white transition-all duration-300"
            >
              Go to Website
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
      </article>
    </main>
  );
}
