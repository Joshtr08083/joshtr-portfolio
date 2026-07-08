import styles from "./PageModules.module.css"

export interface HeaderProps {
    type: string;
    level: 1 | 2 | 3| 4 | 5 | 6; // (required) h1, h2, h3, etc.
    content: string; // (required) the actual text
    align?: "left" | "center" | "right" // Text alignment
    paddingInline?: number; // (opt) unlike other paddings, this just shifts text away from border
    size?: number; // (required) font size of header
    roundedTop?: boolean; // (opt) bevel the background top
    roundedBottom?: boolean; // (opt) bevel the background bottoom
    marginTop?: number; // (opt) distance above the text
    paddingTop?: number; // (opt) background extends above the text
    paddingBottom?: number; // (opt) background extends below the text
    backgroundColor?: string; // (opt) color of the background
}

const alignMap = {
    "left": "justify-start",
    "center": "justify-center",
    "right": "justify-end"
}

const HeaderModule = ({content, level, align="left", size=3, roundedTop = false, roundedBottom = false, marginTop = 0, paddingTop = 0, paddingBottom = 0, paddingInline=6, backgroundColor = "var(--panel-color)"} : HeaderProps) => {
    const HeaderTag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    
    return (
    <div
        className = {`
            flex 
            ${alignMap[align]}
            ${roundedTop? "rounded-t-2xl":""} 
            ${roundedBottom? "rounded-b-2xl":""}
        `}
        style = {{
            marginTop: `calc(var(--spacing) * ${marginTop})`,
            paddingTop: `calc(var(--spacing) * ${paddingTop})`,
            paddingBottom: `calc(var(--spacing) * ${paddingBottom})`,
            backgroundColor: backgroundColor
        }}
    >
        <HeaderTag 
            className={`
                my-auto text-center
            `}
            style = {{
                fontSize: `${size}rem`,
                paddingInline: `calc(var(--spacing) * ${paddingInline})`
            }}
        >
            {content}
        </HeaderTag>
    </div>
  )
}

export default HeaderModule