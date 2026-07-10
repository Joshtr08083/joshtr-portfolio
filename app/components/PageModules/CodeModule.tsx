import Code from "../Code/Code";
import styles from "./PageModules.module.css"
import { CodeProps } from "./types.d"

const CodeModule = ({content, language, width = 100, filename=undefined, marginTop=0} : CodeProps) => {
  return (
    
    <div 
        className = "flex flex-col m-auto gap-0"
        style={{
            width: `${width}%`,
            marginTop: `calc(var(--spacing) * ${marginTop})`
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