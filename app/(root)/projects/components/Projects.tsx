import RoundedButton from "@/components/shared/button/RoundedButton";
import { TProject } from "@/data/projectsShort.data";
import Image from "next/image";
import Link from "next/link";

interface FeaturedProps {
  projects: TProject[];
}

const Projects: React.FC<FeaturedProps> = ({ projects }) => {
  return (
    <div className="">
      <h2 className="text-7xl pt-20 py-16 px-16 border-b border-black/15">
        All Projects
      </h2>
      <div className="grid grid-cols-2 gap-6 px-16 py-16">
        {projects.map((project, index) => (
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
    </div>
  );
};

export default Projects;
