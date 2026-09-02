import { ArrowCircleRightIcon } from "@/components/icons";

export function EnrollCta() {
  return (
    <section id="enroll" className="bg-be10x-grid bg-[#0a0a0a] py-16 text-white md:py-20">
      <div className="mx-auto max-w-[640px] px-4 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Ready to Decode AI?
        </h2>
        <p className="mt-4 text-lg text-white/70">
          7 modules, 47 lessons, 4 hours — one course to actually put AI to
          work.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-[#febf1b] px-8 py-4 text-lg font-semibold text-[#0a0a0a] transition-transform hover:scale-[1.02]"
          >
            Enroll Now for ₹499
            <ArrowCircleRightIcon className="h-[1em] w-[1em]" />
          </a>
          <span className="text-sm text-white/50">
            <span className="line-through">₹2,999</span> · Certificate
            included
          </span>
        </div>
      </div>
    </section>
  );
}
