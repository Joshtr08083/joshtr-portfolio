import React from 'react'
import { text } from 'stream/consumers';

interface Props {
    title: string;
    fromTop: number;
    bottomLine?: boolean;
    textShadow?: boolean;
    extras?: string | null;
}


const Title = ( {title, fromTop, bottomLine = false, extras = null, textShadow = false} : Props) => {
  return (
    <h1 
        className={
            `text-4xl 
            md:text-6xl
            font-bold 
            mt-${fromTop} 
            pb-2 
            mx-10 md:mx-auto
            px-0
            lg:px-10
            ${bottomLine? 'border-solid border-b-2' : ""} 
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