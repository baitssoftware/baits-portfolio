import AnimatedButton from '@/components/shared/button/AnimatedButton';
import RoundedButton from '@/components/shared/button/RoundedButton';
import type { TProject } from '@/data/projectsShort.data';
import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';

interface FeaturedProps {
  projects: TProject[];
}

const Featured: React.FC<FeaturedProps> = ({ projects }) => {
  return (
    <div className="">
      <h2 className="text-3xl sm:text-5xl lg:text-7xl pt-8 sm:pt-12 lg:pt-20 py-6 sm:py-10 lg:py-16 px-4 sm:px-8 lg:px-16 border-b border-black/15">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16">
        {projects.map((project, index) => (
          <div key={index} className="col-span-1 overflow-hidden mt-4 sm:mt-6">
            <Link href={`/projects/${project.id}`} className="block">
              <h2 className="text-xl sm:text-2xl pb-3 sm:pb-6 uppercase">• {project.name}</h2>
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
                      priority={index < 2}
                    />
                  </div>
                </div>
              </div>
              <div className="pt-3 sm:pt-6 pb-2 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <RoundedButton
                    className="px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg rounded-full border border-black/15 me-1.5 uppercase"
                    key={idx}
                  >
                    {tag}
                  </RoundedButton>
                ))}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center mx-auto flex items-center justify-center pb-12 sm:pb-16 lg:pb-24">
        <AnimatedButton text="View all case studies" href="/projects" />
      </div>
    </div>
  );
};

export default Featured;
