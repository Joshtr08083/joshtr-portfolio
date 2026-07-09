import Code from "../Code/Code";
import styles from "./PageModules.module.css"

export interface CodeProps {
    type: string;
    content: string; // (required) the code
    language: string; // (required) language the code is written in
    filename?: string | undefined; // (opt) name of the file the code is from, could be useful
    width?: number; // (opt) with of the code block
}

const CodeModule = ({content, language, width = 100, filename=undefined} : CodeProps) => {
  return (
    
    <div 
        className = "flex flex-col m-auto gap-0"
        style={{
            width: `${width}%`
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