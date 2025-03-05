const Hero = () => {
  return (
    <section>
      <div className="px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="py-12 sm:py-16 md:py-24 lg:py-32 border-b border-black/15">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] uppercase font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-[8rem]">
            WE ARE BAITS <br className="hidden md:block" />
            <span className="md:block">Developer</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
