import Text from "../Text/Text"
import { HeaderProps } from "./types.d"
import positionStyles from "./PositionStyles"

const alignMap = {
    "left": "justify-start",
    "center": "justify-center",
    "right": "justify-end"
}

const HeaderModule = ({content, level, align="left", size=3, paddingInline=6, positioning={marginInline: 0}, id=undefined} : HeaderProps) => {
    const HeaderTag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    
    return (
        <span className={`flex flex-row  ${alignMap[align]}`}>
            <HeaderTag 
                className={`
                    my-auto text-center
                `}
                style = {{
                    ...positionStyles({...positioning}),
                    fontSize: `${size}rem`,
                    paddingInline: `calc(var(--spacing) * ${paddingInline})`,
                }}
                id = {id}
            >
                <Text>{content}</Text>
            </HeaderTag>
        </span>
    )
}

export default HeaderModule