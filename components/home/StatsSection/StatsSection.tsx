'use client';

import CountUp from '@/components/shared/count/CountUp';
import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
  { number: 15, label: 'Years of Experience' },
  { number: 1500, label: 'Projects Done' },
  { number: 2000, label: 'Happy Client' },
  { number: 30, label: 'Country Served' },
  { number: 18, label: 'App Downloads' },
  { number: 50, label: 'Dedicated Developers' },
  { number: 795, label: 'Websites Developed' },
  { number: 4, label: 'Rating on Clutch.co' },
];

export default function StatsSection() {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 lg:py-16 pb-0">
      <h2 className="text-3xl sm:text-5xl lg:text-7xl pt-8 sm:pt-12 md:pt-16 lg:pt-20 py-6 sm:py-10 md:py-12 lg:py-16 border-b border-black/15">
        We Make your Business Bright
      </h2>

      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center pt-8 lg:pt-0">
        <div className="grid  grid-cols-2 gap-6 sm:gap-8 ps-0 sm:ps-4 md:ps-10 lg:ps-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute left-0 top-0 w-[2px] h-6 sm:h-8 bg-orange-500" />
              <div className="pl-6">
                <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium text-gray-900 mb-1 sm:mb-2">
                  <CountUp
                    from={0}
                    to={stat.number}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                </div>
                <div className="text-sm sm:text-base lg:text-base text-gray-500 whitespace-pre-line">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-10 lg:mt-0">
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
              priority
            />
          </motion.div>
          <div className="hidden sm:block absolute right-[-20px] md:right-[-30px] lg:right-[-40px] top-[40%] w-12 sm:w-16 md:w-20 lg:w-20 h-24 sm:h-32 md:h-40 lg:h-40 bg-orange-500/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
