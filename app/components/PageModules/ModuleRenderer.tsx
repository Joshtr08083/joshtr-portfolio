import { ImageProps } from "./ImageModule"
import { TextProps } from "./TextModule"
import { DividerProps } from "./DividerModule"
import ImageModule from "./ImageModule"
import TextModule from "./TextModule"
import DividerModule from "./DividerModule"

export type Module = ImageProps | TextProps | DividerProps

interface Props {
    module: Module
}

const ModuleRenderer = ({module} : Props) => {
  switch (module.type) {
    case "image": return <ImageModule {...module as ImageProps}/>
    case "text": return <TextModule {...module as TextProps}/>
    case "divider": return <DividerModule {...module as DividerProps} />
    default: return null
  }
}

export default ModuleRenderer