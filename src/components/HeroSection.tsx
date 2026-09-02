"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowCircleRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface Slide {
  accent: string;
  headline: [string, string];
  bullets: string[];
  joinHeading: string;
}

const slides: Slide[] = [
  {
    accent: "#17A4F4",
    headline: [
      "Maximize Your Productivity with ",
      "Office using AI Workshop",
    ],
    bullets: [
      "No Prior MS Office Knowledge Required",
      "Solve Real Life Problems that you face daily with Microsoft Office",
    ],
    joinHeading: "Join our Office using AI Workshop today!",
  },
  {
    accent: "#FF4500",
    headline: [
      "Become 10X More Productive with our ",
      "ChatGPT & AI Tools Workshop",
    ],
    bullets: [
      "Learn the basics of prompt engineering to create a presentation using AI.",
      "Generate amazing presentations with AI within 10 mins",
    ],
    joinHeading: "Join our ChatGPT & AI Tools Workshop today!",
  },
  {
    accent: "#FFD700",
    headline: ["Boost Your Skills with our ", "Power BI Mastery Workshop"],
    bullets: [
      "Create any kind of presentable reports under 10 seconds",
      "Combine data from over 30 sources (incl. Excel, SQL, etc) using the power of automation",
    ],
    joinHeading: "Join our Power BI Mastery Workshop today!",
  },
  {
    accent: "#FF4500",
    headline: [
      "Become 10X More Productive with our ",
      "Claude & AI Tools Workshop",
    ],
    bullets: [
      "Learn the basics of prompt engineering to create a presentation using AI.",
      "Generate amazing presentations with AI within 10 mins",
    ],
    joinHeading: "Join our Claude & AI Tools Workshop today!",
  },
];

const AUTOPLAY_INTERVAL_MS = 5000;

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-be10x-grid bg-black text-white">
      <div className="mx-auto max-w-[1140px] px-4 pt-24 pb-6 md:pt-[90px] md:pb-[25px]">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left column: headline + bullets */}
          <div className="relative">
            {slides.map((slide, i) => (
              <div
                key={slide.joinHeading}
                aria-hidden={i !== index}
                className={cn(
                  "transition-opacity duration-500 ease-in-out",
                  i === index
                    ? "relative opacity-100"
                    : "pointer-events-none absolute inset-0 opacity-0"
                )}
              >
                <h2 className="text-4xl font-semibold leading-tight text-white md:text-[44px] lg:text-[55px] lg:leading-[71.5px]">
                  {slide.headline[0]}
                  <span style={{ color: slide.accent }}>
                    {slide.headline[1]}
                  </span>
                </h2>
                <ul className="mt-6 space-y-4">
                  {slide.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-[18px] text-white"
                    >
                      <span
                        className="mt-[7px] h-[10px] w-[10px] shrink-0 rounded-full"
                        style={{ backgroundColor: slide.accent }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right column: join heading + register button */}
          <div className="relative mt-12 lg:mt-0">
            {slides.map((slide, i) => (
              <div
                key={slide.joinHeading}
                aria-hidden={i !== index}
                className={cn(
                  "flex flex-col items-center gap-6 text-center transition-opacity duration-500 ease-in-out",
                  i === index
                    ? "relative opacity-100"
                    : "pointer-events-none absolute inset-0 opacity-0"
                )}
              >
                <h3 className="text-2xl font-semibold text-white md:text-[32px] lg:text-[36px]">
                  {slide.joinHeading}
                </h3>
                <Link
                  href="#"
                  style={{ borderColor: slide.accent }}
                  className="inline-flex items-center gap-2 rounded-full border-[3px] px-6 py-3 text-lg font-medium text-white transition-colors duration-500 lg:px-[35px] lg:py-[12px] lg:text-[25px]"
                >
                  Register Now
                  <ArrowCircleRightIcon className="h-[1em] w-[1em]" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.joinHeading}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={cn(
                "h-[9px] w-[9px] rounded-full transition-colors duration-300",
                i === index ? "bg-white" : "bg-white/30"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
