import Link from "next/link";
import styles from './ProjectCard.module.css';

interface Props {
    id: number;
    title: string;
    description: string;
    img_url: string;
}

const ProjectCard = ( {id, title, description, img_url} : Props) => {
  return (
    
        <div className="w-48 h-48 rounded-xl border-2 overflow-hidden">
            <Link href={`/projects/${id}`}>
                <img src={img_url} className="object-cover"></img>
            </Link>
        </div>
    
  )
}

export default ProjectCard