'use client';

import { motion } from 'framer-motion';
import {
  Bot,
  Code2,
  Cpu,
  Database,
  Globe,
  Layout,
  SmartphoneIcon as Mobile,
  Server,
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Next.js Development',
    description:
      'Building modern, performant web applications with Next.js. Specializing in server-side rendering, static generation, and dynamic routes.',
  },
  {
    icon: Database,
    title: 'Python Backend',
    description:
      'Robust backend solutions using Python, Django, and FastAPI. Creating scalable APIs and efficient data processing systems.',
  },
  {
    icon: Layout,
    title: 'Frontend Development',
    description:
      'Creating responsive and interactive user interfaces with React, Tailwind CSS, and modern JavaScript frameworks.',
  },
  {
    icon: Bot,
    title: 'AI Integration',
    description:
      'Implementing AI solutions and machine learning models into applications. Building smart automation and data analysis tools.',
  },
  {
    icon: Globe,
    title: 'Full Stack Solutions',
    description:
      'End-to-end development services combining frontend expertise with powerful backend technologies.',
  },
  {
    icon: Server,
    title: 'API Development',
    description:
      'Designing and building RESTful APIs and GraphQL endpoints. Creating seamless integration between services.',
  },
  {
    icon: Mobile,
    title: 'Mobile Development',
    description:
      'Developing cross-platform mobile applications using React Native. Building native-like experiences for iOS and Android.',
  },
  {
    icon: Cpu,
    title: 'DevOps Services',
    description:
      'Setting up CI/CD pipelines, cloud infrastructure, and automated deployment processes for optimal performance.',
  },
];

const ServiceCard = ({
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
    className="bg-white p-4 sm:p-5 lg:p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-100 h-full"
  >
    <div className="mb-3 sm:mb-4 bg-orange-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
    </div>
    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{title}</h3>
    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const ServiceSection = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-20 pb-20 sm:pb-28 lg:pb-36 bg-white">
      <div className="px-4 sm:px-6 lg:px-16">
        <div className="">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-7xl pt-8 sm:pt-12 lg:pt-20 py-6 sm:py-10 lg:py-16 border-b border-black/15">
              Our Development Services
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
