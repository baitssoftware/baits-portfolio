import Marquee from "react-fast-marquee";

const MarqueeText = () => {
  return (
    <div className="bg-[#004D43] text-white mt-10 h-[26rem] overflow-hidden">
      <Marquee speed={120}>
        <h1 className="text-[26rem] uppercase font-black me-10">
          WE are baits.{" "}
        </h1>
      </Marquee>
    </div>
  );
};

export default MarqueeText;
