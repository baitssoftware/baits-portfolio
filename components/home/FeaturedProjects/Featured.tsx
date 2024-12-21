import AnimatedButton from "@/components/shared/button/AnimatedButton";
import RoundedButton from "@/components/shared/button/RoundedButton";
import Image from "next/image";

const Featured = () => {
  const projects = [
    {
      name: "Portfolio Website",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      link: "https://example.com/portfolio",
      image: "/p1.png",
    },
    {
      name: "E-Commerce Store",
      tags: ["React", "Redux", "Node.js", "MongoDB"],
      link: "https://example.com/ecommerce",
      image: "/p2.jpg",
    },
    {
      name: "Blog Platform",
      tags: ["Next.js", "GraphQL", "Apollo Client", "Prisma"],
      link: "https://example.com/blog-platform",
      image: "/p3.jpg",
    },
    {
      name: "Task Manager",
      tags: ["Vue.js", "Vuex", "Firebase", "Material Design"],
      link: "https://example.com/task-manager",
      image: "/p4.png",
    },
  ];

  return (
    <div className="">
      <h2 className="text-7xl pt-20 py-16 px-16 border-b border-black/15">
        Featured Projects
      </h2>
      <div className="grid grid-cols-2 gap-6 px-16 py-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="col-span-2 md:col-span-1 overflow-hidden  mt-6"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
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
            </a>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center mx-auto flex items-center justify-center pb-24">
        <AnimatedButton text="View all case studies" href="/projects" />
      </div>
    </div>
  );
};

export default Featured;
