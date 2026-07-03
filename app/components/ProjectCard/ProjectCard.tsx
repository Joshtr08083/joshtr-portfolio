import Link from "next/link";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import type { Project } from "@/app/view-projects/page.tsx";

const ProjectCard = ( {id, title, description, img_url, img_x, img_y} : Project) => {
  return (
        <Link href={`/projects/${id}`}>
            <div className={`w-80 h-80 rounded-4xl shadow-xl/30 overflow-hidden m-auto relative ${styles.container}`}>
                <Image 
                    src={img_url} 
                    className={`w-full h-full object-cover object-[${img_x}%_${img_y}%] absolute ${styles.cardImg}`} 
                    fill
                    title={title} 
                    alt={description} 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                />
                <div className={`${styles.cardDiv}`}>
                    <h1 className={`${styles.title} text-3xl mx-auto px-8 text-center font-bold`}>{title}</h1>
                    <p className={`${styles.text}`}>(click)</p>
                </div>
            </div>
        </Link>
    
  )
}

export default ProjectCard