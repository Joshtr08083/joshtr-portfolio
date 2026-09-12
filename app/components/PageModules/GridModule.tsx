import { GridProps } from "./types.d"
import styles from "./PageModules.module.css"
import positionStyles from "./PositionStyles"

const SectionModule = ({gap=10, rounded=true, columns=2, dynamic=true, backgroundColor="var(--panel-color)", showBack=false, children, positioning=undefined, align="center", justify="center", dynamicMinCellWidth=250} : GridProps) => {
  return (
    <div 
        className={`
            w-full grid
            ${rounded? "rounded-2xl" : ""}
        `}
        style={{
            ...positionStyles({...positioning}),
            backgroundColor: (showBack)? backgroundColor : "transparent",
            gridTemplateColumns: `${dynamic? `repeat(auto-fit, minmax(${dynamicMinCellWidth}px, 1fr))`: `repeat(${columns}, minmax(0, 1fr))`}`,
            gap: `calc(var(--spacing) * ${gap})`,
            alignItems: align,
            justifyItems: justify
        }}    
    >
        {children}
    </div>
  )
}

export default SectionModule