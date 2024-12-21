import Marquee from "react-fast-marquee";

const MarqueeText = ({ text }: { text: string }) => {
  return (
    <div className="bg-[#004D43] text-white mt-10 py-20">
      <Marquee speed={170}>
        <h1 className="text-[26rem] uppercase font-black me-10 leading-[20rem] border-y border-[#12776a] overflow-hidden">
          {text}
        </h1>
      </Marquee>
    </div>
  );
};

export default MarqueeText;
