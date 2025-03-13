'use client';

import Image from 'next/image';
import Link from 'next/link';

import AnimatedButton from '@/components/shared/button/AnimatedButton';

const OurApproach = () => {
  return (
    <div className="bg-[#CDEA68]">
      {/* Header section */}
      <div className="py-10 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-black/15">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl w-full lg:w-11/12">
          Bangladesh Associate of IT Solution is your trusted partner for comprehensive digital
          solutions. We specialize in creating tailored websites, managing domains, and providing
          expert IT services to help businesses grow in the digital world.
        </h2>
      </div>

      {/* What you can expect section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 pb-12 sm:pb-16 md:pb-20 lg:pb-28 pt-4 lg:pt-6 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-black/15 gap-8 md:gap-12 lg:gap-28 text-lg md:text-xl lg:text-2xl">
        <div className="col-span-1 lg:col-span-4 mb-6 md:mb-0">
          <p>What you can expect:</p>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="pb-4 sm:pb-6 md:pb-8">
            We provide customized development solutions to help your business present ideas
            effectively to stakeholders, clients, or teams. Whether it&#39;s a small demo or a
            large-scale project, we ensure quality and impact.
          </p>
          <p>
            We believe that a combination of strategy and thoughtful design makes your technology
            clear, effective, and engaging.
          </p>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-2 mt-8 md:mt-0 md:flex md:flex-col md:justify-end">
          <p className="pb-2 md:pb-4">S:</p>
          <p className="flex flex-col gap-0.5">
            <span>
              <Link className="hover-underline-animation" href={'/'}>
                Instagram
              </Link>
            </span>
            <span>
              <Link className="hover-underline-animation" href={'/'}>
                Behance
              </Link>
            </span>
            <span>
              <Link className="hover-underline-animation" href={'/'}>
                Facebook
              </Link>
            </span>
            <span>
              <Link className="hover-underline-animation" href={'/'}>
                Linkedin
              </Link>
            </span>
          </p>
        </div>
      </div>

      {/* Our approach section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 px-4 sm:px-8 md:px-12 lg:px-16 py-8 lg:py-10">
        <div className="order-2 md:order-1">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">Our approach:</p>
          <div className="mt-4">
            <AnimatedButton text="Read More" href="/about" />
          </div>
        </div>
        <div className="order-1 md:order-2 mb-6 md:mb-0">
          <Image
            src={'/ap1.jpg'}
            alt="baits' office"
            width={500}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
