import OurApproach from "@/components/home/approach/OurApproach";
import Hero from "@/components/home/banner/Hero";
import ClientLogo from "@/components/home/clientLogo/ClientLogo";
import Featured from "@/components/home/FeaturedProjects/Featured";
import MarqueeText from "@/components/home/marquee/MarqueeText";
import ClientsReviews from "@/components/home/review/ClientsReviews";
import ServiceSection from "@/components/home/ServiceSection/ServiceSection";
import StartProject from "@/components/home/StartProject/StartProject";
import StatsSection from "@/components/home/StatsSection/StatsSection";

const page = () => {
  return (
    <div className="">
      <Hero />
      <ClientLogo />
      <MarqueeText text={"WE are baits."} />
      <OurApproach />
      <StatsSection />
      <ServiceSection />
      <Featured />
      <ClientsReviews />
      <StartProject />
    </div>
  );
};

export default page;
