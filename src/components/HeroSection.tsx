import Image from "next/image";
import { ArrowCircleRightIcon } from "@/components/icons";

const HIGHLIGHTS = [
  "Claude, ChatGPT & modern AI tools",
  "Prompt engineering, from basics to advanced",
  "Build websites & presentations with AI",
];

export function HeroSection() {
  return (
    <section className="bg-be10x-grid relative flex min-h-screen flex-col overflow-hidden bg-[#0a0a0a] pt-[93px] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[560px] w-[560px] rounded-full bg-[#febf1b]/10 blur-[140px]"
      />
      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 items-center px-6 py-10 lg:px-10">
        <div className="w-full lg:grid lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          {/* Left: copy */}
          <div>
            <span className="inline-block rounded-full border border-[#febf1b]/30 bg-[#febf1b]/10 px-4 py-1.5 text-sm font-semibold text-[#febf1b]">
              7 Modules · 4 Hours · Certificate Included
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[64px]">
              Decode <span className="text-[#febf1b]">AI</span> in Just 4
              Hours
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/60">
              A complete, hands-on course from Dr. Expert Academy — learn
              Claude, prompt engineering, AI website creation, NotebookLM
              research, AI presentations, and AI in Google Workspace.
            </p>
            <ul className="mt-7 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/85">
                  <span className="mt-[7px] h-[8px] w-[8px] shrink-0 rounded-full bg-[#febf1b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#enroll"
                className="inline-flex items-center gap-2 rounded-full bg-[#febf1b] px-8 py-4 text-lg font-semibold text-[#0a0a0a] shadow-[0_0_40px_-8px_rgba(254,191,27,0.6)] transition-transform hover:scale-[1.02]"
              >
                Enroll Now for ₹499
                <ArrowCircleRightIcon className="h-[1em] w-[1em]" />
              </a>
              <span className="text-sm text-white/40 line-through">
                ₹2,999
              </span>
            </div>
          </div>

          {/* Right: banner */}
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#febf1b]/20 to-transparent blur-2xl" />
            <Image
              src="/images/dr-expert/course-banner.jpg"
              alt="Decode AI course banner"
              width={1280}
              height={720}
              className="relative w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/60"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
