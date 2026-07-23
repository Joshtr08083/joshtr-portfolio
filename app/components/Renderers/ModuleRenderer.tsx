
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

export type Module = (Types.ImageProps | Types.TextProps | Types.DividerProps | Types.CodeProps | Types.HeaderProps | Types.NoteProps |  Types.ListProps | Types.SectionProps)

const getModule = ( module: Module, key:number,) => {
    switch (module.type) {
        case "image": 
            return <ImageModule key={key} {...module as Types.ImageProps}/>
        case "text":
            return <TextModule key={key} {...module as Types.TextProps}/>
        case "divider": 
            return <DividerModule key={key} {...module as Types.DividerProps} />
        case "code": 
            return <CodeModule key={key} {...module as Types.CodeProps} />
        case "header": 
            return <HeaderModule key={key} {...module as Types.HeaderProps} />
        case "note": 
            return <NoteModule key={key} {...module as Types.NoteProps} />
        case "list":
            return <ListModule key={key} {...module as Types.ListProps} />
        case "section":
            const {elements: section_data, ...section_props} = module as Types.SectionModuleProps;
            return <SectionModule key={key} {...section_props}>{renderModules(section_data)}</SectionModule>
        case "grid":
            const {elements: grid_data, ...grid_props} = module as Types.GridModuleProps;
            return <GridModule key={key} {...grid_props}>{renderModules(grid_data)}</GridModule>
        case "container":
            const {elements: container_data, ...container_props} = module as Types.ContainerModuleProps;
            return <ContainerModule key={key} {...container_props}>{renderModules(container_data)}</ContainerModule>
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
