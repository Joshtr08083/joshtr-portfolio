import { GridProps } from "./types.d"
import styles from "./PageModules.module.css"
import positionStyles from "./PositionStyles"

const SectionModule = ({gap=10, rounded=true, columns=2, dynamic=true, backgroundColor="var(--panel-color)", showBack=false, children, positioning=undefined} : GridProps) => {
  return (
    <div 
        className={`
            w-full grid items-center justify-center
            ${rounded? "rounded-2xl" : ""}
            ${dynamic? styles.dynamicGridContainer : ''}
        `}
        style={{
            ...positionStyles({...positioning}),
            backgroundColor: (showBack)? backgroundColor : "transparent",
            gridTemplateColumns: `${dynamic? undefined : `repeat(${columns}, minmax(0, 1fr))`}`,
            gap: `calc(var(--spacing) * ${gap})`
        }}    
    >
        {children}
    </div>
  )
}

export default SectionModule