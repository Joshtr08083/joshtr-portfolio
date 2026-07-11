
import ServerError from "../Error/ServerError"

import { TextProps, ImageProps, DividerProps, CodeProps, HeaderProps, NoteProps,  ListProps } from "@/app/components/PageModules/types.d"
import ImageModule from "@/app/components/PageModules/ImageModule"
import TextModule from "@/app/components/PageModules/TextModule"
import DividerModule from "@/app/components/PageModules/DividerModule"
import CodeModule from "@/app/components/PageModules/CodeModule"
import HeaderModule from "@/app/components/PageModules/HeaderModule"
import NoteModule from "@/app/components/PageModules/NoteModule"
import ListModule from "../PageModules/ListModule"

export type Module = (ImageProps | TextProps | DividerProps | CodeProps | HeaderProps | NoteProps |  ListProps )

export const getModule = ( module: Module, key:number,) => {
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
        case "list":
            return <ListModule key={key} {...module as ListProps} />
        default: 
            return null
    }
}

export const renderModules = (moduleJSON : Array<Module>) => {
    try {
        return moduleJSON.map(
            (module:Module, i:number) => getModule(module, i)
        );
    } catch (err) {
        console.error(err);
        return <ServerError error={`Error rendering modules: ${err}`} />;
    }
}
