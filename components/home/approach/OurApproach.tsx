import Image from "next/image";
import Link from "next/link";

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
          <p className=" flex flex-col">
            <Link href={"/"}>Instagram</Link>
            <Link href={"/"}>Behance</Link>
            <Link href={"/"}>Facebook</Link>
            <Link href={"/"}>Linkedin</Link>{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 px-16 py-10">
        <div className="">
          <p className="text-7xl">Our approach:</p>
          <button className="mt-8 px-8 py-4 bg-[#212121] flex items-center justify-center gap-4 rounded-full uppercase text-white text-xl">
            <p>Read More</p>{" "}
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-dot"
              >
                <circle cx="12.1" cy="12.1" r="1" />
              </svg>
            </span>
          </button>
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
