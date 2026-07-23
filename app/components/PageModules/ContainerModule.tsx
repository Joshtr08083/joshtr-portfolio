import { ContainerProps } from "./types.d"
import positionStyles from "./PositionStyles"

const ContainerModule = ({flex = "col", positioning=undefined, children} : ContainerProps) => {
  return (
    <div
        className={`
            flex ${(flex === "row")? "flex-row" : "flex-col"}
        `}  
        style={{
          ...positionStyles({...positioning}),
        }}
    >
        {children}
    </div>
  )
}

export default ContainerModule