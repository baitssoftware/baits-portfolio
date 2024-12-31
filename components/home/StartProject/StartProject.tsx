import AnimatedButton from "@/components/shared/button/AnimatedButton";

const StartProject = () => {
  return (
    <div className="h-[120vh] bg-[#CDEA68] flex items-center justify-center uppercase text-center">
      <div className="">
        <h2 className="text-[18rem] leading-[13rem] text-c font-bold heading-text">
          <p className="">Ready</p>
          <p className="">to start</p>
          <p className="">the project?</p>
        </h2>
        <div className="mt-16 flex items-center justify-center gap-6">
          <AnimatedButton text="Start the project" href="/contact" />

          <p className=" text-xl">OR</p>
          <AnimatedButton
            text="info@baits.com"
            href="/"
            className="bg-transparent border border-black/45 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default StartProject;
