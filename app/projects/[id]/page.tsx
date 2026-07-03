import { getProjectData} from '@/app/api/actions';
import ServerError from '@/app/components/Error/ServerError';
import Image from 'next/image';
import styles from "./project.module.css";
import Title from '@/app/components/Title/Title';

interface Props {
    params: Promise<{ id: string }>;
}

const projectPage = async ( { params } : Props) => {
  
  const resParams = await params;

  let projectData;
  let title;
  let error : string = "";
  try{
    const res = await getProjectData(resParams.id) ?? JSON.parse("{}");
    projectData = JSON.parse(res["page_data"]);
    title = res["title"];
    if (projectData == null) {
      error = "Project Data is null"
    }
  }
  catch (err) {
    console.error("JSON fetch failed:\n", err);
    error = String(err);
  }

  return (
    <>
      {
        projectData? 
        (
          <Title title={title} fromTop={18} size={6} bottomLine textShadow />
        ):
        (
          <ServerError error={error} />
        )
      }
    </>
  );
}

export default projectPage