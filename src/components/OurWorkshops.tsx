import Image from "next/image";
import { Check } from "lucide-react";

import { ArrowCircleRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface ChecklistItem {
  bold: string;
  description: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    bold: "Be among the top 1% professionals to avoid being laid off.",
    description:
      "Earn money with Artificial Intelligence seamlessly. Earn money with Artificial Intelligence seamlessly.",
  },
  {
    bold: "No technical AI knowledge required to master AI tools.",
    description: "Learn Claude and other AI tools from scratch.",
  },
  {
    bold: "Proven to reduce your work by 2 hours daily.",
    description:
      "With the help of Generative AI tools, you will be able to work more in less time.",
  },
  {
    bold: "Learn to code using AI with Zero technical knowledge.",
    description:
      "With the help of Claude courses, you will be able to code within minutes effortlessly.",
  },
];

/**
 * "Our Workshops" section: a static (non-tabbed) black rounded card on a
 * white page background, showcasing the single "AI Tools Workshop" offering
 * alongside a promo image.
 */
export function OurWorkshops() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "rounded-[32px] bg-black px-6 py-8 md:rounded-[50px] md:px-12 md:py-10",
          )}
        >
          <h2 className="text-center text-3xl font-semibold text-white md:text-[36px]">
            Our Workshops
          </h2>

          <div className="mt-8 flex flex-col gap-10 lg:mt-12 lg:flex-row lg:items-center lg:gap-14">
            <div className="flex flex-1 flex-col gap-8 text-left">
              <h3 className="text-[32px] font-bold leading-tight text-white md:text-[36px]">
                AI Tools Workshop
              </h3>

              <ul className="flex flex-col gap-5">
                {CHECKLIST_ITEMS.map((item) => (
                  <li key={item.bold} className="flex items-start gap-3">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[#92FDE7] md:h-[18px] md:w-[18px]"
                      strokeWidth={3}
                    />
                    <span className="text-base leading-relaxed">
                      <span className="font-bold text-white">
                        {item.bold}
                      </span>{" "}
                      <span className="text-[#A8ACB5]">
                        {item.description}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#register"
                className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-[#92FDE7] bg-transparent px-7 py-3 text-lg text-white transition-colors hover:bg-white/5 md:text-xl"
              >
                Register now
                <ArrowCircleRightIcon className="h-5 w-5 text-[#92FDE7]" />
              </a>
            </div>

            <div className="flex-1">
              <Image
                src="/images/be10x/Red-Abstract-YouTube-Thumbnail-7.jpg"
                alt="AI won't replace you, a person using AI will — join the 3 hour AI Tools Workshop"
                width={1024}
                height={576}
                className="h-auto w-full rounded-2xl md:rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
