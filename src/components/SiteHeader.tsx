"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Syllabus", href: "#syllabus" },
  { label: "Instructor", href: "#instructor" },
  { label: "Testimonials", href: "#testimonials" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-[93px] items-center bg-transparent px-6 backdrop-blur-sm lg:px-10">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between">
        {/* Logo */}
        <a href="#" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/dr-expert/logo.png"
            alt="Dr. Expert Academy"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-normal text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href="#enroll"
            className="hidden rounded-full bg-[#febf1b] px-5 py-3 text-[15px] font-semibold text-[#0a0a0a] lg:inline-block"
          >
            Enroll for ₹499
          </a>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
            className="text-white lg:hidden"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/60 transition-opacity duration-300 lg:hidden",
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={cn(
            "fixed right-0 top-0 h-full w-4/5 max-w-sm bg-[#0a0a0a] transition-transform duration-300",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-6 py-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/dr-expert/logo.png"
              alt="Dr. Expert Academy"
              className="h-10 w-auto"
            />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="text-white"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-6 pb-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-white/10 py-3 text-lg font-normal text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#enroll"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 inline-block w-fit rounded-full bg-[#febf1b] px-5 py-3 text-[15px] font-semibold text-[#0a0a0a]"
            >
              Enroll for ₹499
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
