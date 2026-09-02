import { Quote, Star } from "lucide-react";
import { SectionCta } from "@/components/SectionCta";

interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Arsha",
    rating: 4,
    text: "The nine pillar of happiness mentioned in the first module, I really liked! This course truly helped me because I am a house wife and I have 2 kids and in all day I planned my work and then I'll do my work fast .my husband also happy with me. Thanks a lot.",
  },
  {
    name: "Athul",
    rating: 5,
    text: "The entire course was so well-structured. A much needed break from the toxic productivity culture. The work-life balance and the pillars of happiness He talked about was wonderful. Video production quality was up to the mark. Kudos to him!",
  },
  {
    name: "Ilyas",
    rating: 4,
    text: "Great insights by him! He has managed to put the core concepts of not only being productive but also to live a better life",
  },
];

function Avatar({ name }: { name: string }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#febf1b]/20 text-base font-bold text-[#febf1b]">
      {name.charAt(0)}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0a0a0a] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">
          Testimonials
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <Quote className="h-7 w-7 shrink-0 fill-[#e0483e] text-[#e0483e]" />
              <p className="mt-4 flex-1 text-white/80">{t.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar name={t.name} />
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="mt-1 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={
                          i < t.rating
                            ? "h-4 w-4 fill-[#febf1b] text-[#febf1b]"
                            : "h-4 w-4 fill-white/20 text-white/20"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <SectionCta text="Join learners who are already putting AI to work in their everyday jobs." />
      </div>
    </section>
  );
}
