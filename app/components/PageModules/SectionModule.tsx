import Text from "@/app/components/Text/Text"
import PageRender from "../PageRender/PageRender";
import { SectionProps } from "./types.d";

const SectionModule = ({module_data, paddingTop=10, paddingBottom=10, rounded=true, marginTop=10, backgroundColor="var(--panel-color)", showBack=true} : SectionProps) => {

  return (
    <section 
        className={`
            flex w-full flex-col
            ${rounded? "rounded-2xl" : ""}
        `}
        style={{
            backgroundColor: (showBack)? backgroundColor : "transparent",
            marginTop: `calc(var(--spacing) * ${marginTop})`,
            paddingTop: `calc(var(--spacing) * ${paddingTop})`,
            paddingBottom: `calc(var(--spacing) * ${paddingBottom})`,
        }}    
    >
        <PageRender data={module_data} />
    </section>
  )
}

export default SectionModule