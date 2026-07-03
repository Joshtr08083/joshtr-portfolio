import React from 'react'
import { text } from 'stream/consumers';

interface Props {
    title: string;
    fromTop: number;
    bottomLine?: boolean;
    textShadow?: boolean;
    size: number;
    extras?: string | null;
}

const Title = ( {title, fromTop, bottomLine = false, size, extras = null, textShadow = false} : Props) => {
  return (
    <h1 
        className={
            `text-${size}xl 
            font-bold 
            mx-auto 
            mt-${fromTop} 
            pb-2 
            ${bottomLine? 'border-solid md:border-b-2 md:px-10' : ""} 
            ${extras? extras : ""}
            text-center
        `}
        style = {textShadow? {
           textShadow: "12px 12px 8px #00000060"
        }:{}}
    >
        {title}
    </h1>
  )
}

export default Title