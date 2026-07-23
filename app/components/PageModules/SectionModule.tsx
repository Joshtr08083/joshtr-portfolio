import { SectionProps } from "./types.d"
import positionStyles from "./PositionStyles"

const SectionModule = ({paddingTop=10, paddingBottom=10, rounded=true, backgroundColor="var(--panel-color)", showBack=true, positioning=undefined, children} : SectionProps) => {
  return (
    <section 
        className={`
            flex w-full flex-col shadow-2xl/30 md:shadow-2xl/100
            ${rounded? "rounded-2xl" : ""}
        `}
        style={{
            ...positionStyles({...positioning}),
            backgroundColor: (showBack)? backgroundColor : "transparent",
            paddingTop: `calc(var(--spacing) * ${paddingTop})`,
            paddingBottom: `calc(var(--spacing) * ${paddingBottom})`,
        }}    
    >
        {children}
    </section>
  )
}

export default SectionModule