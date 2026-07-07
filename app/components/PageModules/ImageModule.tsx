import Image from "next/image"
import styles from "./PageModules.module.css"

type Loading = "lazy" | "eager";

export interface ImageProps {
    type: string;
    url: string;
    alt: string;
    title: string;
    width?: number;
    height: number;
    roundedTop?: boolean;
    roundedBottom?: boolean;
    marginTop?: number;
    showBack?: boolean;
    backgroundColor?: string;
    loading?: Loading;
}

const ImageModule = ({ url, alt, title, width = 100, height, marginTop = 0, roundedTop, roundedBottom, showBack, backgroundColor="var(--panel-color)", loading="lazy"}: ImageProps) => {
  
  return (
    <div className={`${styles.imageContainerBack} m-auto`}
         style={{
                  '--mt': marginTop,
                  "height": `${height}vh`,
                  '--bg': `${showBack? backgroundColor : "transparent"}`
                  } as React.CSSProperties}
    >
      <div 
        className={`
                    relative overflow-hidden border 
                    ${styles.imageContainer} 
                    ${roundedBottom? "rounded-b-2xl": ""} 
                    ${roundedTop? "rounded-t-2xl": ""}
                  `}

        style={{
                  "width": `${width}%`
                  } as React.CSSProperties}
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
    </div>
  )
}

export default ImageModule