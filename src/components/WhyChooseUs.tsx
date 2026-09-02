import { Check } from "lucide-react"

const CHECKLIST_ITEMS = [
  "7 modules, 47 lessons, built around real workflows",
  "Taught by an AI practitioner, not a theorist",
  "Certificate of completion included",
] as const

export function WhyChooseUs() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center px-4 text-center">
        <h2 className="text-3xl font-black text-black md:text-5xl lg:text-[55px]">
          Why Choose Us?
        </h2>

        <div className="mt-6 flex max-w-[900px] flex-col gap-4">
          <p className="text-base text-black">
            Dr. Expert Academy built Decode AI for people who want to
            actually use AI at work — not just read about it.
          </p>
          <p className="text-base text-black">
            In 4 focused hours you&apos;ll go from prompt basics to building
            websites, running research, and shipping presentations with AI —
            all hands-on, no fluff.
          </p>
        </div>

        <ul className="mt-6 flex flex-col gap-2">
          {CHECKLIST_ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-base font-normal text-[#4B4F58]"
            >
              <Check className="size-4 shrink-0 text-black" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <img
          src="/images/be10x/Layer.svg"
          alt=""
          width={271}
          height={322}
          className="mt-8 w-[160px] sm:w-[200px] md:w-[270px]"
        />
      </div>
    </section>
  )
}
