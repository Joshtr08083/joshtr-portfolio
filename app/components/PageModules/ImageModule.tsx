import Image from "next/image"
import { ImageProps } from "@/app/components/PageModules/types.d"

const ImageModule = ({ url, alt, title, height, width = 100, loading="lazy", border=true, rounded = true, marginTop=0}: ImageProps) => {
  
  return (
      <div 
        className={`
                    relative overflow-hidden ${border? "border":""} m-auto ${rounded? "rounded-2xl": ""}
                  `}

        style={{
          width: `${width}%`,
          height: `${height}vh`,
          marginTop: `calc(var(--spacing) * ${marginTop})`
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