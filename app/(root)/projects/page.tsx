import { ShortProjects } from "@/data/projectsShort.data";
import Projects from "./components/Projects";

const page = () => {
  return (
    <main>
      <Projects projects={ShortProjects} />
    </main>
  );
};

export default page;
