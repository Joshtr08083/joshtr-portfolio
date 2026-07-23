import Text from "@/app/components/Text/Text"
import { ListProps } from "./types.d"
import { Content } from "next/font/google"
import positionStyles from "./PositionStyles"

const ListModule = ({items, paddingInline = 16, paddingBlock = 0, positioning={marginInline: 0, justifySelf: "start"}, ordered = true} : ListProps) => {
    const ListTag = ordered? "ol" : "ul"
    
    return (
        <ListTag
            className={`${(ordered? "list-decimal" : "list-disc")}`}
            style={{
                ...positionStyles({...positioning}),
                paddingInline: `calc(var(--spacing) * ${paddingInline})`,
                paddingBlock: `calc(var(--spacing) * ${paddingBlock})`
            }}
        >
            {
                items.map((item: string, index:number) => (
                    <li key={index}><Text content={item} /></li>
                ))
            }
        </ListTag>
  )
}

export default ListModule