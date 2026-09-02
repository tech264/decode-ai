import Image from "next/image";

const CARDS = [
  {
    image: "/images/dr-expert/instructor-what.png",
    heading: "What You'll Learn",
    description:
      "Claude, prompt engineering, AI website creation, NotebookLM research, AI presentations, and AI in Google Workspace — 7 modules, 47 lessons, all hands-on.",
  },
  {
    image: "/images/dr-expert/instructor-ai.png",
    heading: "Why AI",
    description:
      "AI is already changing how every professional works. The people who learn to use it well — not just talk about it — are the ones who get the edge.",
  },
  {
    image: "/images/dr-expert/instructor-learn.png",
    heading: "Why Learn This",
    description:
      "No filler, no theory-only slides. Just the exact tools and workflows a working AI practitioner uses daily, taught in 4 focused hours.",
  },
];

export function WhyThisCourse() {
  return (
    <section className="bg-[#0a0a0a] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.heading}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-[#febf1b]/30"
            >
              <Image
                src={card.image}
                alt={card.heading}
                width={1254}
                height={1254}
                className="aspect-square w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {card.heading}
                </h3>
                <p className="mt-2 text-white/60">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
