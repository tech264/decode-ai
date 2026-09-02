"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface Video {
  title: string;
  duration: string;
  thumbnail: string;
}

const videos: Video[] = [
  {
    title: "10 Tips & Tricks For ChatGPT",
    duration: "31:44",
    thumbnail: "/images/be10x/Red-Abstract-YouTube-Thumbnail-7.jpg",
  },
  {
    title: "Top 5 AI Tools To Make Money",
    duration: "17:13",
    thumbnail: "/images/be10x/Red-Abstract-YouTube-Thumbnail-2.jpg",
  },
  {
    title: "5 Insane AI Tools To 10X Productivity",
    duration: "11:26",
    thumbnail: "/images/be10x/5-insane-ai-tools-to-10x-product-195.jpg",
  },
  {
    title: "From Fired to Hired: My AI Job Story",
    duration: "7:29",
    thumbnail: "/images/be10x/PowerBI-2.jpg",
  },
  {
    title: "How To Crack Job Interviews With ChatGPT",
    duration: "13:19",
    thumbnail: "/images/be10x/Red-Abstract-YouTube-Thumbnail-7.jpg",
  },
  {
    title: "Content Engine with ChatGPT",
    duration: "6:51",
    thumbnail: "/images/be10x/Red-Abstract-YouTube-Thumbnail-2.jpg",
  },
  {
    title: "Start a Faceless YouTube Channel",
    duration: "7:03",
    thumbnail: "/images/be10x/PowerBI-2.jpg",
  },
];

export function YoutubeShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeVideo = videos[selectedIndex];

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl md:text-3xl lg:text-[40px] font-bold text-black">
          Best of Be10X on YouTube
        </h2>

        <div className="mt-8 lg:grid lg:grid-cols-[1fr_380px] lg:gap-8">
          {/* Main video */}
          <button
            type="button"
            onClick={() => setSelectedIndex(selectedIndex)}
            className="relative block aspect-video w-full cursor-pointer overflow-hidden rounded-2xl"
          >
            <Image
              src={activeVideo.thumbnail}
              alt={activeVideo.title}
              fill
              sizes="(min-width: 1024px) 700px, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/50">
                <Play className="h-7 w-7 fill-white text-white" />
              </span>
            </div>
          </button>

          {/* Sidebar */}
          <div className="mt-6 lg:mt-0">
            <div className="flex items-center justify-between px-1 pb-3">
              <span className="font-bold text-black">@be10x</span>
              <span className="text-sm text-gray-500">9 Videos</span>
            </div>

            <div className="flex flex-col gap-2">
              {videos.map((video, index) => {
                const isActive = index === selectedIndex;
                return (
                  <button
                    key={video.title}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg border-l-4 p-2 text-left transition-colors",
                      isActive
                        ? "border-l-red-600 bg-red-50"
                        : "border-l-transparent hover:bg-gray-50"
                    )}
                  >
                    <span className="relative h-[45px] w-[80px] shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </span>
                    <span className="flex min-w-0 flex-col gap-1">
                      <span className="line-clamp-2 text-sm font-medium text-black">
                        {video.title}
                      </span>
                      <span className="text-xs text-gray-500">{video.duration}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
