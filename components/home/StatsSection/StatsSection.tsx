"use client";

import CountUp from "@/components/shared/count/CountUp";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { number: 15, label: "Years of Experience" },
  { number: 1500, label: "Projects Done" },
  { number: 2000, label: "Happy Client" },
  { number: 30, label: "Country Served" },
  { number: 18, label: "App Downloads" },
  { number: 50, label: "Dedicated Developers" },
  { number: 795, label: "Websites Developed" },
  { number: 4, label: "Rating on Clutch.co" },
];

export default function StatsSection() {
  return (
    <section className=" px-16 py-16 pb-0 ">
      <h2 className="text-7xl pt-20 py-16 border-b border-black/15">
        We Make your Business Bright
      </h2>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-8 ps-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute left-0 top-0 w-[2px] h-8 bg-orange-500" />
              <div className="pl-6">
                <div className="text-4xl font-medium text-gray-900 mb-2">
                  <CountUp
                    from={0}
                    to={stat.number}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                </div>
                <div className="text-gray-500 whitespace-pre-line">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/team.jpg"
              alt="Happy customer"
              width={500}
              height={400}
              className="w-full object-cover"
            />
            {/* <div className="absolute bottom-4 right-[-20px] bg-white p-4 rounded-lg shadow-lg max-w-[280px]">
              <div className="flex items-start gap-3">
                <Image
                  src="/team.jpg"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm text-gray-900">
                    Blessing welcomed ladyship she met humoured sir breeding
                    her.
                  </p>
                  <div className="mt-2">
                    <p className="text-sm font-medium">
                      Linda, Project Manager
                    </p>
                    <div className="flex text-yellow-400 text-xs mt-1">
                      {"★".repeat(5)}
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </motion.div>
          <div className="absolute right-[-40px] top-[40%] w-20 h-40 bg-orange-500/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
