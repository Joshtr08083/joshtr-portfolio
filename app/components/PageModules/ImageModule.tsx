import Image from "next/image"

export interface ImageProps {
    type: string; 
    url: string; // (required) url reference to the image
    alt: string; // (required) alt text description
    title: string; // (required) title text of the image
    height: number; // (required) height of the image
    width?: number; // (opt) width of the image, defaults to 100%
    loading?: "lazy" | "eager"; // (opt) lazy load vs eager load,
    border?: boolean;
    rounded?: boolean;

}

const ImageModule = ({ url, alt, title, height, width = 100, loading="lazy", border=true, rounded = true}: ImageProps) => {
  
  return (
      <div 
        className={`
                    relative overflow-hidden ${border? "border":""} m-auto ${rounded? "rounded-2xl": ""}
                  `}

        style={{
          width: `${width}%`,
          height: `${height}vh`
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