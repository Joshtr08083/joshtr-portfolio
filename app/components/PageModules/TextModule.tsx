import Text from "@/app/components/Text/Text"
import { TextProps } from "@/app/components/PageModules/types.d"
import positionStyles from "./PositionStyles"

const TextModule = ({content, paddingInline = 8, paddingBlock = 0, positioning=undefined} : TextProps) => {

  return (
    <p
      style = {{
        ...positionStyles({...positioning}),
        paddingInline: `calc(var(--spacing) * ${paddingInline})`,
        paddingBlock: `calc(var(--spacing) * ${paddingBlock})`
      }}
    >
    <Text
      content={content}
    />
    </p>
  )
}

export default TextModule