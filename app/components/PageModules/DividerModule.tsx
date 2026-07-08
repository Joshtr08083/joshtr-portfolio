import styles from "./PageModules.module.css"

export interface DividerProps {
    type: string;
    top: number; // (required) the distance above the line (if background is omitted, it will be symmetrical)
    bottom?: number; // (opt) distance below the line
    width?: number;  // (opt) width of the line
    showLine?: boolean; // (opt) whether or not to show horizontal line
    height?: number; // (opt) height of the line
    color?: string; // (opt) color of the line
    roundedBottom?: boolean; // (opt) beveled bottom of the divider line
    backgroundColor?: string; // (opt) background color of the divider line
    showBack?: boolean; // (opt) show the background of the divider line
}

const DividerModule = ({width = 100, showLine=true, top=10, bottom=top, height=1, color="var(--divider-color)", showBack = true, backgroundColor="var(--panel-color)", roundedBottom = false} : DividerProps) => {
  return (
    (showBack?
      <div 
        className={`
          ${styles.dividerWithBack}
          ${roundedBottom? "rounded-b-2xl": ""} 
        `}
        style={{
          "--pt": top,
          "--pb": bottom,
          "--w": width,
          "--h": height,
          "--color": (showLine? color : "transparent"),
          "--bg": backgroundColor,
        } as React.CSSProperties}

      />
    :
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
  )
}

export default DividerModule