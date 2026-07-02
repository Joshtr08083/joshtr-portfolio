import Link from "next/link";
import styles from "./ProjectCard.module.css";

interface Props {
    id: number;
    title: string;
    description: string;
    img_url: string;
    x: number;
    y: number;
}

const ProjectCard = ( {id, title, description, img_url, x, y} : Props) => {
  return (
        <Link href={`/projects/${id}`}>
            <div className={`w-80 h-80 rounded-4xl shadow-xl/30 overflow-hidden m-auto relative ${styles.container}`}>
                <img 
                    src={img_url} 
                    className={`w-full h-full object-cover object-[${x}%_${y}%] absolute ${styles.cardImg}`} 
                    title={title} 
                    alt={description} 
                />
                <div className={`${styles.cardDiv}`}>
                    <h1 className={`${styles.title} text-3xl m-auto p-8 text-center font-bold`}>{title}</h1>
                </div>
            </div>
        </Link>
    
  )
}

export default ProjectCard