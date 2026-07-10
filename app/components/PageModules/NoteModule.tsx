import Text from "@/app/components/Text/Text";
import { NoteProps } from "./types.d"

const noteHeaderText = {
    "normal": "ⓘ NOTE",
    "warning": "▲ WARNING",
    "critical": "⚠  CRITICAL",
    "tip": "✮ TIP"
}

const NoteModule = ({content, level, paddingBlock = 5, paddingInline=5, width=100, marginTop=0} : NoteProps) => {
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
                        width: `${width}%`,
                        marginTop: `calc(var(--spacing) * ${marginTop})`
                    }}
                >
                     <span className="text-xs" style={{color: "var(--note-header)"}}>{noteHeaderText[level].toUpperCase()}</span>
                    {children}
                </aside>
            )
        }}
        content={content}
    />
  )
}

export default NoteModule