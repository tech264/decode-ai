import { cn } from "@/lib/utils";

export function AboutUs() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl text-black md:text-5xl lg:text-[55px]">
          About Us
        </h2>

        <div className="mt-10 lg:mt-14 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="relative mx-auto max-w-[700px]">
            <div className="relative border-2 border-black p-4">
              <div className="space-y-4">
                <p className="text-base text-black">
                  <strong className="font-bold">Dr. Expert Academy</strong> builds
                  hands-on, practitioner-led courses that help professionals
                  put AI to work — not just learn the theory behind it.
                </p>
                <p className="text-base text-black">
                  Decode AI covers the exact tools and workflows used daily:
                  Claude, prompt engineering, AI-built websites, NotebookLM
                  research, AI presentations, and Google Workspace AI.
                </p>
                <p className="text-base text-black">
                  No prior technical knowledge required — just 4 focused
                  hours to a genuinely useful AI skill set.
                </p>
              </div>

              <h3 className="mt-8 text-3xl font-semibold text-black md:text-[40px]">
                Join us
              </h3>
              <p className="mt-4 text-base text-black">
                Seats are limited for every cohort of Decode AI.
              </p>

              <a
                href="#enroll"
                className={cn(
                  "mt-6 inline-block border-2 border-black bg-white px-8 py-4 text-base text-black",
                  "transition-colors hover:bg-black hover:text-white"
                )}
              >
                Enroll Now
              </a>

              <div
                aria-hidden="true"
                className="absolute -right-2 top-0 h-full w-2 bg-[#febf1b]"
              />
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <img
              src="/images/be10x/Press.svg"
              alt=""
              className="mx-auto h-auto w-full max-w-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
