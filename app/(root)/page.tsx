import OurApproach from "@/components/home/approach/OurApproach";
import Hero from "@/components/home/banner/Hero";
import Featured from "@/components/home/FeaturedProjects/Featured";
import MarqueeText from "@/components/home/marquee/MarqueeText";

const page = () => {
  return (
    <div className="">
      <Hero />
      <MarqueeText />
      <OurApproach />
      <Featured />
    </div>
  );
};

export default page;
