import { AnimatedText } from "@/components/shared/animatedText/AnimatedText";
import { ArrowUpRight } from "lucide-react";

const ContactInfo = () => {
  const locations = [
    "202-1965 W 4th Ave Vancouver, Canada",
    "30 Chukarina St Lviv, Bangladesh",
  ];

  return (
    <div className="grid grid-cols-8 pb-28 pt-6 px-16  gap-28 text-2xl bg-[#CDEA68] border-t border-black/15">
      <div className="col-span-4">
        <p className="">Our Contact:</p>
      </div>
      <div className="col-span-2">
        <p className="pb-4">L:</p>
        <div className="space-y-6">
          {locations.map((location, index) => (
            <div key={index}>
              <AnimatedText text={location} className="text-2xl" />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-2 text-end ms-auto">
        <button className="uppercase flex items-center justify-center gap-2">
          <p className="border border-black/15 rounded-full py-2 px-4">
            hello@baits.com
          </p>
          <p className="border border-black/15 rounded-full p-2.5">
            <ArrowUpRight />
          </p>
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;
