import styles from "./PageModules.module.css"
import { DividerProps } from "./types.d"

const DividerModule = ({width = 100, showLine=true, top=10, bottom=top, height=1, color="var(--divider-color)"} : DividerProps) => {
  return (
    <hr 
      className={`mx-auto ${styles.divider}`} 
      style={{
        backgroundColor: (showLine? color : "transparent"),
        marginTop: `calc(var(--spacing) * ${top})`,
        marginBottom: `calc(var(--spacing) * ${bottom})`,
        width: `${width}%`,
        height: `${height}px`,
        
      }}
    />
    
  )
}

export default DividerModule