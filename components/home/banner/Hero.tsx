import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="px-16 ">
      <div className="py-32 border-b border-black/15">
        <h1 className="text-9xl font-bold text- up tracking-tight ">
          Designing Digital <br />
          Experiences that <br />
          WOW
          {/* <span className="underline underline-offset-1 ">WOW!</span> */}
        </h1>
      </div>
      <div className="flex items-center justify-between text-xl font-normal py-4">
        <h2 className="">For public and private companies</h2>
        <h2 className="">From the first pitch to IPO</h2>

        <button className="uppercase flex items-center justify-center gap-2">
          <p className="border border-black/15 rounded-full py-2 px-4">
            Start The Project
          </p>
          <p className="border border-black/15 rounded-full p-2.5">
            <ArrowUpRight />
          </p>
        </button>
      </div>
      <div className="text-center pt-10">
        <p className="capitalize opacity-45">Scroll Down</p>
      </div>
    </div>
  );
};

export default Hero;
