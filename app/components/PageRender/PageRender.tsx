import { TextProps, ImageProps, DividerProps, CodeProps, HeaderProps, NoteProps, SectionProps } from "@/app/components/PageModules/types.d"

import ImageModule from "@/app/components/PageModules/ImageModule"
import TextModule from "@/app/components/PageModules/TextModule"
import DividerModule from "@/app/components/PageModules/DividerModule"
import CodeModule from "@/app/components/PageModules/CodeModule"
import HeaderModule from "@/app/components/PageModules/HeaderModule"
import NoteModule from "@/app/components/PageModules/NoteModule"
import SectionModule from "../PageModules/SectionModule"

import ServerError from "../Error/ServerError"

export type Module = (ImageProps | TextProps | DividerProps | CodeProps | HeaderProps | NoteProps | SectionProps)

interface Props {
    data: any
}
const PageRender = ( {data } : Props) => {
    let error:string = "";

    const get_module = (key:number, module: Module) => {
        switch (module.type) {
            case "image": 
                return <ImageModule key={key} {...module as ImageProps}/>
            case "text":
                return <TextModule key={key} {...module as TextProps}/>
            case "divider": 
                return <DividerModule key={key} {...module as DividerProps} />
            case "code": 
                return <CodeModule key={key} {...module as CodeProps} />
            case "header": 
                return <HeaderModule key={key} {...module as HeaderProps} />
            case "note": 
                return <NoteModule key={key} {...module as NoteProps} />
            case "section":
                return <SectionModule key={key} {...module as SectionProps} />
            default: 
                return null
        }
    }

    const render_modules = (data: any) => {
        try {
            const output: Array<React.ReactNode> = data.map(
                (module:Module, i:number) => get_module(i, module)
            )
            return output
        } catch (err) {
            error += `Error rendering modules: ${err}`;
            console.error(err);
            return undefined;
        }
    }

    const modules = render_modules(data)
    
    return (
        (modules)? (
            <>{modules}</>
        ):
        (
            <ServerError error={error} />
        )
    )
}

export default PageRender