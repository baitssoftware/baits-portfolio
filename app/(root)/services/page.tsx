'use client';

import ClientsReviews from '@/components/home/review/ClientsReviews';
import AnimatedButton from '@/components/shared/button/AnimatedButton';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Bot,
  Building,
  CheckCircle,
  Code2,
  Cpu,
  Database,
  Globe,
  Layout,
  SmartphoneIcon as Mobile,
  Server,
  Users,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Code2,
    title: 'Web Application Development',
    heading: 'Crafting Digital Experiences',
    description:
      'Custom web applications built with Next.js, React, and modern JavaScript frameworks. Our solutions are optimized for performance, SEO, and user experience with server-side rendering and static generation capabilities.',
    features: [
      'Server-side rendering & static generation',
      'Progressive Web Apps (PWA)',
      'Responsive design for all devices',
      'Performance optimization',
    ],
  },
  {
    icon: Database,
    title: 'Backend Development',
    heading: 'Powering Your Digital Infrastructure',
    description:
      'Robust backend solutions using Python, Django, FastAPI, and Node.js. We create scalable APIs, efficient data processing systems, and secure database architectures tailored to your business needs.',
    features: [
      'RESTful & GraphQL API development',
      'Database design & optimization',
      'Authentication & authorization systems',
      'Microservices architecture',
    ],
  },
  {
    icon: Layout,
    title: 'UI/UX Design & Development',
    heading: 'Designing Intuitive Interfaces',
    description:
      'Creating intuitive and engaging user interfaces with modern design principles. Our team combines aesthetic appeal with functional design to deliver exceptional user experiences across all platforms.',
    features: [
      'User-centered design approach',
      'Interactive prototyping',
      'Accessibility compliance (WCAG)',
      'Design systems implementation',
    ],
  },
  {
    icon: Bot,
    title: 'AI & Machine Learning',
    heading: 'Intelligent Solutions for Tomorrow',
    description:
      'Implementing cutting-edge AI solutions to transform your business. From predictive analytics to natural language processing and computer vision, we help you leverage the power of artificial intelligence.',
    features: [
      'Custom ML model development',
      'Natural Language Processing (NLP)',
      'Computer Vision solutions',
      'Predictive analytics & forecasting',
    ],
  },
  {
    icon: Globe,
    title: 'Enterprise Solutions',
    heading: 'Streamlining Business Operations',
    description:
      'End-to-end enterprise solutions that streamline operations and boost productivity. We develop custom ERP, CRM, and business intelligence systems that integrate seamlessly with your existing infrastructure.',
    features: [
      'Custom ERP & CRM development',
      'Business process automation',
      'Legacy system integration',
      'Scalable cloud-based solutions',
    ],
  },
  {
    icon: Server,
    title: 'Cloud & DevOps',
    heading: 'Optimizing Your Infrastructure',
    description:
      'Comprehensive cloud and DevOps services to optimize your infrastructure. We help you migrate to the cloud, set up CI/CD pipelines, and implement infrastructure as code for maximum efficiency.',
    features: [
      'Cloud migration & optimization',
      'CI/CD pipeline implementation',
      'Infrastructure as Code (IaC)',
      'Containerization with Docker & Kubernetes',
    ],
  },
  {
    icon: Mobile,
    title: 'Mobile App Development',
    heading: 'Bringing Ideas to Life on Mobile',
    description:
      'Cross-platform and native mobile applications for iOS and Android. Using React Native, Flutter, and native technologies, we build high-performance mobile apps that provide seamless user experiences.',
    features: [
      'Cross-platform development',
      'Native iOS & Android apps',
      'Mobile UI/UX design',
      'App Store optimization',
    ],
  },
  {
    icon: Cpu,
    title: 'IoT & Embedded Systems',
    heading: 'Connecting the Physical and Digital',
    description:
      'Innovative IoT solutions that connect the physical and digital worlds. We develop embedded systems, smart devices, and IoT platforms that enable real-time monitoring and control of your assets.',
    features: [
      'IoT platform development',
      'Embedded systems programming',
      'Sensor integration & data collection',
      'Real-time monitoring solutions',
    ],
  },
];

const clients = [
  { name: 'Tech Innovations Ltd', industry: 'Technology' },
  { name: 'Global Finance Group', industry: 'Finance' },
  { name: 'HealthCare Partners', industry: 'Healthcare' },
  { name: 'EduTech Solutions', industry: 'Education' },
  { name: 'Retail Dynamics', industry: 'Retail' },
  { name: 'Manufacturing Excellence', industry: 'Manufacturing' },
];

