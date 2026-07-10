import Text from "@/app/components/Text/Text"

export interface TextProps {
    type: string;
    content: string; // (required) the actual text
    paddingInline?: number // (opt) L/R padding
    paddingBlock?: number // (opt) T/B padding
}

const TextModule = ({content, paddingInline = 6, paddingBlock = 0} : TextProps) => {

  return (
    <Text components={{
        p: ({children}) => (
          <p
            style = {{
              paddingInline: `calc(var(--spacing) * ${paddingInline})`,
              paddingBlock: `calc(var(--spacing) * ${paddingBlock})`
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