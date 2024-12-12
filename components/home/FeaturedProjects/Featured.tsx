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
      <h2 className="text-7xl pt-20 py-16 px-16 border-b border-black/45">
        Featured Projects
      </h2>
      <div className="grid grid-cols-2 gap-6 px-16 py-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="col-span-2 md:col-span-1 overflow-hidden group mt-6 transition-all duration-300 ease-in-out hover:scale-95"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h2 className="text-2xl pb-6 uppercase">• {project.name}</h2>
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
              <div className="pt-6 pb-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-lg rounded-full border me-1.5 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mx-auto flex items-center justify-center pb-24">
        <button className="mt-8 px-8 py-5 bg-[#212121] flex items-center justify-center gap-4 rounded-full uppercase text-white text-xl hover:bg-[#333333] transition-colors duration-300">
          <p>View all case studies</p>{" "}
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-dot"
            >
              <circle cx="12.1" cy="12.1" r="1" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Featured;
