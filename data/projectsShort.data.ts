export interface TProject {
  id: string;
  name: string;
  tags: string[];
  link: string;
  image: string;
}

export const ShortProjects: TProject[] = [
  {
    id: "1",
    name: "NEDUBD",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "projects/1",
    image: "/p1.png",
  },
  {
    id: "2",
    name: "BAMS",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    link: "projects/1",
    image: "/p2.png",
  },
  {
    id: "3",
    name: "Shop Dashboard",
    tags: ["Next.js", "GraphQL", "Apollo Client", "Prisma"],
    link: "projects/1",
    image: "/p3.jpg",
  },
  {
    id: "4",
    name: "Inventory Management",
    tags: ["Vue.js", "Vuex", "Firebase", "Material Design"],
    link: "projects/1",
    image: "/p4.png",
  },
];
