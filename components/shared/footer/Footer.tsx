'use client';

import { motion } from 'framer-motion';

import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const footerSections = {
  company: {
    title: 'MENU',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about-us' },
      { name: 'Contact', href: '/contact' },
      { name: 'Services', href: '/services' },
      { name: 'Blogs', href: '/blogs' },
      { name: 'Our Works', href: '/projects' },
      { name: 'Career', href: '/projects' },
    ],
  },
  services: {
    title: 'SERVICES',
    links: [
      { name: 'Web Development', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'Cloud Solutions', href: '#' },
      { name: 'AI Integration', href: '#' },
      { name: 'DevOps', href: '#' },
    ],
  },
  resources: {
    title: 'RESOURCES',
    links: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Status Page', href: '#' },
      { name: 'Support', href: '#' },
    ],
  },
  importantLink: {
    title: 'IMPORTANT',
    links: [
      { name: 'FAQs', href: '/faqs' },
      { name: 'Trams & Conditions', href: '/eula' },
      { name: 'Career', href: '/career' },
      { name: 'Contact', href: '/contact' },
      { name: 'Account', href: '/account' },
      { name: 'Log In', href: '/login' },
    ],
  },
};

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
];

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl  mb-4">{title}:</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className=" hover-underline-animation transition-colors text-xl font-light"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Footer = () => {
  return (
    <footer className="bg-white  text-black">
      <div className="px-4 py-32 pb-20 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="">
              {/* <Image
                src="/BAITS-04.svg"
                alt="Company Logo"
                width={40}
                height={40}
                className="h-16 w-auto"
              /> */}
              <h1 className="ml-3 text-3xl font- leading-8  pe-10">
                Bangladesh Associate of IT Solution
              </h1>
            </Link>
          </motion.div>

          {/* Footer Sections */}
          <FooterColumn
            title={footerSections.services.title}
            links={footerSections.services.links}
          />
          <FooterColumn title={footerSections.company.title} links={footerSections.company.links} />
          <FooterColumn
            title={footerSections.importantLink.title}
            links={footerSections.importantLink.links}
          />
          <FooterColumn
            title={footerSections.resources.title}
            links={footerSections.resources.links}
          />
          <div className="">
            <div className="flex space-x-2 mb-4 md:mb-0">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className=" hover:text-blue-600 transition-colors p-2 rounded-full bg-white text-[#212121]"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex items-center space-x-4">
              <span className="text-sm ">
                © 2024 Bangladesh Associate of IT Solution. All rights reserved.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
