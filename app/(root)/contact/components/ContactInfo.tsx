'use client';
import { AnimatedText } from '@/components/shared/animatedText/AnimatedText';
import { ArrowUpRight } from 'lucide-react';

const ContactInfo = () => {
  const locations = ['202-1965 W 4th Ave Vancouver, Canada', '30 Chukarina St Lviv, Bangladesh'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 pb-12 sm:pb-16 md:pb-20 lg:pb-28 pt-4 sm:pt-6 px-4 sm:px-8 md:px-12 lg:px-16 gap-8 md:gap-16 lg:gap-28 text-xl lg:text-2xl bg-[#CDEA68] border-t border-black/15">
      <div className="col-span-1 md:col-span-2 lg:col-span-4 mb-6 md:mb-0">
        <p>Our Contact:</p>
      </div>
      <div className="col-span-1 md:col-span-2 mb-8 md:mb-0">
        <p className="pb-4">L:</p>
        <div className="space-y-4 md:space-y-6">
          {locations.map((location, index) => (
            <div key={index}>
              <AnimatedText text={location} className="text-xl lg:text-2xl" />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 text-start md:text-end md:ms-auto">
        <button className="uppercase flex items-center justify-start md:justify-center gap-2">
          <p className="border border-black/15 rounded-full py-2 px-4">hello@baits.com</p>
          <p className="border border-black/15 rounded-full p-2.5">
            <ArrowUpRight />
          </p>
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;
