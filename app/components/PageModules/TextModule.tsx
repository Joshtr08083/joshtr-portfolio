import Text from "@/app/components/Text/Text"
import { TextProps } from "@/app/components/PageModules/types.d"
import positionStyles from "./PositionStyles"

const TextModule = ({content, paddingBlock = 0, align="left", fontSize=1.1, positioning=undefined} : TextProps) => {

  return (
    <p
      style = {{
        ...positionStyles({...positioning}),
        paddingBlock: `calc(var(--spacing) * ${paddingBlock})`,
        fontSize: `${fontSize}rem`,
        lineHeight: `calc(1.25 / ${fontSize}rem)`,
        textAlign: align
      }}
    >
    <Text>{content}</Text>
    </p>
  )
}

export default TextModule