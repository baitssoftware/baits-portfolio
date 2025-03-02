'use client';

import AnimatedButton from '@/components/shared/button/AnimatedButton';
import { motion } from 'framer-motion';
import { ChartNoAxesCombined, HeartHandshake, Sprout } from 'lucide-react';
import Hero from './components/Hero';
import JobListings from './components/JobListings';

const Card = ({
  icon: Icon,
  title,
  description,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-100 h-full"
  >
    <div className="mb-4 bg-orange-50 w-12 h-12 flex items-center justify-center">
      <Icon className="w-6 h-6 text-orange-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default function Career() {
  const services = [
    {
      icon: Sprout,
      title: 'Professional Growth',
      description:
        'Building modern, performant web applications with Next.js. Specializing in server-side rendering, static generation, and dynamic routes.',
    },
    {
      icon: HeartHandshake,
      title: 'Work-Life Balance',
      description:
        'Robust backend solutions using Python, Django, and FastAPI. Creating scalable APIs and efficient data processing systems.',
    },
    {
      icon: ChartNoAxesCombined,
      title: 'Competitive Benefits',
      description:
        'Creating responsive and interactive user interfaces with React, Tailwind CSS, and modern JavaScript frameworks.',
    },
  ];
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        <section className="px-16 py-6">
          <div className="flex justify-between items-start space-y-4">
            <div className="space-y-2">
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We&#39;re looking for passionate individuals to help us build the future. Explore
                our open positions and find your next opportunity.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <AnimatedButton text="View Open Positions" href="#job-listings" />
              <AnimatedButton text="Apply Now" href="#apply-now" />
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 px-16">
          <div className="">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-7xl pt-20 py-10 border-b border-black/15">Why Join Us?</h2>
            </motion.div>
          </div>

          <p className="max-w-[850px] text-muted-foreground md:text-lg">
            We offer a collaborative environment where you can grow your career while making an
            impact. We&#39;re looking for passionate individuals to help us build the future.
            Explore our open positions and find your next opportunity.
          </p>
          <div className="grid grid-cols-1 gap-1 mt-12 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card icon={service.icon} title={service.title} description={service.description} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Job Listings Section */}
        <section id="job-listings" className="w-full px-16 bg-gray-50 dark:bg-gray-900 pb-28">
          <div className="">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-7xl pt-20 py-10 border-b border-black/15"> Open Positions</h2>
            </motion.div>
          </div>
          <div className="">
            <JobListings />
          </div>
        </section>

        {/* Application Form Section */}
        <section id="apply-now" className="w-full px-16 pb-32">
          <div className="">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-7xl pt-20 py-10 border-b border-black/15">Apply Now</h2>
            </motion.div>
          </div>

          <div className="flex items-start justify-between">
            <p className="max-w-[850px] text-muted-foreground md:text-lg">
              Submit your application and join our talented team. We look forward to learning more
              about you.
            </p>
            <AnimatedButton text=" Go to Application Form" href="/career/apply" />
          </div>
        </section>
      </main>
    </div>
  );
}
