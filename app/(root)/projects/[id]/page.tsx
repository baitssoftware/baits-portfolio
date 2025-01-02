"use client";

import RoundedButton from "@/components/shared/button/RoundedButton";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRef } from "react";
import { projects } from "../data/projects.data";
import MarqueeText from "@/components/home/marquee/MarqueeText";
import Link from "next/link";
import { ShortProjects } from "@/data/projectsShort.data";

const ProjectDetails = () => {
  const params = useParams();
  const { id } = params;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const selectedProject = projects.find((project) => project.id === id);

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <div className="w-full">
      <section className="w-full min-h-[70vh] flex flex-col justify-center px-4 lg:px-16 mb-16">
        <div className="py-32 border-b border-black/15">
          <h1 className="text-[10rem] uppercase font-bold leading-[8rem]">
            {selectedProject.name}
          </h1>
        </div>

        <div className="grid grid-cols-8 pb-28 pt-6 gap-28 text-2xl">
          <div className="col-span-4">
            <p>Description</p>
          </div>
          <div className="col-span-2">{selectedProject.description}</div>
          <div className="col-span-2 me-auto">
            <div className="pt-6 pb-2">
              {selectedProject.tags.map((tag, idx) => (
                <div className="inline-block pb-2.5" key={idx}>
                  <RoundedButton className="px-4 py-2 text-lg rounded-full border border-black/15 me-1.5 uppercase">
                    {tag}
                  </RoundedButton>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-[120%] -top-[10%]" // Added extra height for smooth parallax
        >
          <Image
            src="/baits.png"
            alt="Parallax background"
            fill
            sizes="100vw"
            quality={90}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              backgroundAttachment: "fixed",
            }}
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl text-white font-bold">
            {selectedProject.name}
          </h2>
        </div>
      </section>

      <section className="w-full px-4 lg:px-16 mb-10">
        <h2 className="text-7xl pt-20 py-16 border-b border-black/15">
          Company
        </h2>
        <div className="grid grid-cols-8 pb-28 pt-6 gap-28 text-2xl">
          <div className="col-span-4">
            <p>About:</p>
          </div>
          <div className="col-span-2">
            {selectedProject.details?.companyAbout?.description}
          </div>
          <div className="col-span-2 me-auto space-y-6">
            <div className="space-y-1">
              <p className="underline underline-offset-8">Industry:</p>
              <p className="">
                {selectedProject.details?.companyAbout?.industry}
              </p>
            </div>
            <div className="space-y-1">
              <p className="underline underline-offset-8">Company Size:</p>
              <p className="">
                {selectedProject.details?.companyAbout?.companySize}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={containerRef}
        className="relative overflow-hidden h-screen mx-16"
      >
        <div className="overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute inset-0 w-full h-[120%] -top-[10%]" // Added extra height for smooth parallax
          >
            <Image
              src="/baits3.jpg"
              alt="Parallax background"
              fill
              sizes="100vw"
              quality={90}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                backgroundAttachment: "fixed",
              }}
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-4xl md:text-9xl text-white font-bold">
              {selectedProject.name}
            </h2>
          </div>
        </div>
      </section>

      <section className="w-full px-4 lg:px-16 mb-16">
        <h2 className="text-7xl pt-20 py-16 border-b border-black/15">
          Challenge & Solution
        </h2>
        <div className="grid grid-cols-8 pb-28 pt-6 gap-28 text-2xl">
          <div className="col-span-4">
            <p>Services we provided:</p>
          </div>
          <div className="col-span-2">
            <div className="space-y-16">
              <p className="underline underline-offset-8">Challenge:</p>
              <p className="">
                {selectedProject.details?.challengeAndSolution.challenge}
              </p>
            </div>
          </div>
          <div className="col-span-2 me-auto space-y-6">
            <div className="space-y-16">
              <p className="underline underline-offset-8">Challenge:</p>
              <p className="">
                {selectedProject.details?.challengeAndSolution.solution}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={containerRef}
        className="relative overflow-hidden h-screen mx-16"
      >
        <div className="overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute inset-0 w-full h-[120%] -top-[10%]" // Added extra height for smooth parallax
          >
            <Image
              src="/baits2.png"
              alt="Parallax background"
              fill
              sizes="100vw"
              quality={90}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                backgroundAttachment: "fixed",
              }}
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-4xl md:text-9xl text-white font-bold">
              {selectedProject.name}
            </h2>
          </div>
        </div>
      </section>
      <section className="">
        <div className="grid grid-cols-2 gap-6 px-16 py-16">
          {ShortProjects?.slice(0, 2).map((project, index) => (
            <div
              key={index}
              className="col-span-2 md:col-span-1 overflow-hidden  mt-6"
            >
              <Link href={`/projects/${project.id}`} className="block">
                <h2 className="text-2xl pb-6 uppercase">• {project.name}</h2>
                <div
                  key={index}
                  className=" group transition-all duration-300 ease-in-out hover:scale-95"
                >
                  <div className="relative overflow-hidden">
                    <div className="transform transition-all duration-300 ease-in-out group-hover:scale-110">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-6 pb-2 flex">
                  {project.tags.map((tag, idx) => (
                    <RoundedButton
                      className="px-4 py-2 text-lg rounded-full border border-black/15 me-1.5 uppercase"
                      key={idx}
                    >
                      {" "}
                      {tag}
                    </RoundedButton>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <MarqueeText text={"WE are baits."} />
    </div>
  );
};

export default ProjectDetails;
