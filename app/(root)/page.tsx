import OurApproach from "@/components/home/approach/OurApproach";
import Hero from "@/components/home/banner/Hero";
import Featured from "@/components/home/FeaturedProjects/Featured";
import MarqueeText from "@/components/home/marquee/MarqueeText";
import ClientsReviews from "@/components/home/review/ClientsReviews";
import StartProject from "@/components/home/StartProject/StartProject";

const page = () => {
  return (
    <div className="">
      <Hero />
      <MarqueeText />
      <OurApproach />
      <Featured />
      <ClientsReviews />
      <StartProject />
    </div>
  );
};

export default page;
