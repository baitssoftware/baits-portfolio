"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Bot,
  Globe,
  Server,
  SmartphoneIcon as Mobile,
  Cpu,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Next.js Development",
    description:
      "Building modern, performant web applications with Next.js. Specializing in server-side rendering, static generation, and dynamic routes.",
  },
  {
    icon: Database,
    title: "Python Backend",
    description:
      "Robust backend solutions using Python, Django, and FastAPI. Creating scalable APIs and efficient data processing systems.",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description:
      "Creating responsive and interactive user interfaces with React, Tailwind CSS, and modern JavaScript frameworks.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "Implementing AI solutions and machine learning models into applications. Building smart automation and data analysis tools.",
  },
  {
    icon: Globe,
    title: "Full Stack Solutions",
    description:
      "End-to-end development services combining frontend expertise with powerful backend technologies.",
  },
  {
    icon: Server,
    title: "API Development",
    description:
      "Designing and building RESTful APIs and GraphQL endpoints. Creating seamless integration between services.",
  },
  {
    icon: Mobile,
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications using React Native. Building native-like experiences for iOS and Android.",
  },
  {
    icon: Cpu,
    title: "DevOps Services",
    description:
      "Setting up CI/CD pipelines, cloud infrastructure, and automated deployment processes for optimal performance.",
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
    className="bg-white p-6 rounded-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
  >
    <div className="mb-4 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const ServiceSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
              WHAT WE DO
            </h2>
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Our Development Services
            </h3>
            <div className="w-20 h-1 bg-blue-600 rounded" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
