import { SectionProps } from "./types.d"
import positionStyles from "./PositionStyles"

const SectionModule = ({paddingTop=10, paddingBottom=30, roundedTop=true, roundedBottom=true, backgroundColor="var(--panel-color)", showBack=true, positioning=undefined, children} : SectionProps) => {
  return (
    <section 
        className={`
            flex w-full flex-col shadow-2xl/30 md:shadow-2xl/100
            ${roundedTop? "rounded-t-2xl" : ""} ${roundedBottom? "rounded-b-2xl": ""}
        `}
        style={{
            ...positionStyles({...positioning}, {marginInline: 0, paddingInline: 20}),
            backgroundColor: (showBack)? backgroundColor : "transparent",
            paddingTop: `calc(var(--spacing) * ${paddingTop})`,
            paddingBottom: `calc(var(--spacing) * ${paddingBottom})`
        }}    
    >
        {children}
    </section>
  )
}

export default SectionModule