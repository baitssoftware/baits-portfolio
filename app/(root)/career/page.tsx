'use client';
import AnimatedButton from '@/components/shared/button/AnimatedButton';
import { motion } from 'framer-motion';
import { BarChartIcon as ChartNoAxesCombined, HeartHandshake, Sprout } from 'lucide-react';
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
    className="bg-white p-4 sm:p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-100 h-full"
  >
    <div className="mb-4 bg-orange-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
    </div>
    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{title}</h3>
    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{description}</p>
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
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6">
          <div className="md:flex justify-between items-start space-y-4">
            <div className="space-y-2">
              <p className="max-w-[600px] text-muted-foreground text-base sm:text-lg md:text-xl">
                We&#39;re looking for passionate individuals to help us build the future. Explore
                our open positions and find your next opportunity.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 mt-6 md:mt-0 space-y-2 sm:space-y-0">
              <AnimatedButton text="View Open Positions" href="#job-listings" />
              <AnimatedButton text="Apply Now" href="#apply-now" />
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="w-full py-8 sm:py-12 md:py-20 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4 sm:mb-6"
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl pt-8 sm:pt-12 md:pt-16 lg:pt-20 py-4 sm:py-6 md:py-8 lg:py-10 border-b border-black/15">
                Why Join Us?
              </h2>
            </motion.div>
          </div>

          <p className="max-w-[850px] text-muted-foreground text-sm sm:text-base md:text-lg">
            We offer a collaborative environment where you can grow your career while making an
            impact. We&#39;re looking for passionate individuals to help us build the future.
            Explore our open positions and find your next opportunity.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-1 mt-8 sm:mt-12">
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
        <section
          id="job-listings"
          className="w-full px-4 sm:px-8 md:px-12 lg:px-16 bg-gray-50 dark:bg-gray-900 pb-12 sm:pb-16 md:pb-20 lg:pb-28"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4 sm:mb-6"
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl pt-8 sm:pt-12 md:pt-16 lg:pt-20 py-4 sm:py-6 md:py-8 lg:py-10 border-b border-black/15">
                Open Positions
              </h2>
            </motion.div>
          </div>
          <div>
            <JobListings />
          </div>
        </section>

        {/* Application Form Section */}
        <section
          id="apply-now"
          className="w-full px-4 sm:px-8 md:px-12 lg:px-16 pb-16 sm:pb-20 md:pb-24 lg:pb-32"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4 sm:mb-6"
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl pt-8 sm:pt-12 md:pt-16 lg:pt-20 py-4 sm:py-6 md:py-8 lg:py-10 border-b border-black/15">
                Apply Now
              </h2>
            </motion.div>
          </div>

          <div className="md:flex items-start justify-between">
            <p className="max-w-[850px] text-muted-foreground text-sm sm:text-base md:text-lg">
              Submit your application and join our talented team. We look forward to learning more
              about you.
            </p>
            <div className="mt-6 md:mt-0">
              <AnimatedButton text="Go to Application Form" href="/career/apply" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
