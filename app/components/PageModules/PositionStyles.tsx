import { PositionProps } from "./types.d";
import React from "react";

interface Props {
    props: PositionProps,
    defaults?: PositionProps
}

const RECALCULATE_PROPS = ["marginTop", "marginInline"]

const defaults = {marginTop: 0, justifySelf: "auto", marginInline: 0} as PositionProps;

const positionStyles = (
    props = {} as PositionProps,
    override_defaults = {} as PositionProps 
) => {

    const new_defaults = {...defaults, ...override_defaults} as PositionProps;

    const CSSProps = {} as React.CSSProperties;
    Object.entries(new_defaults).forEach(([prop, value]) => {
        const propValue = props[prop as keyof PositionProps];
        
        // if the default value is a number and theres no prop value, or there is a prop value and it's a number,
        // and the prop is one of them that should be recaclulated with spacing, then it changes the number to calc(var(--spacing) * VALUE)
        if (RECALCULATE_PROPS.includes(prop) && ((typeof propValue === "number" && propValue !== 0) || (propValue === undefined && typeof value === "number" && value !== 0))) {
            CSSProps[prop as keyof PositionProps] = (propValue !== undefined)? `calc(var(--spacing) * ${propValue})` : `calc(var(--spacing) * ${value})`
        } else {
            CSSProps[prop as keyof React.CSSProperties] = (propValue !== undefined)? propValue : value;
        }
    })
    

    return CSSProps

}

export default positionStyles