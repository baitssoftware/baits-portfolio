'use client';

import Marquee from 'react-fast-marquee';

const MarqueeText = ({ text }: { text: string }) => {
  return (
    <div className="bg-[#004D43] text-white mt-5 sm:mt-8 md:mt-10 py-8 sm:py-12 md:py-16 lg:py-20">
      <Marquee speed={170}>
        <h1 className="text-[8rem] sm:text-[12rem] md:text-[18rem] lg:text-[26rem] uppercase font-black me-5 sm:me-8 lg:me-10 leading-[7rem] sm:leading-[10rem] md:leading-[15rem] lg:leading-[20rem] border-y border-[#12776a] overflow-hidden">
          {text}
        </h1>
      </Marquee>
    </div>
  );
};

export default MarqueeText;
