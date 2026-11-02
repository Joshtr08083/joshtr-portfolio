import { BadgesProps, Badge } from "./types.d"
import positionStyles from "./PositionStyles"
import Image from 'next/image'
import styles from "./PageModules.module.css"

const BadgesModule = ({badges=undefined, positioning={marginInline: 0, justifySelf: "start"}} : BadgesProps) => {

    return (
        <div
            style={{
                ...positionStyles({...positioning, marginTop: 10})
            }}
        >
            <div
                className={`${styles.badges}`}
            >
                {
                    badges?.map((badge: Badge, index) => (
                        <a
                            href={badge.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                        >
                            <Image 
                                src={badge.icon}
                                title={badge.title} 
                                alt={badge.title}
                                style={{objectPosition: `50% 50%`}}
                                className={`object-cover  ${badge.invertOn === "dark"? styles.badgeImgOnDark : ""} ${badge.invertOn === "light"? styles.badgeImgOnLight : ""}`} 
                                width={badge.size ?? 25}
                                height={badge.size ?? 25}
                                sizes={`10vw`}


                            />
                        </a>

                    ))
                }
            </div>
        </div>
  )
}

export default BadgesModule