"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

const thumbnails = [
  "/images/be10x/WhatsApp-Image-2023-11-24-at-22.29.48_d4e7eee4.jpg",
  "/images/be10x/WhatsApp-Image-2023-11-24-at-22.29.48_25662f4a.jpg",
  "/images/be10x/WhatsApp-Image-2023-11-24-at-22.29.48_a3382fc9.jpg",
  "/images/be10x/5-insane-ai-tools-to-10x-product-195.jpg",
  "/images/be10x/niR8cAxJY-4-HD.webp",
  "/images/be10x/Qcxlh7GW1eQ-HD.webp",
  "/images/be10x/XAV8oEFqmF0-HD.webp",
  "/images/be10x/XvofmELxr70-HD.webp",
  "/images/be10x/9perDWyxNgo-HD.webp",
  "/images/be10x/iYxI4BIhHag-HD.webp",
  "/images/be10x/ov0QPm2TIko-HD.webp",
  "/images/be10x/c9fyZnBgreA-HD.webp",
  "/images/be10x/EK699kd3LkI-HD.jpg",
  "/images/be10x/5QFPSYNcb88-HD.webp",
  "/images/be10x/x20mAXebsLc-HD.webp",
] as const;

// Cards visible at once per breakpoint. Used to compute how many "pages"
// (and therefore pagination dots) the carousel advances through.
const VISIBLE_DESKTOP = 3;

export function VideoTestimonials() {
  const [index, setIndex] = useState(0);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const pageCount = Math.ceil(thumbnails.length / VISIBLE_DESKTOP);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % pageCount);
    }, 5000);
    return () => clearInterval(id);
  }, [pageCount]);

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-2xl md:text-3xl lg:text-[40px] font-semibold text-black">
          Testimonials
        </h2>

        <div className="mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * (100 / VISIBLE_DESKTOP)}%)` }}
          >
            {thumbnails.map((src, i) => (
              <div key={src} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3">
                <button
                  type="button"
                  onClick={() => setActiveCard((current) => (current === i ? null : i))}
                  className={cn(
                    "group relative block w-full aspect-video overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300",
                    activeCard === i && "scale-105 ring-2 ring-offset-2 ring-black/70"
                  )}
                >
                  <Image
                    src={src}
                    alt={`Testimonial video thumbnail ${i + 1}`}
                    width={400}
                    height={225}
                    className="w-full h-auto object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-black/50">
                      <Play className="h-6 w-6 fill-white text-white" />
                    </span>
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                i === index ? "bg-black" : "bg-gray-300"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
