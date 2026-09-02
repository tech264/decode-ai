"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Logo {
  src: string;
  alt: string;
}

const LOGOS: Logo[] = [
  { src: "/images/be10x/download-4-1.png", alt: "Partner organization logo 1" },
  { src: "/images/be10x/download-1-1-1.png", alt: "Partner organization logo 2" },
  {
    src: "/images/be10x/download-3-e1767892208960-1-1.png",
    alt: "Partner organization logo 3",
  },
  { src: "/images/be10x/download-2-1-1.png", alt: "Partner organization logo 4" },
];

export function LogoStrip() {
  const [startIndex, setStartIndex] = useState(0);

  const goPrev = () => {
    setStartIndex((prev) => (prev - 1 + LOGOS.length) % LOGOS.length);
  };

  const goNext = () => {
    setStartIndex((prev) => (prev + 1) % LOGOS.length);
  };

  const orderedLogos = [
    ...LOGOS.slice(startIndex),
    ...LOGOS.slice(0, startIndex),
  ];

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-bold text-black md:text-3xl lg:text-[40px]">
          Trusted by leading organizations across{" "}
          <span className="text-[#6366F1]">industries</span>
        </h2>

        <div className="mt-10 flex items-center justify-center gap-4 md:gap-8">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous logo"
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900",
            )}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex flex-1 flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {orderedLogos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={60}
                className="h-10 w-auto object-contain md:h-12"
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next logo"
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900",
            )}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
