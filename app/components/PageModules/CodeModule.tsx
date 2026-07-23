import Code from "../Code/Code";
import styles from "./PageModules.module.css"
import { CodeProps } from "./types.d"
import positionStyles from "./PositionStyles"

const CodeModule = ({content, language, width = 100, filename=undefined, positioning=undefined} : CodeProps) => {
  return (
    
    <div 
        className = "flex flex-col gap-0"
        style={{
            ...positionStyles({...positioning}),
            width: `${width}%`,
        }}
    >
        <span className={`${styles.codeHeader} rounded-t-2xl flex flex-row justify-between`}>
            <span className="ml-3">{language.toUpperCase()}</span>
            <span className="mr-3">{filename? filename : ""}</span>
        </span>
        <Code content={content} language={language} />
    </div>

  )
}

export default CodeModule