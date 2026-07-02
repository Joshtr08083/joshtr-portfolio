import React from 'react'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import ServerError from '../components/Error/ServerError';

interface Project {
  id: number;
  title: string;
  description: string;
  img_url: string;
  x: number;
  y: number;
}

const ViewProjects = async () => {

  let res;
  let projects: Project[] | null = null;
  let error : string = "";
  try{
    res = await fetch('http://localhost:4000/projects');

    if (res) {
      projects = await res.json();
    }
  }
  catch (err) {
    console.error("JSON fetch failed:\n", err);
    error = String(err);
  }

  

  return (
    <>
      <h1
          className="mx-auto mt-24 text-6xl font-bold border-solid border-b-2 pe-10 ps-10 pb-2"
          style={{ textShadow: "12px 12px 8px #00000060" }}
        >
          View Projects
        </h1>
      <div className="pb-2" />
      {
      projects? 
      (
        <main className="pb-48 w-full flex">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-24 m-auto">
            {projects.map(project => 
              <li key={project.id}>
                <ProjectCard 
                  x={project.x}
                  y={project.y} 
                  id={project.id} 
                  title={project.title} 
                  description={project.description} 
                  img_url={project.img_url} 
                />
              </li>)}
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