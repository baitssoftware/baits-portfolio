const Hero = () => {
  return (
    <section>
      <div className="px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="py-12 sm:py-16 md:py-24 lg:py-32 border-black/15">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] uppercase font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-[8rem]">
            Let&#39;s start
            <br className="hidden md:block" />
            <span className="md:block">a project together</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
