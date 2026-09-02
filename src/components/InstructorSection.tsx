import Image from "next/image";

const METRICS = [
  { value: "5+", label: "Years in Tech" },
  { value: "5+", label: "Years in AI" },
  { value: "100+", label: "Companies Helped Build AI Products" },
  { value: "Tech Head", label: "Dr. Expert Academy" },
];

export function InstructorSection() {
  return (
    <section id="instructor" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: portrait on gold card */}
          <div className="relative mx-auto flex aspect-square w-full max-w-[420px] items-end justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#febf1b] to-[#e0a500]">
            <Image
              src="/images/dr-expert/instructor-portrait.png"
              alt="Instructor"
              width={819}
              height={741}
              className="w-[92%] object-contain object-bottom"
            />
          </div>

          {/* Right: bio */}
          <div>
            <span className="inline-block rounded-full bg-[#febf1b]/15 px-4 py-1.5 text-sm font-semibold text-[#a97b00]">
              Meet Your Instructor
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-[#0a0a0a] md:text-4xl">
              Taught by a practitioner, not a theorist
            </h2>
            <p className="mt-4 text-lg text-[#4b4f58]">
              Currently the Tech Head at Dr. Expert Academy, with 5+ years
              in tech and 5+ years working hands-on with AI — building
              products, not just talking about them. He&apos;s helped 100+
              companies design and ship AI-based products, and every lesson
              in Decode AI comes straight from those real-world workflows.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-black/10 bg-[#f5f5f5] p-4"
                >
                  <div className="text-2xl font-bold text-[#0a0a0a]">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-sm text-[#4b4f58]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
