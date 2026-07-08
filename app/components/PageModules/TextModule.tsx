export interface TextProps {
    type: string;
    content: string; // (required) the actual text
    roundedTop?: boolean; // (opt) bevel the background top
    roundedBottom?: boolean; // (opt) bevel the background bottoom
    marginTop?: number; // (opt) distance above the text
    paddingTop?: number; // (opt) background extends above the text
    paddingBottom?: number; // (opt) background extends below the text
    backgroundColor?: string; // (opt) color of the background
}

const TextModule = ({content, roundedTop = false, roundedBottom = false, marginTop = 0, paddingTop = 4, paddingBottom = 4, backgroundColor = "var(--panel-color)"} : TextProps) => {
  return (
    <p 
        className={`
                    ${roundedBottom? "rounded-b-2xl": ""} 
                    ${roundedTop? "rounded-t-2xl": ""}
                    px-6
                    `} 
        style = {{
          marginTop: `calc(var(--spacing) * ${marginTop})`,
          paddingTop: `calc(var(--spacing) * ${paddingTop})`,
          paddingBottom: `calc(var(--spacing) * ${paddingBottom})`,
          backgroundColor: backgroundColor
        }}
    >
        {content}
    </p>
  )
}

export default TextModule