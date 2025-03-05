'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DialogTitle } from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface platform {
  platform: string;
}

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: 'FAQs', href: '/faqs' },
    { label: 'Trams & Conditions', href: '/trams-and-conditions' },
    { label: 'Career', href: '/career' },
    { label: 'Contact', href: '/contact' },
    { label: 'Account', href: '/account' },
    { label: 'Log In', href: '/login' },
  ];
  const menuLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact', href: '/contact' },
    { name: 'Services', href: '/services' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Our Works', href: '/projects' },
  ];

  const handleLinkClick = (href: string) => {
    // Start closing the sheet
    setIsActive(false);

    // Delay the navigation to allow for a slow closure effect
    setTimeout(() => {
      router.push(href);
    }, 500); // Adjust this value to control the delay before navigation
  };

  const currentYear = new Date().getFullYear();

  return (
    <header className="px-4 sm:px-6 md:px-8 lg:px-16 py-4 sm:py-5 lg:py-6 z-50">
      <Sheet open={isActive} onOpenChange={(open) => setIsActive(open)}>
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="">
              <Image
                width={120}
                height={200}
                src={'/BAITS-04.svg'}
                alt="baits logo"
                className="h-7 sm:h-8 lg:h-9 w-auto"
              />
            </Link>
          </div>

          <div>
            <SheetTrigger>
              <div className="button z-30">
                <div className={`burger ${isActive ? 'burgerActive' : ''}`}></div>
              </div>
            </SheetTrigger>
          </div>

          <SheetContent side="top" className="h-[80vh] pt-16 p-0 overflow-hidden">
            <DialogTitle></DialogTitle>
            <AnimatePresence>
              {isActive && (
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl overflow-hidden"
                  >
                    <h1 className="text-xl sm:text-2xl tracking-tight">
                      Bangladesh Associate of IT Solution
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 md:mt-0">
                      <div className="col-span-1 lg:col-span-1 lg:col-start-3 min-h-[30vh] lg:min-h-[45vh] text-lg sm:text-xl lg:text-2xl flex flex-col justify-between">
                        <div>
                          <p className="pb-2 sm:pb-4">M:</p>
                          <p className="flex flex-col gap-0.5">
                            {menuLinks.map((link, index) => (
                              <span key={index}>
                                <Link
                                  className="hover-underline-animation"
                                  href={link.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick(link.href);
                                  }}
                                >
                                  {link.name}
                                </Link>
                              </span>
                            ))}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-6 lg:mt-0">
                          {['facebook', 'linkedin', 'instagram'].map((platform, index) => (
                            <button key={index}>
                              <a
                                className="bg-black p-2 rounded-full inline-block"
                                href="www.facebook.com"
                              >
                                <Icon platform={platform} />
                              </a>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div className="p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      <h3 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[20rem] leading-none sm:leading-[3rem] md:leading-[4rem] font-semibold mb-6 sm:mb-10">
                        ©{currentYear}
                      </h3>
                      <motion.div
                        initial={{ opacity: 0, y: -90 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -90 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-1 md:col-span-2 lg:col-span-1 lg:col-start-3 flex flex-col sm:flex-row gap-6 sm:gap-10"
                      >
                        <nav>
                          <ul className="flex flex-col text-base sm:text-lg lg:text-xl">
                            {navItems.slice(0, 4).map((item, index) => (
                              <li key={index}>
                                <Link
                                  className="hover-underline-animation"
                                  href={item.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick(item.href);
                                  }}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </nav>
                        <nav>
                          <ul className="flex flex-col text-base sm:text-lg lg:text-xl">
                            {navItems.slice(4).map((item, index) => (
                              <li key={index}>
                                <Link
                                  className="hover-underline-animation"
                                  href={item.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick(item.href);
                                  }}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </nav>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </SheetContent>
        </div>
      </Sheet>
    </header>
  );
};

const Icon = ({ platform }: platform) => {
  switch (platform) {
    case 'facebook':
      return (
        <svg
          width="20px"
          height="20px"
          viewBox="-5 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#ffffff"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <title>facebook [#ffffff]</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-385.000000, -7399.000000)"
                fill="#ffffff"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                    id="facebook-[#ffffff]"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      );
    case 'linkedin':
      return (
        <svg
          fill="#ffffff"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 512 512"
        >
          <path d="M116.504,500.219V170.654H6.975v329.564H116.504 L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941 C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219 c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533 c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531 c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 192 192"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              stroke="#ffffff"
              strokeWidth="12"
              d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"
            ></path>
            <circle cx="96" cy="96" r="30" stroke="#ffffff" strokeWidth="12"></circle>
            <circle cx="135" cy="57" r="9" fill="#ffffff"></circle>
          </g>
        </svg>
      );
    default:
      return null;
  }
};

export default Navbar;
