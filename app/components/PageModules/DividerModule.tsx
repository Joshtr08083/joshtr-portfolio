import styles from "./PageModules.module.css"

export interface DividerProps {
    type: string;
    top: number;
    width?: number;
    bottom?: number;
    showLine?: boolean;
    height?: number;
    color?: string;
}

const DividerModule = ({width = 100, showLine=true, top=10, bottom=top, height=1, color="var(--divider-color)"} : DividerProps) => {
  console.log("HI")
  return (
    <hr 
      className={styles.divider} 
      style={{
        "--bg": (showLine? color : "transparent"),
        "--mt": top,
        "--mb": bottom,
        "width": `${width}%`,
        "height": (showLine? `${height}px` : "0px")
      } as React.CSSProperties}
    />
  )
}

export default DividerModule