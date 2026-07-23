import { PositionProps } from "./types.d";
import React from "react";

const positionStyles = ({marginTop=0, justify="auto"}: PositionProps) => {
    return {
        marginTop: `calc(var(--spacing) * ${marginTop})`,
        justifySelf: justify
    } as React.CSSProperties

}

export default positionStyles