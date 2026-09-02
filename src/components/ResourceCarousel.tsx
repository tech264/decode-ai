"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, ChevronLeft, ChevronRight, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResourceCard {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

const CARDS: ResourceCard[] = [
  {
    title: "Top 10 Ways To Excel With AI In Your Career And Business",
    date: "July 14, 2025",
    category: "Excel With AI",
    excerpt:
      "AI is a technology that's changing the way you think, work, and communicate, as well as how you develop professionally and personally. Whether you're an established entrepreneur or are attempting to climb the corporate ladder, the proper application of AI will open doors previously unattainable to gain access to. The goal is not to replace you, but to improve your capabilities.",
    image:
      "/images/be10x/Top-10-Ways-To-Excel-With-AI-In-Your-Career-And-Business.png",
  },
  {
    title: "Your Guide to the Be10x AI Mastery Course: Is It Right for You?",
    date: "July 9, 2025",
    category: "AI Tools, Education",
    excerpt:
      "Artificial Intelligence (AI) is no longer a buzzword but a mastery pack that everyone needs. By 2025, AI tools will be used in every sector, such as marketing, teaching, health care, innovation, business analytics, and client assistance. Knowing how to utilize them is becoming imperative for development, innovation, and competitiveness.",
    image:
      "/images/be10x/Your-Guide-to-the-Be10x-AI-Mastery-Course-Is-It-Right-for-You.png",
  },
  {
    title: "Why You Should Attend The Be10x AI Tools Workshop In 2025",
    date: "July 3, 2025",
    category: "AI Tools, Artificial Intelligence",
    excerpt:
      "Artificial Intelligence has become a necessity for taking your career to new heights, as well as securing your job. Knowing how to utilize AI tools is a valuable asset for anyone, whether you are a student seeking to stay ahead of your peers, an employee looking to advance, or a business owner seeking to increase efficiency and productivity.",
    image:
      "/images/be10x/Why-You-Should-Attend-The-Be10x-AI-Tools-Workshop-In-2025.jpg",
  },
  {
    title: "Be10x vs Other Online Courses: Reviews That Matter",
    date: "June 2025",
    category: "Reviews",
    excerpt:
      "See how Be10x compares to other online course platforms and why thousands of professionals trust it to build real, job-ready AI skills.",
    image:
      "/images/be10x/Be10x-vs-Other-Online-Courses-Reviews-That-Matter.png",
  },
  {
    title: "Everything You Need to Know About Be10X in 2025",
    date: "June 2025",
    category: "About Be10x",
    excerpt:
      "A complete overview of what Be10x offers in 2025 — workshops, mastery courses, and the outcomes professionals can expect.",
    image:
      "/images/be10x/Everything-You-Need-to-Know-About-Be10X-in-2025.png",
  },
];

const AUTOPLAY_INTERVAL_MS = 5000;

export function ResourceCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % CARDS.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const goPrev = () => {
    setIndex((i) => (i - 1 + CARDS.length) % CARDS.length);
  };

  const goNext = () => {
    setIndex((i) => (i + 1) % CARDS.length);
  };

  return (
    <section className="bg-black rounded-[32px] md:rounded-[50px] p-8 md:p-12">
      <h2 className="text-3xl md:text-4xl lg:text-[36px] font-semibold text-white leading-tight">
        From the World of
        <br />
        AI Tools &amp; Claude
      </h2>

      <div className="relative mt-8 md:mt-10">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous cards"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md transition-opacity hover:opacity-80 md:h-12 md:w-12"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out [--visible:1] md:[--visible:2] lg:[--visible:3]"
            style={{
              transform: `translateX(calc(${index} * -100% / var(--visible)))`,
            }}
          >
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="w-[calc(100%/var(--visible))] shrink-0 px-3"
              >
                <ResourceCardItem card={card} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next cards"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md transition-opacity hover:opacity-80 md:h-12 md:w-12"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>
    </section>
  );
}

function ResourceCardItem({ card }: { card: ResourceCard }) {
  return (
    <article className="flex h-full flex-col rounded-[32px] md:rounded-[48px] bg-[#0A4D7A] p-4 pb-6">
      <div className="relative aspect-video w-full overflow-hidden rounded-3xl">
        <Image
          src={card.image}
          alt={card.title}
          width={600}
          height={338}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm md:h-10 md:w-10">
          <Image
            src="/images/be10x/be10x-logowhite-2.png"
            alt="be10x"
            width={24}
            height={24}
            className="h-5 w-5 object-contain md:h-6 md:w-6"
          />
        </div>
      </div>

      <h3 className="mt-4 line-clamp-2 text-[21px] font-semibold text-white">
        {card.title}
      </h3>

      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-base text-[#92FDE7]">
        <span className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          {card.date}
        </span>
        <span className="flex items-center gap-1.5">
          <Tag className="h-4 w-4" />
          {card.category}
        </span>
      </div>

      <p className="mt-3 line-clamp-3 text-base text-white">{card.excerpt}</p>

      <a
        href="#"
        className={cn(
          "mt-3 inline-block w-fit text-sm text-[#92FDE7] hover:underline",
        )}
      >
        Read More...
      </a>
    </article>
  );
}
