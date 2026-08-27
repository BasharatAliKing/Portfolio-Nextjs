"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home", isButton: true },
  { label: "About me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "/blogs", isExternal: true },
];

function Logo({ id }) {
  return (
    <Link href="#home" className="flex items-center gap-2 group cursor-pointer" id={id}>
      <div className="flex items-center gap-0.5 font-bold">
        <div className="w-3 h-5.5 bg-accent rounded-sm transform -skew-x-12" />
        <div className="w-3 h-5.5 bg-accent rounded-sm transform -skew-x-12" />
      </div>
      <span className="font-display font-bold tracking-tighter text-xl text-white">
        BASHARAT ALI.
      </span>
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-60 px-6 py-6 bg-foreground/90 backdrop-blur-md border-b border-white/10 md:bg-transparent md:backdrop-blur-none md:border-0 md:px-0 md:py-0 md:absolute md:top-5.5 md:left-8 md:right-8 md:h-10 flex items-center justify-between">
        <Logo id="nav-logo" />

        <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 gap-8 text-[12px] font-semibold text-gray-400 select-none">
          {navLinks.map((link) =>
            link.isExternal ? (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ) : link.isButton ? (
              <button
                key={link.label}
                className="hover:text-white transition-colors cursor-pointer text-white font-bold"
                onClick={() => {
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.label}
              </button>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="group flex items-center gap-3 border border-neutral-800 bg-neutral-900/40 rounded-full px-5 py-2.5 text-[11px] font-black uppercase tracking-wider text-gray-300 hover:text-black hover:bg-accent hover:border-accent transition-colors duration-300 ease-out hover:shadow-[0_0_24px_rgba(181,255,43,0.35)] cursor-pointer"
            id="nav-contact-btn"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 group-hover:bg-neutral-900" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent group-hover:bg-neutral-900 transition-colors duration-300" />
            </span>
            <span>Contact Me</span>
          </a>
        </div>

        <button
          className="md:hidden text-white hover:text-accent p-1.5 focus:outline-none"
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-surface-dark/98 backdrop-blur-sm md:hidden"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col bg-[#000000a5] items-center justify-center h-full gap-8 text-lg font-semibold text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 bg-accent text-black px-8 py-3 rounded-full font-black uppercase text-sm tracking-wider"
              onClick={() => setMobileOpen(false)}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export { Logo };
