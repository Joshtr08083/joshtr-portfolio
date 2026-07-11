import Text from "@/app/components/Text/Text"
import { ListProps } from "./types.d"
import { Content } from "next/font/google"

const ListModule = ({items, paddingInline = 16, paddingBlock = 0, marginTop=0, ordered = true} : ListProps) => {
    const ListTag = ordered? "ol" : "ul"
  
    return (
        <ListTag

            className={`${(ordered? "list-decimal" : "list-disc")}`}
            style={{
                paddingInline: `calc(var(--spacing) * ${paddingInline})`,
                paddingBlock: `calc(var(--spacing) * ${paddingBlock})`,
                marginTop: `calc(var(--spacing) * ${marginTop})`
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