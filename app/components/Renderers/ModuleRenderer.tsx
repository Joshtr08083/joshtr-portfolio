
import ServerError from "../Error/ServerError"

import * as Types from "@/app/components/PageModules/types.d"
import ImageModule from "@/app/components/PageModules/ImageModule"
import TextModule from "@/app/components/PageModules/TextModule"
import DividerModule from "@/app/components/PageModules/DividerModule"
import CodeModule from "@/app/components/PageModules/CodeModule"
import HeaderModule from "@/app/components/PageModules/HeaderModule"
import NoteModule from "@/app/components/PageModules/NoteModule"
import ListModule from "@/app/components/PageModules/ListModule"
import SectionModule from "@/app/components/PageModules/SectionModule"
import GridModule from "@/app/components/PageModules/GridModule"
import ContainerModule from "@/app/components/PageModules/ContainerModule"
import YoutubeModue from "@/app/components/PageModules/YoutubeModule"
import TimelineModule from "@/app/components/PageModules/TimelineModule"

export type Module = (Types.ImageProps | Types.TextProps | Types.DividerProps | Types.CodeProps | Types.HeaderProps | Types.NoteProps |  Types.ListProps | Types.SectionModuleProps | Types.YoutubeProps | Types.ContainerModuleProps | Types.GridModuleProps | Types.TimelineProps)

const getModule = ( module: Module, key:number,) => {
    switch (module.type) {
        case "image": {
            return <ImageModule key={key} {...module as Types.ImageProps}/>
        }
        case "text": {
            return <TextModule key={key} {...module as Types.TextProps}/>
        }
        case "divider": {
            return <DividerModule key={key} {...module as Types.DividerProps} />
        }
        case "code": {
            return <CodeModule key={key} {...module as Types.CodeProps} />
        }
        case "header": {
            return <HeaderModule key={key} {...module as Types.HeaderProps} />
        }
        case "note": {
            return <NoteModule key={key} {...module as Types.NoteProps} />
        }
        case "list": {
            return <ListModule key={key} {...module as Types.ListProps} />
        }
        case "ytvideo": {
            return <YoutubeModue key={key} {...module as Types.YoutubeProps} />
        }
        case "timeline": {
            return <TimelineModule key={key} {...module as Types.TimelineProps} />
        }
        case "section": {
            const {elements: data, ...props} = module as Types.SectionModuleProps;
            return <SectionModule key={key} {...props}>{renderModules(data)}</SectionModule>
        }
        case "grid": {
            const {elements: data, ...props} = module as Types.GridModuleProps;
            return <GridModule key={key} {...props}>{renderModules(data)}</GridModule>
        }
        case "container": {
            const {elements: data, ...props} = module as Types.ContainerModuleProps;
            return <ContainerModule key={key} {...props}>{renderModules(data)}</ContainerModule>
        }
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
