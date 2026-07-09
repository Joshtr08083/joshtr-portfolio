import Background from "../Background/Background";
import styles from "./PageModules.module.css"

export interface HeaderProps {
    type: string;
    level: 1 | 2 | 3| 4 | 5 | 6; // (required) h1, h2, h3, etc.
    content: string; // (required) the actual text
    align?: "left" | "center" | "right" // (opt) text alignment
    paddingInline?: number; // (opt)  shifts text away from border
    size?: number; // (opt) font size of header
   
}

const alignMap = {
    "left": "justify-start",
    "center": "justify-center",
    "right": "justify-end"
}

const HeaderModule = ({content, level, align="left", size=3, paddingInline=6} : HeaderProps) => {
    const HeaderTag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    
    return (
        <span className={`flex flex-row  ${alignMap[align]}`}>
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
        </span>
    )
}

export default HeaderModule