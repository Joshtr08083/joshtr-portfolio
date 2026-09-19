import { TimelineProps } from "./types.d"
import styles from "./PageModules.module.css"

const TimelineModule = ({headers} : TimelineProps) => {
console.log(headers);
  return (
    <div
        className="fixed w-full left-0 top-0 flex justify-center px-5 z-20"
    >
        <div
            className={`
                breadcrumbs max-w-4xl text-sm px-6 py-2 rounded-b-2xl ${styles.timeline}
            `}  
        >
            <ul>
                {
                    headers.map((header, id) => (<li key={id}><a href={`#${header?.id}`}>{header?.title}</a></li>))
                }
            </ul>
        </div>
    </div>
  )
}

export default TimelineModule