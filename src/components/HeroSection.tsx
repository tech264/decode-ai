import Image from "next/image";
import { ArrowCircleRightIcon } from "@/components/icons";

const HIGHLIGHTS = [
  "Claude, ChatGPT & modern AI tools",
  "Prompt engineering, from basics to advanced",
  "Build websites & presentations with AI",
];

export function HeroSection() {
  return (
    <section className="bg-be10x-grid flex min-h-[75vh] flex-col bg-[#0a0a0a] pt-[93px] text-white">
      <div className="mx-auto flex w-full max-w-[1140px] flex-1 items-center px-4 py-10">
        <div className="w-full lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left: copy */}
          <div>
            <span className="inline-block rounded-full bg-[#febf1b]/10 px-4 py-1.5 text-sm font-semibold text-[#febf1b]">
              7 Modules · 4 Hours · Certificate Included
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-[44px] lg:text-[52px] lg:leading-[1.15]">
              Decode <span className="text-[#febf1b]">AI</span> in Just 4
              Hours
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/70">
              A complete, hands-on course from Dr. Expert Academy — learn
              Claude, prompt engineering, AI website creation, NotebookLM
              research, AI presentations, and AI in Google Workspace.
            </p>
            <ul className="mt-6 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/90">
                  <span className="mt-[7px] h-[8px] w-[8px] shrink-0 rounded-full bg-[#febf1b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#enroll"
                className="inline-flex items-center gap-2 rounded-full bg-[#febf1b] px-7 py-3.5 text-lg font-semibold text-[#0a0a0a] transition-transform hover:scale-[1.02]"
              >
                Enroll Now for ₹499
                <ArrowCircleRightIcon className="h-[1em] w-[1em]" />
              </a>
              <span className="text-sm text-white/50 line-through">
                ₹2,999
              </span>
            </div>
          </div>

          {/* Right: banner */}
          <div className="relative mt-10 lg:mt-0">
            <Image
              src="/images/dr-expert/course-banner.jpg"
              alt="Decode AI course banner"
              width={1280}
              height={720}
              className="w-full rounded-2xl shadow-2xl shadow-black/40"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
