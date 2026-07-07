import styles from "./PageModules.module.css"

export interface TextProps {
    type: string;
    content: string;
    roundedTop?: boolean;
    roundedBottom?: boolean;
    marginTop?: number;
    paddingTop?: number;
    paddingBottom?: number;
    backgroundColor?: string;
}

const TextModule = ({content, roundedTop, roundedBottom, marginTop = 0, paddingTop = 4, paddingBottom = 4, backgroundColor = "var(--panel-color)"} : TextProps) => {
  return (
    <p 
        className={`
                    ${styles.textContainer} 
                    ${roundedBottom? "rounded-b-2xl": ""} 
                    ${roundedTop? "rounded-t-2xl": ""}
                    px-6
                    `} 
        style={{
                '--mt': marginTop,
                '--pt': paddingTop,
                '--pb': paddingBottom,
                '--bg': backgroundColor
                } as React.CSSProperties}
    >
        {content}
    </p>
  )
}

export default TextModule