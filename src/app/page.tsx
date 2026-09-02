import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { OurWorkshops } from "@/components/OurWorkshops";
import { ResourceCarousel } from "@/components/ResourceCarousel";
import { AboutUs } from "@/components/AboutUs";
import { LogoStrip } from "@/components/LogoStrip";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { YoutubeShowcase } from "@/components/YoutubeShowcase";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <OurWorkshops />
      <ResourceCarousel />
      <AboutUs />
      <LogoStrip />
      <VideoTestimonials />
      <YoutubeShowcase />
    </>
  );
}
