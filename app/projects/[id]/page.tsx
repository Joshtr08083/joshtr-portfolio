import { getProjectData} from '@/app/api/actions';
import ServerError from '@/app/components/Error/ServerError';
import styles from "./project.module.css";
import Title from '@/app/components/Title/Title';
import ModuleRenderer from '@/app/components/PageModules/ModuleRenderer';
import { Module } from '@/app/components/PageModules/ModuleRenderer';
import type { Metadata } from "next";





interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params } : Props): Promise<Metadata> {
  const resParams = await params;

  try {
    const res = await getProjectData(resParams.id) ?? JSON.parse("{}");
    
    return {
      title: res["title"],
      description: `${res["title"]}: ${res["description"]}`,
      alternates: {
        canonical: `/projects/${resParams.id}`
      }
    }
  }
  catch (err) {
    return {
      title: "Project",
      description: "View project details",
      alternates: {
        canonical: `/projects`
      }
    }
  }
}

const projectPage = async ( { params } : Props) => {
  
  const resParams = await params;

  let page_data;
  let title;
  
  let error : string = "";
  try{
    const res = await getProjectData(resParams.id) ?? JSON.parse("{}");
    page_data = JSON.parse(res["page_data"]);
    title = res["title"];
  }
  catch (err) {
    console.error("JSON fetch failed:\n", err);
    error = String(err);
  }

  return (
    <>
      {
        (page_data && title)? 
        (
          <>
            <Title title={title} fromTop={18} bottomLine textShadow />
            <div className={`${styles.moduleContainer} w-xs sm:w-xl md:w-2xl xl:w-5xl`}>
                {
                  page_data.modules.map(
                    (module:Module, i:number) => (
                      <ModuleRenderer key={i} module={module} />
                    )
                  )
                }
            </div>
          </>
        ):
        (
          <ServerError error={error} />
        )
      }
    </>
  );
}

export default projectPage