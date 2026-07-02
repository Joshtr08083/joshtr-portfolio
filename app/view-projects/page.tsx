import React from 'react'
import ProjectCard from '../components/ProjectCard/ProjectCard'

interface Project {
  id: number;
  title: string;
  description: string;
  img_url: string;
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
      <h1 className="mx-auto mt-24 text-6xl" style={{textShadow: "20px 20px 5px #00000060"}}><strong>View Projects</strong></h1>
      {
      projects? (
      <main>
        <ul className="grid grid-cols-2 gap-24">
          {projects.map(project => <ProjectCard id={project.id} title={project.title} description={project.description} img_url={project.img_url} />)}
        </ul>
      </main> ): 
      ( // Maybe make this into a reusable modal to use *when* other errors come up
        <div className="flex flex-col m-auto gap-12 mx-auto mt-18 grow">
          <h2 className="m-auto text-red-800 dark:text-red-400 font-bold text-6xl">500 | SERVER ERROR</h2>
          <p className="m-auto font-bold text-2xl"> Try refreshing or trying again later</p>
          <div className="grow"></div>
          <p className="mx-auto mb-2"><em>{error}</em></p>
        </div>
      )
      }
      
    </>
  )
}

export default ViewProjects