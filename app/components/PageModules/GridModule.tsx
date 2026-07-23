import { GridProps } from "./types.d"
import styles from "./PageModules.module.css"
import positionStyles from "./PositionStyles"

const SectionModule = ({padding=0, rounded=true, columns=2, backgroundColor="var(--panel-color)", showBack=false, children, positioning=undefined} : GridProps) => {
  return (
    <div 
        className={`
            w-full flex-col grid items-center
            ${rounded? "rounded-2xl" : ""}
            ${styles.gridContainer}
        `}
        style={{
            ...positionStyles({...positioning}),
            backgroundColor: (showBack)? backgroundColor : "transparent",
            padding: `calc(var(--spacing) * ${padding})`,
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`
        }}    
    >
        {children}
    </div>
  )
}

export default SectionModule