import MarqueeText from "@/components/home/marquee/MarqueeText";
import { ArrowUpRight } from "lucide-react";
import Slider from "./Slider";
import { slides } from "../data/sliderData";
import { AnimatedText } from "@/components/shared/animatedText/AnimatedText";

const AboutUs = () => {
  const aboutText = [
    "In Bangladesh, BAITS - means eyes.",
    "It's not just a beautiful word, but",
    "our philosophy. Almost everything",
    "that needs to be communicated is",
    "better shown than explained.",
  ];
  const aboutText2 = [
    "We believe a great presentation",
    "evokes interest and drives business",
    "results far better than any saying",
    "can. Hence, we founded ochi to help",
    "you persuade colleagues and clients",
    "by creating eye-opening",
    "presentations.",
  ];
  const businessText = [
    "We save businesses from ugly",
    "and ineffective presentations.",
  ];
  const businessText02 = ["We are BAITS developer:"];
  const businessText03 = [
    "The team of designers, storytellers,",
    "and passionate collaborators, who",
    "work together to create industry-",
    "shifting presentations that win",
    "people's hearts and minds.",
  ];
  const businessText04 = [
    "And we strive to become one of the",
    "most recognizable & influential",
    "presentation agencies of the time",
    "who does that.",
  ];
  return (
    <div className="">
      <div className="grid grid-cols-8 pb-28 pt-6 px-16  gap-28 text-2xl">
        <div className="col-span-4">
          <p className="">About Us:</p>
        </div>
        <div className="col-span-2">
          <AnimatedText text={aboutText} className=" pb-8 text-2xl" />
          <AnimatedText text={aboutText2} className=" pb-8 text-2xl" />
        </div>
        <div className="col-span-2 text-end ms-auto">
          <button className="uppercase flex items-center justify-center gap-2">
            <p className="border border-black/15 rounded-full py-2 px-4">
              Our Work
            </p>
            <p className="border border-black/15 rounded-full p-2.5">
              <ArrowUpRight />
            </p>
          </button>
        </div>
      </div>
      <div className=" border-b border-black/15 pb-6">
        <AnimatedText text={businessText} className="text-7xl w-7/12 px-16 " />
      </div>
      <div className="grid grid-cols-8 pb-28 pt-6 px-16 gap-28 text-2xl">
        <div className="col-span-4">
          <AnimatedText text={businessText02} className="text-2xl" />
        </div>
        <div className="col-span-2">
          <AnimatedText text={businessText03} className=" pb-8 text-2xl" />
          <AnimatedText text={businessText04} className=" pb-8 text-2xl" />
        </div>
      </div>
      <div
        className="h-screen mx-16 rounded-3xl"
        style={{
          background: "url(/team.jpg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className=" mt-16">
        <MarqueeText text={"WE are baits."} />
        <Slider slides={slides} />
      </div>
    </div>
  );
};

export default AboutUs;
