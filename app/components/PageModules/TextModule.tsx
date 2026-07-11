import Text from "@/app/components/Text/Text"
import { TextProps } from "@/app/components/PageModules/types.d"

const TextModule = ({content, paddingInline = 8, paddingBlock = 0, marginTop=0} : TextProps) => {

  return (
    <p
      style = {{
              paddingInline: `calc(var(--spacing) * ${paddingInline})`,
              paddingBlock: `calc(var(--spacing) * ${paddingBlock})`,
              marginTop: `calc(var(--spacing) * ${marginTop})`
      }}
    >
    <Text
      content={content}
    />
    </p>
  )
}

export default TextModule