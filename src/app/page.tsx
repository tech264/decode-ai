import { HeroSection } from "@/components/HeroSection";
import { InstructorSection } from "@/components/InstructorSection";
import { WhyThisCourse } from "@/components/WhyThisCourse";
import { Syllabus } from "@/components/Syllabus";
import { Testimonials } from "@/components/Testimonials";
import { CountdownTimer } from "@/components/CountdownTimer";
import { FAQ } from "@/components/FAQ";
import { EnrollCta } from "@/components/EnrollCta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InstructorSection />
      <WhyThisCourse />
      <Syllabus />
      <Testimonials />
      <CountdownTimer />
      <FAQ />
      <EnrollCta />
    </>
  );
}
