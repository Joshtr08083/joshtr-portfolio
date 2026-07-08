import Code from "../Code/Code";
import styles from "./PageModules.module.css"

export interface CodeProps {
    type: string;
    content: string; // (required) the code
    language: string; // (required) language the code is written in
    filename?: string | undefined; // (opt) name of the file the code is from, could be useful
    backgroundColor?: string; // (opt) color of the background outside the block (not the code background, like the panel background)
    showBack?: boolean; // (opt) show the background -- this is used to make it continous with other elements
    width?: number; // (opt) with of the code block
    marginTop?: number; // (opt) distance between top and previous element (this doesnt extend the background)
    paddingTop?: number; // (opt) background extends upwards
    paddingBottom?: number; // (opt) background extends downwards
    roundedBottom?: boolean; // (opt) bevel background bottom,
}

const CodeModule = ({content, language, backgroundColor = "var(--panel-color)", showBack = false, width = 100, marginTop = 0, paddingTop = 0, paddingBottom = 0, roundedBottom = false, filename=undefined} : CodeProps) => {
  return (
    <div 
        className={`
            ${roundedBottom? "rounded-b-2xl" : ""}
            w-full
            m-auto
        `}
        style={{
            backgroundColor: (showBack? backgroundColor : "transparent"),
            marginTop: `calc(var(--spacing) * ${marginTop})`,
            paddingTop: `calc(var(--spacing) * ${paddingTop})`,
            paddingBottom: `calc(var(--spacing) * ${paddingBottom})`
        }}
    >
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
    </div>
  )
}

export default CodeModule