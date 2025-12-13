import { projects } from '../data/projects.data';
import ProjectClient from './ProjectClient';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  return <ProjectClient id={params.id} />;
}
