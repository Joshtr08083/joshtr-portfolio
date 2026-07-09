import { ImageProps } from "./ImageModule"
import { TextProps } from "./TextModule"
import { DividerProps } from "./DividerModule"
import { CodeProps } from "./CodeModule"
import { HeaderProps } from "./HeaderModule"
import { NoteProps  } from "./NoteModule"
import { BackProps } from "./BackgroundModule"
import ImageModule from "./ImageModule"
import TextModule from "./TextModule"
import DividerModule from "./DividerModule"
import CodeModule from "./CodeModule"
import HeaderModule from "./HeaderModule"
import NoteModule from "./NoteModule"
import BackModule from "./BackgroundModule"

interface Background {
  background?: BackProps;
}

export type Module = (ImageProps | TextProps | DividerProps | CodeProps | HeaderProps | NoteProps) & Background

interface Props {
    module: Module
}

const ModuleRenderer = ({module} : Props) => {
  let contentModule;

  switch (module.type) {
    case "image": 
      contentModule = <ImageModule {...module as ImageProps}/>
      break;
    case "text":
      contentModule = <TextModule {...module as TextProps}/>
      break;
    case "divider": 
      contentModule = <DividerModule {...module as DividerProps} />
      break;
    case "code": 
      contentModule = <CodeModule {...module as CodeProps} />
      break;
    case "header": 
      contentModule = <HeaderModule {...module as HeaderProps} />
      break;
    case "note": 
      contentModule = <NoteModule {...module as NoteProps} />
      break;
    default: 
      return null
  }

  if (module.background) {
    return (<BackModule {...module.background as BackProps}>
      {contentModule}
    </BackModule>)
  } else {
    return contentModule;
  }
}

export default ModuleRenderer