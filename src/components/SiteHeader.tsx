"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

const NAV_LINKS: NavLink[] = [
  {
    label: "Workshops",
    href: "#",
    dropdown: [
      { label: "AI Tools Workshop", href: "#" },
      { label: "10X Techie Using AI Workshop", href: "#" },
    ],
  },
  { label: "AI Mastery", href: "#" },
  { label: "AI Tool of the Day", href: "#" },
  {
    label: "Blogs",
    href: "#",
    dropdown: [
      { label: "AI Tools", href: "#" },
      { label: "ChatGPT", href: "#" },
      { label: "Excel With AI", href: "#" },
      { label: "Marketing With AI", href: "#" },
    ],
  },
  { label: "Reviews", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-[93px] items-center justify-between bg-black px-4 sm:px-6 lg:px-10">
      {/* Logo */}
      <a href="#" className="shrink-0">
        <Image
          src="/images/be10x/be10x-logowhite-1.png"
          alt="be10x"
          width={731}
          height={438}
          className="h-10 w-auto"
          preload
        />
      </a>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-7 lg:flex">
        {NAV_LINKS.map((link) =>
          link.dropdown ? (
            <div key={link.label} className="group relative">
              <a
                href={link.href}
                className="flex items-center gap-1 text-lg font-normal text-white"
              >
                {link.label}
                <ChevronDown className="h-4 w-4" />
              </a>
              <div className="invisible absolute left-0 top-full z-50 min-w-[220px] rounded-md bg-neutral-900 py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
                {link.dropdown.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-white hover:bg-neutral-800"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-normal text-white"
            >
              {link.label}
            </a>
          )
        )}
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="hidden rounded-full bg-[#17A4F4] px-5 py-3 text-[15px] font-medium text-[#1c1c1c] lg:inline-block"
        >
          My Account
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
            "fixed right-0 top-0 h-full w-4/5 max-w-sm bg-black transition-transform duration-300",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-6 py-6">
            <Image
              src="/images/be10x/be10x-logowhite-1.png"
              alt="be10x"
              width={731}
              height={438}
              className="h-8 w-auto"
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
              <div key={link.label} className="border-b border-white/10 py-3">
                <a href={link.href} className="text-lg font-normal text-white">
                  {link.label}
                </a>
                {link.dropdown && (
                  <div className="mt-2 flex flex-col gap-2 pl-3">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-sm text-white/80"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="#"
              className="mt-6 inline-block w-fit rounded-full bg-[#17A4F4] px-5 py-3 text-[15px] font-medium text-[#1c1c1c]"
            >
              My Account
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
