import AnimatedButton from '@/components/shared/button/AnimatedButton';

const StartProject = () => {
  return (
    <div className="min-h-screen md:h-[110vh] lg:h-[120vh] bg-[#CDEA68] flex items-center justify-center uppercase text-center py-16 md:py-0">
      <div className="px-4">
        <h2 className="text-[4rem] sm:text-[5rem] md:text-[10rem] lg:text-[18rem] leading-[3.5rem] sm:leading-[4rem] md:leading-[8rem] lg:leading-[13rem] font-bold heading-text">
          <p className="">Ready</p>
          <p className="">to start</p>
          <p className="">the project?</p>
        </h2>
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <AnimatedButton text="Start the project" href="/contact" />

          <p className="text-base sm:text-lg lg:text-xl my-2 sm:my-0">OR</p>
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
