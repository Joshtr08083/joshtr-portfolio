import Text from "@/app/components/Text/Text"
import { TextProps } from "@/app/components/PageModules/types.d"
import positionStyles from "./PositionStyles"

const TextModule = ({content, paddingInline = 8, paddingBlock = 0, align="left", positioning=undefined} : TextProps) => {

  return (
    <p
      style = {{
        ...positionStyles({...positioning}),
        paddingInline: `calc(var(--spacing) * ${paddingInline})`,
        paddingBlock: `calc(var(--spacing) * ${paddingBlock})`,
        textAlign: align
      }}
    >
    <Text>{content}</Text>
    </p>
  )
}

export default TextModule