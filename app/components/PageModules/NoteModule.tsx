import Text from "@/app/components/Text/Text";
import { NoteProps } from "./types.d"
import positionStyles from "./PositionStyles"

const noteHeaderText = {
    "normal": "ⓘ NOTE",
    "warning": "▲ WARNING",
    "critical": "⚠  CRITICAL",
    "tip": "✮ TIP"
}

const NoteModule = ({content, level, paddingBlock = 5, paddingInline=5, width=100, positioning=undefined} : NoteProps) => {
  return (
    <div
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
            ...positionStyles({...positioning}),
            backgroundColor: `var(--note-${level})`,
            paddingBlock: `calc(var(--spacing) * ${paddingBlock})`,
            paddingInline: `calc(var(--spacing) * ${paddingInline})`,
            width: `${width}%`
        }}
    >
        <span className="text-xs" style={{color: "var(--note-header)"}}>{noteHeaderText[level].toUpperCase()}</span>
        <aside><Text content={content} /></aside>
    </div>
  )
}

export default NoteModule