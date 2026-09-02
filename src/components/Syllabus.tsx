"use client";

import { useState } from "react";
import { ChevronDown, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionCta } from "@/components/SectionCta";

interface Module {
  title: string;
  lessons: string[];
}

const MODULES: Module[] = [
  { title: "Welcome", lessons: ["Welcome to the course!"] },
  {
    title: "Introduction to AI",
    lessons: [
      "Introduction",
      "How modern AI tools work",
      "Getting started with AI",
      "What in this course?",
    ],
  },
  {
    title: "Prompt Engineering",
    lessons: [
      "What is Prompt Engineering?",
      "Basic vs advanced prompting",
      "Giving AI the right context",
      "Role, task, context & output formats",
    ],
  },
  {
    title: "Claude AI",
    lessons: [
      "Introduction to Claude",
      "Setting up and navigating Claude",
      "Writing & content creation",
      "Research and information analysis",
      "Claude SKILL",
      "Claude in chrome & google",
    ],
  },
  {
    title: "Website Creation with AI",
    lessons: [
      "Introduction",
      "How AI can build websites",
      "Planning a website with AI",
      "Generating website structure and content",
      "Creating websites without advanced coding",
      "Designing layouts and user interfaces",
      "Hosting website",
    ],
  },
  {
    title: "Research with NotebookLM",
    lessons: [
      "Introduction",
      "Adding documents and sources",
      "Asking questions about your sources",
      "Creating summaries and key insights",
      "Researching large documents",
      "Generating study materials",
      "Finding important information faster",
      "Working with youtube video's",
    ],
  },
  {
    title: "AI-Powered Presentation Creation",
    lessons: [
      "Introduction",
      "Creating presentations with AI",
      "Turning ideas into presentation structures",
      "Generating slides with AI",
      "Creating professional content",
      "AI-generated visuals and images",
      "Improving slide design",
      "Creating business & educational presentations",
    ],
  },
  {
    title: "AI in Google Workspace",
    lessons: [
      "Introduction",
      "AI + Gmail",
      "Writing and improving emails",
      "AI + Google Docs",
      "Creating and editing documents",
      "AI + Google Sheets",
      "Analyzing and working with data",
      "AI + Google Drive",
      "Building smarter Google Workspace workflows",
    ],
  },
];

const TOTAL_LESSONS = MODULES.reduce((sum, m) => sum + m.lessons.length, 0);

export function Syllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section id="syllabus" className="bg-[#0a0a0a] py-16 md:py-24">
      <div className="mx-auto max-w-[900px] px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Course Syllabus
          </h2>
          <p className="mt-3 text-lg text-white/50">
            7 modules · {TOTAL_LESSONS} lessons · 4 hours total
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {MODULES.map((module, index) => {
            const isOpen = openIndex === index;
            const isModule = index > 0;
            return (
              <div
                key={module.title}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-white/[0.03] transition-colors",
                  isOpen ? "border-[#febf1b]/30" : "border-white/10"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                >
                  <span className="flex items-center gap-3">
                    {isModule && (
                      <span className="shrink-0 rounded-full bg-[#febf1b]/15 px-2.5 py-1 text-xs font-bold text-[#febf1b]">
                        MODULE {index}
                      </span>
                    )}
                    <span className="text-lg font-semibold text-white">
                      {module.title}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-3">
                    <span className="text-sm text-white/50">
                      {module.lessons.length} lessons
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-white/50 transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  </span>
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="border-t border-white/5 px-5 pb-3 md:px-6">
                      {module.lessons.map((lesson) => (
                        <li
                          key={lesson}
                          className="flex items-center gap-3 py-3 text-white/80"
                        >
                          <PlayCircle className="h-[18px] w-[18px] shrink-0 text-[#febf1b]" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <SectionCta text="Get instant access to all 7 modules and 47 lessons." />
      </div>
    </section>
  );
}
