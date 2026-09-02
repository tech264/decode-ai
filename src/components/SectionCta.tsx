import { ArrowCircleRightIcon } from "@/components/icons";
import { CHECKOUT_URL } from "@/lib/constants";

export function SectionCta({ text }: { text: string }) {
  return (
    <div className="mt-12 flex flex-col items-center gap-4 text-center">
      <p className="text-white/60">{text}</p>
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#febf1b] px-7 py-3.5 text-lg font-semibold text-[#0a0a0a] transition-transform hover:scale-[1.02]"
      >
        Enroll Now for ₹499
        <ArrowCircleRightIcon className="h-[1em] w-[1em]" />
      </a>
    </div>
  );
}
