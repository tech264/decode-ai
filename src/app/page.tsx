import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { InstructorSection } from "@/components/InstructorSection";
import { WhyThisCourse } from "@/components/WhyThisCourse";
import { Syllabus } from "@/components/Syllabus";
import { AboutUs } from "@/components/AboutUs";
import { Testimonials } from "@/components/Testimonials";
import { EnrollCta } from "@/components/EnrollCta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <InstructorSection />
      <WhyThisCourse />
      <Syllabus />
      <AboutUs />
      <Testimonials />
      <EnrollCta />
    </>
  );
}
