import Text from "@/app/components/Text/Text"
import { TextProps } from "@/app/components/PageModules/types.d"

const TextModule = ({content, paddingInline = 6, paddingBlock = 0, marginTop=0} : TextProps) => {

  return (
    <Text components={{
        p: ({children}) => (
          <p
            style = {{
              paddingInline: `calc(var(--spacing) * ${paddingInline})`,
              paddingBlock: `calc(var(--spacing) * ${paddingBlock})`,
              marginTop: `calc(var(--spacing) * ${marginTop})`
            }}
          >
            {children}
          </p>
        )
      }} 
      content={content}
    />
  )
}

export default TextModule