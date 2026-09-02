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
    <section className="bg-[#f5f5f5] py-16 md:py-20">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.heading}
              className="overflow-hidden rounded-2xl bg-white"
            >
              <Image
                src={card.image}
                alt={card.heading}
                width={1254}
                height={1254}
                className="aspect-square w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0a0a0a]">
                  {card.heading}
                </h3>
                <p className="mt-2 text-[#4b4f58]">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
