import { ImageProps } from "./ImageModule"
import { TextProps } from "./TextModule"
import { DividerProps } from "./DividerModule"
import { CodeProps } from "./CodeModule"
import { HeaderProps } from "./HeaderModule"
import ImageModule from "./ImageModule"
import TextModule from "./TextModule"
import DividerModule from "./DividerModule"
import CodeModule from "./CodeModule"
import HeaderModule from "./HeaderModule"

export type Module = ImageProps | TextProps | DividerProps | CodeProps

interface Props {
    module: Module
}

const ModuleRenderer = ({module} : Props) => {
  switch (module.type) {
    case "image": return <ImageModule {...module as ImageProps}/>
    case "text": return <TextModule {...module as TextProps}/>
    case "divider": return <DividerModule {...module as DividerProps} />
    case "code": return <CodeModule {...module as CodeProps} />
    case "header": return <HeaderModule {...module as HeaderProps} />
    default: return null
  }
}

export default ModuleRenderer