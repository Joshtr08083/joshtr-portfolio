import Image from "next/image"
import { ImageProps } from "@/app/components/PageModules/types.d"
import positionStyles from "./PositionStyles"

const ImageModule = ({ url, alt, title, height, width = 100, loading="lazy", border=true, rounded = true, positioning=undefined, x=50, y=50, screenSizes={small: 100, medium: 50, large: 33}}: ImageProps) => {
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
          style={{objectPosition: `${x}% ${y}%`}}
          className={`object-cover`} 
          fill
          sizes={`(max-width: 768px) ${screenSizes.small}vw, (max-width: 1200px) ${screenSizes.medium}vw, ${screenSizes.large}vw`}
          loading={loading}
        />
      </div>
  )
}

export default ImageModule