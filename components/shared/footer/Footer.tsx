import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="relative h-[105vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+105vh)] -top-[100vh]">
        <div className="h-[105vh] sticky top-[calc(100vh-105vh)]">
          <footer className="px-16  grid grid-cols-2 pt-24 pb-14 gap-10">
            <div className="col-span-1 flex flex-col justify-between">
              <h2 className="text-[10rem] leading-[8rem] tracking-tighter uppercase font-bold">
                eye- opening
              </h2>
              <h1 className="text-2xl tracking-tight">
                Bangladesh Associate of IT Solution
              </h1>
            </div>
            <div className="col-span-1 ">
              <h2 className="text-[10rem] leading-[8rem] tracking-tighter uppercase font-bold">
                awarding.
              </h2>
              <div className="grid grid-cols-3 gap-6 text-2xl gap-y-10 items-start pt-10">
                <div className="col-span-3 flex flex-col justify-end">
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
                <div className="col-span-1 ">
                  <p className=" pb-4">L:</p>
                  <div className=" space-y-6 ">
                    <p className="">202-1965 W 4th Ave Vancouver, Canada</p>

                    <div className="">30 Chukarina St Lviv, Bangladesh</div>
                  </div>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-1 flex flex-col justify-end">
                  <p className=" pb-4">M:</p>
                  <p className=" flex flex-col  gap-0.5">
                    <span>
                      <Link className="hover-underline-animation" href={"/"}>
                        Home
                      </Link>
                    </span>
                    <span>
                      <Link className="hover-underline-animation" href={"/"}>
                        About Us
                      </Link>
                    </span>
                    <span>
                      <Link className="hover-underline-animation" href={"/"}>
                        Contact
                      </Link>
                    </span>
                    <span>
                      <Link className="hover-underline-animation" href={"/"}>
                        Services
                      </Link>
                    </span>
                    <span>
                      <Link className="hover-underline-animation" href={"/"}>
                        Blogs
                      </Link>{" "}
                    </span>
                    <span>
                      <Link className="hover-underline-animation" href={"/"}>
                        Our Works
                      </Link>{" "}
                    </span>
                  </p>
                </div>
                <div className="col-span-3 ">
                  <p className=" pb-4">E:</p>
                  <p className="  hover-underline-animation">hello@baits.com</p>
                </div>
                <div className="col-span-3 flex flex-col justify-end">
                  <p className=" flex flex-col  gap-0.5">
                    © BAITS design 2024. Legal Terms
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
