import styles from "./PageModules.module.css"

export interface DividerProps {
    type: string;
    top: number; // (required) the distance above the line (if background is omitted, it will be symmetrical)
    bottom?: number; // (opt) distance below the line
    width?: number;  // (opt) width of the line
    showLine?: boolean; // (opt) whether or not to show horizontal line
    height?: number; // (opt) height of the line
    color?: string; // (opt) color of the line

}

const DividerModule = ({width = 100, showLine=true, top=10, bottom=top, height=1, color="var(--divider-color)"} : DividerProps) => {
  return (

    <hr 
      className={`mx-auto ${styles.divider}`} 
      style={{
        backgroundColor: (showLine? color : "transparent"),
        marginTop: `calc(var(--spacing) * ${top})`,
        marginBottom: `calc(var(--spacing) * ${bottom})`,
        width: `${width}%`,
        height: `${height}px`
      }}
    />
    
  )
}

export default DividerModule