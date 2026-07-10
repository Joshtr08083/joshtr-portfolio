import Text from "@/app/components/Text/Text";

export interface NoteProps {
    type: string;
    content: string; // (required) the actual text
    level: "normal" | "warning" | "critical" | "tip"; // (required) importance level of the note
    paddingBlock?: number; // (opt) padding of the note block around the content
    paddingInline?: number; // (opt) padding inline of the not block
    width?: number;
}

const noteHeaderText = {
    "normal": "ⓘ NOTE",
    "warning": "▲ WARNING",
    "critical": "⚠  CRITICAL",
    "tip": "✮ TIP"
}

const NoteModule = ({content, level, paddingBlock = 5, paddingInline=5, width=100} : NoteProps) => {
  return (
    <Text 
        components={{
            p: ({node, children}) => (
                <aside
                    className={`
                        mx-auto
                        rounded-2xl
                        flex
                        flex-col
                        gap-2
                        inset-shadow-xs/50
                        dark:inset-shadow-xs/100
                    `}
                    style={{
                        backgroundColor: `var(--note-${level})`,
                        paddingBlock: `calc(var(--spacing) * ${paddingBlock})`,
                        paddingInline: `calc(var(--spacing) * ${paddingInline})`,
                        width: `${width}%`
                    }}
                >
                    {children}
                </aside>
            )
        }}
        content={content}
    />
    // <aside
        // className={`
        //     mx-auto
        //     rounded-2xl
        //     flex
        //     flex-col
        //     gap-2
        //     inset-shadow-xs/50
        //     dark:inset-shadow-xs/100
        // `}
        // style={{
        //     backgroundColor: `var(--note-${level})`,
        //     paddingBlock: `calc(var(--spacing) * ${paddingBlock})`,
        //     paddingInline: `calc(var(--spacing) * ${paddingInline})`,
        //     width: `${width}%`
        // }}
    // >
    //     <span className="text-xs" style={{color: "var(--note-header)"}}>{noteHeaderText[level].toUpperCase()}</span>
    //     {content}
    // </aside>
  )
}

export default NoteModule