const ServiceCard = ({
  icon: Icon,
  title,
  heading,
  description,
  features,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  heading: string;
  description: string;
  features: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#cdea67] h-full rounded-sm group"
  >
    <div className="mb-6 bg-[#004d43]/10 w-16 h-16 flex items-center justify-center rounded-sm group-hover:bg-[#004d43] transition-colors duration-300">
      <Icon className="w-8 h-8 text-[#004d43] group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 className="text-3xl font-semibold text-[#004d43] mb-2">{title}</h3>
    <h4 className="text-xl text-[#cdea67] mb-4">{heading}</h4>
    <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start">
          <CheckCircle className="w-5 h-5 text-[#cdea67] mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
    <div className="mt-8 pt-4 border-t border-gray-100">
      <Link
        href="/contact"
        className="inline-flex items-center text-[#004d43] font-medium hover:text-[#cdea67] transition-colors"
      >
        Learn more <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </div>
  </motion.div>
);

const Hero = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-16">
      <div className="py-16 sm:py-24 lg:py-40 border-b border-black/15">
        <h1 className="text-5xl sm:text-7xl lg:text-[10rem] uppercase font-bold leading-tight sm:leading-tight lg:leading-[8rem]">
          Innovative IT Solutions
          <br />
          for Your Success
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-base sm:text-lg lg:text-xl font-normal py-4 space-y-4 sm:space-y-0">
        <h2 className="">Empowering businesses with cutting-edge technology</h2>
        <h2 className="hidden sm:block">From startups to enterprises</h2>
        <button className="uppercase flex items-center justify-center gap-2">
          <p className="border border-black/15 rounded-full py-2 px-4">Contact Us</p>
          <p className="border border-black/15 rounded-full p-2.5">
            <ArrowUpRight />
          </p>
        </button>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Main Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-16">
          <div className="">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-7xl pt-10 sm:pt-20 py-8 sm:py-16 border-b border-black/15">
                Our Development Services
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  heading={service.heading}
                  description={service.description}
                  features={service.features}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className=" bg-white">
        <div className="px-4 sm:px-6 lg:px-16">
          <div className="">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className=""
            >
              <h2 className="text-4xl sm:text-5xl lg:text-7xl pt-10 sm:pt-20 py-8 sm:py-16 border-b border-black/15">
                Why Choose Us
              </h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 mb-8">
                With a proven track record of delivering high-quality IT solutions, we combine
                technical expertise with industry knowledge to help businesses achieve their digital
                transformation goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#004d43]/10 p-3 rounded-sm mr-4">
                    <Users className="w-6 h-6 text-[#004d43]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#004d43] mb-2">Expert Team</h3>
                    <p className="text-gray-600">
                      Our team consists of experienced developers, designers, and IT professionals
                      with expertise across various technologies and domains.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#004d43]/10 p-3 rounded-sm mr-4">
                    <Building className="w-6 h-6 text-[#004d43]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#004d43] mb-2">
                      Industry Experience
                    </h3>
                    <p className="text-gray-600">
                      We&#39;ve worked with businesses across various industries, giving us insights
                      into sector-specific challenges and opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#004d43]/10 p-3 rounded-sm mr-4">
                    <Award className="w-6 h-6 text-[#004d43]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#004d43] mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">
                      We follow rigorous quality assurance processes to ensure that all our
                      deliverables meet the highest standards of performance and reliability.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#004d43] px-10 py-28 relative mt-10 lg:mt-0"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#cdea67] rounded-bl-3xl -mt-8 -mr-8"></div>
              <h3 className="text-4xl  text-white mb-6 relative z-10">
                Our Clients Across Industries
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="bg-[#004d43]/40 p-6 border border-[#cdea67]/20 hover:border-[#cdea67] transition-colors rounded-sm"
                  >
                    <p className="text-lg font-medium text-white mb-2">{client.name}</p>
                    <p className="text-[#cdea67]">{client.industry}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <ClientsReviews />

      {/* CTA Section */}
      <section className="py-20 bg-[#004d43]">
        <div className="px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:flex items-center text-start justify-between"
          >
            <div className="">
              <h2 className="text-3xl md:text-6xl  text-white mb-1">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-[#cdea67] mb-10">
                Contact us today to discuss how our IT solutions can help you achieve your business
                goals.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton
                text="Schedule a Consultation"
                href="/contact"
                className="bg-transparent border border-white/45 text-white"
              />

              {/* <button className="uppercase flex items-center justify-center gap-2">
                <p className="border border-white text-white rounded-full py-2 px-4 hover:bg-white hover:text-[#004d43] transition-colors">
                  Schedule a Consultation
                </p>
                <p className="border border-white text-white rounded-full p-2.5 hover:bg-white hover:text-[#004d43] transition-colors">
                  <ArrowUpRight />
                </p>
              </button> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
