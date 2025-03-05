import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="py-12 sm:py-16 md:py-20 lg:py-32 border-b border-black/15">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] uppercase font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-[8rem]">
          <span className="block">Developing Digital</span>
          <span className="block">Experiences that</span>
          <span className="block">WOW</span>
        </h1>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between text-base sm:text-lg lg:text-xl font-normal py-4">
        <h2 className="md:order-1">For public and private companies</h2>
        <h2 className="md:order-2">From the first pitch to IPO</h2>

        <button className="uppercase flex items-center justify-center gap-2 md:order-3 self-start md:self-auto">
          <p className="border border-black/15 rounded-full py-1.5 sm:py-2 px-3 sm:px-4 text-sm sm:text-base">
            Start The Project
          </p>
          <p className="border border-black/15 rounded-full p-2 sm:p-2.5">
            <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </p>
        </button>
      </div>
      <div className="text-center pt-6 sm:pt-8 lg:pt-10">
        <p className="capitalize opacity-0">Scroll Down</p>
      </div>
    </div>
  );
};

export default Hero;
