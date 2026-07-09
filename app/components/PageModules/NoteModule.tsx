export interface NoteProps {
    type: string;
    content: string; // (required) the actual text
    level: "normal" | "warning" | "critical" | "tip"; // (required) importance level of the note
    innerPaddingBlock?: number; // (opt) padding of the note block around the content
    innerPaddingInline?: number; // (opt) padding inline of the not block
    width?: number;

    // generic background stuff for positioning and style
    roundedTop?: boolean; // (opt) bevel the background top
    roundedBottom?: boolean; // (opt) bevel the background bottoom
    marginTop?: number; // (opt) distance above the text
    paddingTop?: number; // (opt) background extends above the text
    paddingBottom?: number; // (opt) background extends below the text
    showBack?: boolean; // (opt) show background color, not the note itself, the panel
    backgroundColor?: string; // (opt) color of the background
}

const noteHeaderText = {
    "normal": "🛈 NOTE",
    "warning": "▲ WARNING",
    "critical": "⚠  CRITICAL",
    "tip": "✮ TIP"
}

const NoteModule = ({content, level, innerPaddingBlock = 5, innerPaddingInline=5, width=100, roundedTop = false, roundedBottom = false, marginTop = 0, paddingTop = 0, paddingBottom = 0, showBack = true, backgroundColor = "var(--panel-color)"} : NoteProps) => {
  return (
    <div
        className={`
            flex flex-col w-full
            ${roundedTop? "rounded-t-2xl":""} 
            ${roundedBottom? "rounded-b-2xl":""}
        `}
        style={{
            backgroundColor: (showBack? backgroundColor : "transparent"),
            marginTop: `calc(var(--spacing) * ${marginTop})`,
            paddingTop: `calc(var(--spacing) * ${paddingTop})`,
            paddingBottom: `calc(var(--spacing) * ${paddingBottom})`
        }}
    >
        <aside
            className={`
                mx-auto
                rounded-2xl
                flex
                flex-col
                gap-2
                shadow-xl/20
                ${showBack? "" :"border"}
            `}
            style={{
                backgroundColor: `var(--note-${level})`,
                paddingBlock: `calc(var(--spacing) * ${innerPaddingBlock})`,
                paddingInline: `calc(var(--spacing) * ${innerPaddingInline})`,
                width: `${width}%`
            }}
        >
            <span className="text-xs" style={{color: "var(--note-header)"}}>{noteHeaderText[level].toUpperCase()}</span>
            {content}
        </aside>
    </div>
  )
}

export default NoteModule