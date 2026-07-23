import Image from "next/image"
import { ImageProps } from "@/app/components/PageModules/types.d"
import positionStyles from "./PositionStyles"

const ImageModule = ({ url, alt, title, height, width = 100, loading="lazy", border=true, rounded = true, positioning=undefined}: ImageProps) => {
  return (
      <div 
        className={`
                    relative overflow-hidden ${border? "border":""} ${rounded? "rounded-2xl": ""}
                  `}

        style={{
          ...positionStyles({...positioning}, {marginInline: "auto"}),
          width: `${width}%`,
          height: `${height}vh`,
        }}
      >
        <Image 
          src={url}
          title={title} 
          alt={alt}
          className={`object-cover`} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading={loading}
        />
      </div>
  )
}

export default ImageModule