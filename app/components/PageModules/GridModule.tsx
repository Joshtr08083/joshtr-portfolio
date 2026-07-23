import { GridProps } from "./types.d"
import styles from "./PageModules.module.css"
import positionStyles from "./PositionStyles"

const SectionModule = ({paddingInline=0, gap=0, rounded=true, columns=2, backgroundColor="var(--panel-color)", showBack=false, children, positioning=undefined} : GridProps) => {
  return (
    <div 
        className={`
            w-full grid items-center
            ${rounded? "rounded-2xl" : ""}
            ${styles.gridContainer}
        `}
        style={{
            ...positionStyles({...positioning}),
            backgroundColor: (showBack)? backgroundColor : "transparent",
            paddingInline: `calc(var(--spacing) * ${paddingInline})`,
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            gap: `calc(var(--spacing) * ${gap})`
        }}    
    >
        {children}
    </div>
  )
}

export default SectionModule