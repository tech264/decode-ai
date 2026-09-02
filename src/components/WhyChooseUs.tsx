import { Check } from "lucide-react"

const CHECKLIST_ITEMS = [
  "100k+ Professionals Enrolled in our Workshops",
  "Learn from IIT Kharagpur Alumni",
  "Get Workshop Participation Certificate",
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
            Be10X is among top-rated ed-tech companies providing Online
            Workshops with Certificates to the working professionals.
          </p>
          <p className="text-base text-black">
            Starting from Artificial Intelligence Online Courses for
            beginners, we have expanded our array to MS Excel Workshops,
            Power BI workshops, and MS PowerPoint Workshops.
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
