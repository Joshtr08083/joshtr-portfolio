import ProjectCard from '../components/ProjectCard/ProjectCard'
import ServerError from '../components/Error/ServerError';
import { getAllProjects } from '@/app/api/actions';
import Title from '../components/Title/Title';


export interface Project {
  id: string;
  title: string;
  description: string;
  img_url: string;
  img_x: number;
  img_y: number;
}

const ViewProjects = async () => {

  let res;
  let projects: Project[] | null = null;
  let error : string = "";
  try{
    res = await getAllProjects();
    projects = res as Project[];
  }
  catch (err) {
    console.error("JSON fetch failed:\n", err);
    error = String(err);
  }

  

  return (
    <>
      <Title title={"View Projects"} fromTop={18} size={6} bottomLine textShadow />
      {
      projects? 
      (
        <main className="pb-48 w-full flex">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-24 m-auto">
            {projects.map(project => 
              <li key={project.id}>
                <ProjectCard 
                  img_x={project.img_x}
                  img_y={project.img_y} 
                  id={project.id} 
                  title={project.title} 
                  description={project.description} 
                  img_url={project.img_url} 
                />
              </li>
            )}
          </ul>
        </main> 
      ): 
      (
        <ServerError error={error} />
      )
      }
      
    </>
  )
}

export default ViewProjects