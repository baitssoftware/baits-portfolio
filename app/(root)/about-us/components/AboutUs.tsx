'use client';
import MarqueeText from '@/components/home/marquee/MarqueeText';
import { AnimatedText } from '@/components/shared/animatedText/AnimatedText';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { slides } from '../data/sliderData';
import Slider from './Slider';

const AboutUs = () => {
  const aboutText = [
    'In Bangladesh, BAITS - means eyes.',
    "It's not just a beautiful word, but",
    'our philosophy. Almost everything',
    'that needs to be communicated is',
    'better shown than explained.',
  ];
  const aboutText2 = [
    'We believe a great presentation',
    'evokes interest and drives business',
    'results far better than any saying',
    'can. Hence, we founded ochi to help',
    'you persuade colleagues and clients',
    'by creating eye-opening',
    'presentations.',
  ];
  const businessText = ['We save businesses from ugly', 'and ineffective presentations.'];
  const businessText02 = ['We are BAITS developer:'];
  const businessText03 = [
    'The team of designers, storytellers,',
    'and passionate collaborators, who',
    'work together to create industry-',
    'shifting presentations that win',
    "people's hearts and minds.",
  ];
  const businessText04 = [
    'And we strive to become one of the',
    'most recognizable & influential',
    'presentation agencies of the time',
    'who does that.',
  ];
  const twoPrinciples = ['We save businesses from ugly', 'and ineffective presentations.'];

  return (
    <div>
      {/* About Us section */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 pb-12 sm:pb-16 md:pb-20 lg:pb-28 pt-4 sm:pt-6 px-4 sm:px-8 md:px-12 lg:px-16 gap-8 md:gap-16 lg:gap-28 text-xl lg:text-2xl">
        <div className="col-span-1 md:col-span-2 lg:col-span-4 mb-6 md:mb-0">
          <p>About Us:</p>
        </div>
        <div className="col-span-1 md:col-span-2">
          <AnimatedText text={aboutText} className="pb-4 sm:pb-6 md:pb-8 text-xl lg:text-2xl" />
          <AnimatedText text={aboutText2} className="pb-4 sm:pb-6 md:pb-8 text-xl lg:text-2xl" />
        </div>
        <div className="col-span-1 md:col-span-2 text-start md:text-end md:ms-auto mt-6 md:mt-0">
          <button className="uppercase flex items-center justify-start md:justify-center gap-2">
            <p className="border border-black/15 rounded-full py-2 px-4">Our Work</p>
            <p className="border border-black/15 rounded-full p-2.5">
              <ArrowUpRight />
            </p>
          </button>
        </div>
      </div>

      {/* Business text section */}
      <div className="border-b border-black/15 pb-4 sm:pb-6">
        <AnimatedText
          text={businessText}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-full sm:w-10/12 md:w-9/12 lg:w-7/12 px-4 sm:px-8 md:px-12 lg:px-16"
        />
      </div>

      {/* Business text grid section */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 pb-12 sm:pb-16 md:pb-20 lg:pb-28 pt-4 sm:pt-6 px-4 sm:px-8 md:px-12 lg:px-16 gap-8 md:gap-16 lg:gap-28 text-xl lg:text-2xl">
        <div className="col-span-1 md:col-span-2 lg:col-span-4 mb-6 md:mb-0">
          <AnimatedText text={businessText02} className="text-xl lg:text-2xl" />
        </div>
        <div className="col-span-1 md:col-span-2">
          <AnimatedText
            text={businessText03}
            className="pb-4 sm:pb-6 md:pb-8 text-xl lg:text-2xl"
          />
          <AnimatedText
            text={businessText04}
            className="pb-4 sm:pb-6 md:pb-8 text-xl lg:text-2xl"
          />
        </div>
      </div>

      {/* Background image section */}
      <div
        className="h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen mx-4 sm:mx-8 md:mx-12 lg:mx-16 rounded-xl md:rounded-2xl lg:rounded-3xl"
        style={{
          background: 'url(/team.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Marquee and slider section */}
      <div className="mt-8 sm:mt-12 md:mt-16">
        <MarqueeText text={'WE are baits.'} />
        <Slider slides={slides} />
      </div>

      {/* Two principles section */}
      <div className="border-b border-black/15 pb-8 sm:pb-12 md:pb-16 pt-16 sm:pt-24 md:pt-36">
        <AnimatedText
          text={twoPrinciples}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-full sm:w-10/12 md:w-9/12 lg:w-7/12 px-4 sm:px-8 md:px-12 lg:px-16"
        />
      </div>

      {/* Two-column image and text section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 text-xl lg:text-2xl pb-8 sm:pb-12 md:pb-16">
        <div className="col-span-1">
          <Image
            height={500}
            width={500}
            className="w-full"
            src={'/about-01.jpg'}
            alt="about page image"
          />
          <h2 className="w-full md:w-9/12 lg:w-6/12 pt-4 md:pt-6">
            Whether the presentation needs to convince or educate it always has to change audience
            perception. We seek insights to make decks unexpectedly enlightening for our audience.
          </h2>
        </div>
        <div className="col-span-1 mt-8 md:mt-0">
          <Image
            height={500}
            width={500}
            className="w-full"
            src={'/about-02.jpg'}
            alt="about page image"
          />
          <h2 className="w-full md:w-9/12 lg:w-6/12 pt-4 md:pt-6">
            The presentation helps to see what&#39;s hidden, unseen, or simply never known before.
            We use design to drive their attention, focus them to clearly see, and help them feel
            the message.
          </h2>
        </div>
      </div>

      {/* Final animated text section */}
      <div className="border-b border-black/15 pb-8 sm:pb-12 md:pb-16 pt-16 sm:pt-24 md:pt-36">
        <AnimatedText
          text={twoPrinciples}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-full sm:w-10/12 md:w-9/12 lg:w-7/12 px-4 sm:px-8 md:px-12 lg:px-16"
        />
      </div>
    </div>
  );
};

export default AboutUs;
