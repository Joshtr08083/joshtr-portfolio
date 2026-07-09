import React from 'react';

export interface BackProps {
    children: React.ReactNode; // (req) module within background module
    roundedTop?: boolean; // (opt) bevel the background top
    roundedBottom?: boolean; // (opt) bevel the background bottoom
    marginTop?: number; // (opt) distance above the text
    paddingTop?: number; // (opt) background extends above the text
    paddingBottom?: number; // (opt) background extends below the text
    showBack?: boolean; // (opt) hide the background color
    backgroundColor?: string; // (opt) color of the background
}


const BackModule = ({children, roundedTop = false, roundedBottom = false, marginTop = 0, paddingTop = 0, paddingBottom = 0, showBack = true, backgroundColor = "var(--panel-color)"} : BackProps) => {
  return (
    <div
        className={`
            flex flex-col full
            ${roundedTop? "rounded-t-2xl" : ""}
            ${roundedBottom? "rounded-b-2xl" : ""}
        `}

        style={{
            backgroundColor: (showBack? backgroundColor : ""),
            marginTop: `calc(var(--spacing) * ${marginTop})`,
            paddingTop: `calc(var(--spacing) * ${paddingTop})`,
            paddingBottom: `calc(var(--spacing) * ${paddingBottom})`
        }}
    >
        {children}
    </div>
  )
}

export default BackModule