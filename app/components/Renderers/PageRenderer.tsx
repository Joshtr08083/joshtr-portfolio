import { Module } from "./ModuleRenderer"
import { getModule } from "./ModuleRenderer"
import SectionRenderer from "@/app/components/Renderers/SectionRenderer"
import { SectionProps } from "./types.d"
import ServerError from "../Error/ServerError"


/*
Important note for blocks:

There are two types of blocks: Renderers and Modules
Modules are the basic components, that render images/text/data directly
Renderers are blocks that can render multiple modules

There is a heirarchy of what renderers can render.
Each renderer can only render blocks below it

PageRenderer (TOP - can render any other renderer/module except itself)
 |_ SectionRenderer
    |_ GridRenderer
        |_ ModuleRenderer (Can only render modules)
            |_ Modules (Can't render other modules)

This shouldn't be permanent. When I have the time I want to change it to this:
Just change SectionRenderer and other renderers to accept children rather than render themselves, and then in renderModules just 
parse the JSON recursively.
*/

type Blocks = Module | SectionProps

interface Props {
    data: Array<Blocks>
}


const renderPage = (blockData : Array<Blocks>) => {
    try {
        return blockData.map(
            (block:Blocks, i:number) => {
                if (block.type === "section") {
                    return <SectionRenderer key={i} {...block as SectionProps} />
                }
                else {
                    return getModule(block as Module, i)
                }
            }
        );
    } catch (err) {
        console.error(err);
        return <ServerError error={`Error rendering modules: ${err}`} />;
    }
}


const PageRenderer = ( {data } : Props) => {

    return (
        <>{renderPage(data)}</>
    )
}

export default PageRenderer