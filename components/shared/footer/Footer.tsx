import Link from "next/link";

const Footer = () => {
  // Data arrays for mapping
  const socialLinks = [
    { name: "Instagram", href: "/" },
    { name: "Behance", href: "/" },
    { name: "Facebook", href: "/" },
    { name: "Linkedin", href: "/" },
  ];

  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Our Works", href: "/projects" },
  ];

  const locations = [
    "202-1965 W 4th Ave Vancouver, Canada",
    "30 Chukarina St Lviv, Bangladesh",
  ];

  return (
    <footer className="px-16 grid grid-cols-2 pt-24 pb-14 gap-10">
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
          {/* Social Links */}
          <div className="col-span-3 flex flex-col justify-end">
            <p className="pb-4">S:</p>
            <div className="flex flex-col gap-0.5">
              {socialLinks.map((link, index) => (
                <span key={index}>
                  <Link className="hover-underline-animation" href={link.href}>
                    {link.name}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="col-span-1">
            <p className="pb-4">L:</p>
            <div className="space-y-6">
              {locations.map((location, index) => (
                <p key={index}>{location}</p>
              ))}
            </div>
          </div>

          <div className="col-span-1"></div>

          {/* Menu Links */}
          <div className="col-span-1 flex flex-col justify-end">
            <p className="pb-4">M:</p>
            <div className="flex flex-col gap-0.5">
              {menuLinks.map((link, index) => (
                <span key={index}>
                  <Link className="hover-underline-animation" href={link.href}>
                    {link.name}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="col-span-3">
            <p className="pb-4">E:</p>
            <p className="hover-underline-animation">hello@baits.com</p>
          </div>

          {/* Footer Legal */}
          <div className="col-span-3 flex flex-col justify-end">
            <p className="flex flex-col gap-0.5">
              © BAITS design 2024. Legal Terms
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
