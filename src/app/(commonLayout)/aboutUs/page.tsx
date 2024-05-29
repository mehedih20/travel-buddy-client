import Title from "@/components/ui/Title/Title";
import { aboutUsDescription } from "@/constants/descriptions";
import WhyUs from "@/components/ui/AboutUs/WhyUs";
import OurMission from "@/components/ui/AboutUs/OurMission";
import OurTeam from "@/components/ui/AboutUs/OurTeam";
import Contact from "@/components/ui/AboutUs/Contact";

const AboutUs = () => {
  return (
    <>
      <Title title="About Us" description={aboutUsDescription} route="About" />
      <OurMission />
      <WhyUs />
      <OurTeam />
      <Contact />
    </>
  );
};

export default AboutUs;
