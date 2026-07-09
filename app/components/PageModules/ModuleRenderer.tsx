import { ImageProps } from "./ImageModule"
import { TextProps } from "./TextModule"
import { DividerProps } from "./DividerModule"
import { CodeProps } from "./CodeModule"
import { HeaderProps } from "./HeaderModule"
import { NoteProps  } from "./NoteModule"
import ImageModule from "./ImageModule"
import TextModule from "./TextModule"
import DividerModule from "./DividerModule"
import CodeModule from "./CodeModule"
import HeaderModule from "./HeaderModule"
import NoteModule from "./NoteModule"
import { Header } from "next/dist/lib/load-custom-routes"

export type Module = ImageProps | TextProps | DividerProps | CodeProps | HeaderProps | NoteProps

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
    case "note": return <NoteModule {...module as NoteProps} />
    default: return null
  }
}

export default ModuleRenderer