import Background from "../Background/Background";
import styles from "./PageModules.module.css"
import { HeaderProps } from "./types.d"


const alignMap = {
    "left": "justify-start",
    "center": "justify-center",
    "right": "justify-end"
}

const HeaderModule = ({content, level, align="left", size=3, paddingInline=6, marginTop=0, id=undefined} : HeaderProps) => {
    const HeaderTag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    
    return (
        <span className={`flex flex-row  ${alignMap[align]}`}>
            <HeaderTag 
                className={`
                    my-auto text-center
                `}
                style = {{
                    fontSize: `${size}rem`,
                    paddingInline: `calc(var(--spacing) * ${paddingInline})`,
                    marginTop: `calc(var(--spacing) * ${marginTop})`
                }}
                id = {id}
            >
                {content}
            </HeaderTag>
        </span>
    )
}

export default HeaderModule