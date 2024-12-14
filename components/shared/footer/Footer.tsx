import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-16 min-h-screen grid grid-cols-2 pt-20 pb-14 gap-10">
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
              <Link href={"/"}>Instagram</Link>
              <Link href={"/"}>Behance</Link>
              <Link href={"/"}>Facebook</Link>
              <Link href={"/"}>Linkedin</Link>{" "}
            </p>
          </div>
          <div className="col-span-1 flex flex-col justify-end">
            <p className=" pb-4">L:</p>
            <p className=" flex flex-col gap-6">
              <p className="">202-1965 W 4th Ave Vancouver, Canada</p>

              <div className="">30 Chukarina St Lviv, Bangladesh</div>
            </p>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-1 flex flex-col justify-end">
            <p className=" pb-4">M:</p>
            <p className=" flex flex-col  gap-0.5">
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>About Us</Link>
              <Link href={"/"}>Contact</Link>
              <Link href={"/"}>Services</Link>
              <Link href={"/"}>Blogs</Link> <Link href={"/"}>Our Works</Link>{" "}
            </p>
          </div>
          <div className="col-span-3 flex flex-col justify-end">
            <p className=" pb-4">E:</p>
            <p className=" flex flex-col  gap-0.5">hello@baits.com</p>
          </div>
          <div className="col-span-3 flex flex-col justify-end">
            <p className=" flex flex-col  gap-0.5">
              © BAITS design 2024. Legal Terms
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
