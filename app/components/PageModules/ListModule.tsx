import Text from "@/app/components/Text/Text"
import { ListProps } from "./types.d"
import positionStyles from "./PositionStyles"

const ListModule = ({items, paddingBlock = 0, positioning={marginInline: 0, justifySelf: "start"}, ordered = true} : ListProps) => {
    const ListTag = ordered? "ol" : "ul"
    
    return (
        <ListTag
            className={`${(ordered? "list-decimal" : "list-disc")}`}
            style={{
                ...positionStyles({...positioning}, {paddingInline: 5}),
                paddingBlock: `calc(var(--spacing) * ${paddingBlock})`
            }}
        >
            {
                items.map((item: string, index:number) => (
                    <li key={index}><Text>{item}</Text></li>
                ))
            }
        </ListTag>
  )
}

export default ListModule