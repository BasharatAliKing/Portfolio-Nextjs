import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-white text-black font-sans selection:bg-accent selection:text-black overflow-x-hidden"
      id="home"
    >
      <Hero />
      <TrustedBy />
      <Skills />
      <ProjectsSection />
      <BlogSection />
      <Timeline />
      <Testimonials />
      <Contact />
    </main>
  );
}



