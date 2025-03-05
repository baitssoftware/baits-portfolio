'use client';

import RoundedButton from '@/components/shared/button/RoundedButton';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import type React from 'react';
import { useInView } from 'react-intersection-observer';

interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  details: {
    companyAbout: {
      description: string;
      industry: string;
      companySize: string;
    };
    challengeAndSolution: {
      challenge: string;
      solution: string;
    };
  };
  image: string;
}

interface Props {
  selectedProject: Project;
  ShortProjects: Project[];
}

const ProjectDetails: React.FC<Props> = ({ selectedProject, ShortProjects }) => {
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.2,
  });

  return (
    <main className="relative">
      {/* First Section */}
      <section className="w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 mb-8 sm:mb-12 md:mb-16">
        <div className="py-12 sm:py-20 md:py-24 lg:py-32 border-b border-black/15">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] uppercase font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-[8rem]">
            {selectedProject.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 pb-12 sm:pb-20 md:pb-28 pt-4 sm:pt-6 gap-6 sm:gap-12 md:gap-16 lg:gap-28 text-base sm:text-xl md:text-2xl">
          <div className="col-span-1 md:col-span-1 lg:col-span-4 mb-4 md:mb-0">
            <p>Description</p>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 mb-4 md:mb-0">
            {selectedProject.description}
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 me-auto">
            <div className="pt-3 sm:pt-4 md:pt-6 pb-2">
              {selectedProject.tags.map((tag, idx) => (
                <div className="inline-block pb-2.5" key={idx}>
                  <RoundedButton className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-sm sm:text-base md:text-lg rounded-full border border-black/15 me-1.5 uppercase">
                    {tag}
                  </RoundedButton>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pt-8 sm:pt-12 md:pt-16 lg:pt-20 py-6 sm:py-8 md:py-12 lg:py-16 border-b border-black/15">
          Company
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 pb-12 sm:pb-20 md:pb-28 pt-4 sm:pt-6 gap-6 sm:gap-12 md:gap-16 lg:gap-28 text-base sm:text-xl md:text-2xl">
          <div className="col-span-1 md:col-span-1 lg:col-span-4 mb-4 md:mb-0">
            <p>About:</p>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 mb-6 md:mb-0">
            {selectedProject.details?.companyAbout?.description}
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 me-auto space-y-4 sm:space-y-6">
            <div className="space-y-1">
              <p className="underline underline-offset-4 sm:underline-offset-8">Industry:</p>
              <p className="">{selectedProject.details?.companyAbout?.industry}</p>
            </div>
            <div className="space-y-1">
              <p className="underline underline-offset-4 sm:underline-offset-8">Company Size:</p>
              <p className="">{selectedProject.details?.companyAbout?.companySize}</p>
            </div>
          </div>
        </div>
      </section>

      {/* First Parallax Section */}
      <section
        ref={containerRef}
        className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen w-full overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: containerInView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={selectedProject.image || '/placeholder.svg'}
            alt={selectedProject.name}
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-9xl text-white font-bold px-4 text-center">
            {selectedProject.name}
          </h2>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl pt-8 sm:pt-12 md:pt-16 lg:pt-20 py-6 sm:py-8 md:py-12 lg:py-16 border-b border-black/15">
          Challenge & Solution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 pb-12 sm:pb-20 md:pb-28 pt-4 sm:pt-6 gap-6 sm:gap-12 md:gap-16 lg:gap-28 text-base sm:text-xl md:text-2xl">
          <div className="col-span-1 md:col-span-1 lg:col-span-4 mb-4 md:mb-0">
            <p>Services we provided:</p>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 mb-6 md:mb-0">
            <div className="space-y-8 sm:space-y-12 md:space-y-16">
              <p className="underline underline-offset-4 sm:underline-offset-8">Challenge:</p>
              <p className="">{selectedProject.details?.challengeAndSolution.challenge}</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 me-auto">
            <div className="space-y-8 sm:space-y-12 md:space-y-16">
              <p className="underline underline-offset-4 sm:underline-offset-8">Solution:</p>
              <p className="">{selectedProject.details?.challengeAndSolution.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Parallax Section */}
      <section
        ref={containerRef}
        className="relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen mx-4 sm:mx-8 md:mx-12 lg:mx-16"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: containerInView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={selectedProject.image || '/placeholder.svg'}
            alt={selectedProject.name}
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-9xl text-white font-bold px-4 text-center">
            {selectedProject.name}
          </h2>
        </div>
      </section>

      {/* Final Projects Section */}
      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16">
          {ShortProjects?.slice(0, 2).map((project, index) => (
            <div key={index} className="col-span-1 overflow-hidden mt-4 sm:mt-6">
              <Link href={`/projects/${project.id}`} className="block">
                <h2 className="text-xl sm:text-2xl pb-3 sm:pb-4 md:pb-6 uppercase">
                  • {project.name}
                </h2>
                <div
                  key={index}
                  className="group transition-all duration-300 ease-in-out hover:scale-95"
                >
                  <div className="relative overflow-hidden">
                    <div className="transform transition-all duration-300 ease-in-out group-hover:scale-110">
                      <Image
                        src={project.image || '/placeholder.svg'}
                        alt={project.name}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-3 sm:pt-4 md:pt-6 pb-2 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <RoundedButton
                      className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-sm sm:text-base md:text-lg rounded-full border border-black/15 me-1.5 uppercase"
                      key={idx}
                    >
                      {' '}
                      {tag}
                    </RoundedButton>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Third Parallax Section */}
      <section
        ref={containerRef}
        className="relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen mx-4 sm:mx-8 md:mx-12 lg:mx-16"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: containerInView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={selectedProject.image || '/placeholder.svg'}
            alt={selectedProject.name}
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-9xl text-white font-bold px-4 text-center">
            {selectedProject.name}
          </h2>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;
