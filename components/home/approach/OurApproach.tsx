"use client";

import Image from "next/image";
import Link from "next/link";

import AnimatedButton from "@/components/shared/button/AnimatedButton";

const OurApproach = () => {
  return (
    <div className="bg-[#CDEA68]  ">
      <div className="py-28 px-16 border-b border-black/15">
        <h2 className="text-7xl w-11/12">
          Bangladesh Associate of IT Solution is a strategic presentation agency
          for forward-thinking businesses that need to raise funds, sell
          prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h2>
      </div>
      <div className="grid grid-cols-8 pb-28 pt-6 px-16 border-b border-black/15 gap-28 text-2xl">
        <div className="col-span-4">
          <p className="">What you can expect:</p>
        </div>
        <div className="col-span-2">
          <p className=" pb-8">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p className="">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="col-span-2 flex flex-col justify-end">
          <p className=" pb-4">S:</p>
          <p className=" flex flex-col gap-0.5">
            <span>
              <Link className="hover-underline-animation" href={"/"}>
                Instagram
              </Link>
            </span>
            <span>
              <Link className="hover-underline-animation" href={"/"}>
                Behance
              </Link>
            </span>
            <span>
              <Link className="hover-underline-animation" href={"/"}>
                Facebook
              </Link>
            </span>
            <span>
              <Link className="hover-underline-animation" href={"/"}>
                Linkedin
              </Link>{" "}
            </span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 px-16 py-10">
        <div className="">
          <p className="text-7xl">Our approach:</p>
          <div className="mt-4">
            <AnimatedButton text="Read More" href="/about" />
          </div>
          {/* <AnimatedButton
              text="Contact Us"
              href="/contact"
              className="bg-blue-600"
            /> */}
          {/* <button className="mt-8">
            <RoundedButton className="px-8 py-4 gap-4 rounded-full uppercase text-white text-xl bg-[#313131] border-none">
              <p className="inline-block">Read More</p>
            </RoundedButton>
          </button> */}
        </div>
        <div className="">
          <Image
            src={"/ap1.jpg"}
            alt="baits' office"
            width={500}
            height={500}
            className="w-full"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
