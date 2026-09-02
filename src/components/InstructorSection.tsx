import Image from "next/image";

const PANELS = [
  { src: "/images/dr-expert/instructor-what.png", alt: "What" },
  { src: "/images/dr-expert/instructor-ai.png", alt: "AI" },
  { src: "/images/dr-expert/instructor-learn.png", alt: "Learn?" },
];

export function InstructorSection() {
  return (
    <section id="instructor" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="grid grid-cols-3 gap-2 overflow-hidden rounded-2xl md:gap-3">
          {PANELS.map((panel) => (
            <Image
              key={panel.alt}
              src={panel.src}
              alt={panel.alt}
              width={1254}
              height={1254}
              className="aspect-square w-full object-cover"
            />
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-[#0a0a0a] md:text-4xl">
            Taught by a practitioner, not a theorist
          </h2>
          <p className="mt-4 text-lg text-[#4b4f58]">
            Every lesson in Decode AI is built from tools your instructor
            uses daily — no filler, no fluff, just the exact workflows that
            make AI genuinely useful at work.
          </p>
        </div>
      </div>
    </section>
  );
}
