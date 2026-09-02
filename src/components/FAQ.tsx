"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Do I need any prior AI or technical experience?",
    answer:
      "Not at all. Decode AI is designed for beginners. You can join even if you have never used an AI tool before. Everything is explained step-by-step in a practical and easy-to-follow way.",
  },
  {
    question: "Do I need to know coding?",
    answer:
      "No. You'll learn how to use AI-powered tools to create websites and complete digital tasks without needing advanced programming knowledge.",
  },
  {
    question: "What will I learn in Decode AI?",
    answer:
      "You'll learn practical skills including AI fundamentals, prompt engineering, website creation, presentations, Google Workspace, Claude, NotebookLM, content creation, productivity workflows, and real-world AI applications.",
  },
  {
    question: "Is this course only for students?",
    answer:
      "No. Decode AI is useful for students, professionals, entrepreneurs, business owners, teachers, freelancers, content creators, and anyone who wants to work more effectively with modern AI tools.",
  },
  {
    question: "Will I get practical demonstrations?",
    answer:
      "Yes. Decode AI focuses on practical learning. You'll see how tools are used through real examples and workflows that you can follow and apply yourself.",
  },
  {
    question: "How long will I have access to the course?",
    answer:
      "You get lifetime access to the course recordings. You can learn at your own pace and revisit the lessons whenever you want.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Absolutely. There is no need to rush through the course. Watch the lessons when it suits you, practice what you learn, and come back to previous lessons whenever you need a refresher.",
  },
  {
    question: "Will I need to purchase expensive AI software?",
    answer:
      "Not necessarily. The course focuses on practical tools and workflows, including options that can be used without expensive software. Some AI tools may offer optional paid features or plans, but you can learn the core concepts without investing heavily in additional software.",
  },
  {
    question: "Can I use what I learn for my business or job?",
    answer:
      "Yes. That's one of the main goals of Decode AI. You'll learn ways to use AI for research, writing, presentations, documents, content, productivity, websites, and other everyday professional tasks.",
  },
  {
    question:
      "Is Decode AI worth it if I already use ChatGPT or other AI tools?",
    answer:
      "Definitely. Knowing how to use one AI tool is just the beginning. Decode AI helps you understand a wider range of tools and, more importantly, how to combine them into practical workflows so you can get more done.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#0a0a0a] py-16 md:py-24">
      <div className="mx-auto max-w-[900px] px-6">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
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
                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-white/50 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
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
                    <p className="border-t border-white/5 px-5 py-4 text-white/60 md:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
