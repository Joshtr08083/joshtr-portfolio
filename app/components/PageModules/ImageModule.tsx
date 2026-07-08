import Image from "next/image"

export interface ImageProps {
    type: string; 
    url: string; // (required) url reference to the image
    alt: string; // (required) alt text description
    title: string; // (required) title text of the image
    height: number; // (required) height of the image
    width?: number; // (opt) width of the image, defaults to 100%
    roundedTop?: boolean; // (opt) bevels the top part of the image
    roundedBottom?: boolean; // (opt) bevels the bottom part of the image
    marginTop?: number; // (opt) distance above the image
    paddingTop?: number; // (opt) background extends above image
    paddingBottom?: number; // (opt) background extends below image
    showBack?: boolean; // (opt) show background
    backgroundColor?: string; // (opt) color of background
    roundedBackgroundBottom?: boolean; // (opt) bevel the bottom of the background, not the image
    loading?: "lazy" | "eager"; // (opt) lazy load vs eager load

}

const ImageModule = ({ url, alt, title, height, width = 100, marginTop = 0, roundedTop = false, roundedBottom = false, showBack, backgroundColor="var(--panel-color)", loading="lazy", paddingTop=0, paddingBottom=0, roundedBackgroundBottom = false}: ImageProps) => {
  
  return (
    <div className={`
          w-full flex m-auto 
          ${(roundedBackgroundBottom)? "rounded-b-2xl" : ""}`
        }
         style={{
          marginTop: `calc(var(--spacing) * ${marginTop})`,
          height: `${height}vh`,
          backgroundColor: (showBack? backgroundColor : "transparent"),
          paddingTop: `calc(var(--spacing) * ${paddingTop})`,
          paddingBottom: `calc(var(--spacing) * ${paddingBottom})`
          }}
    >
      <div 
        className={`
                    relative overflow-hidden border h-full m-auto
                    ${roundedBottom? "rounded-b-2xl": ""} 
                    ${roundedTop? "rounded-t-2xl": ""}
                  `}

        style={{ width: `${width}%` }}
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