import { YouTubeEmbed } from '@next/third-parties/google'
import positionStyles from './PositionStyles'
import { YoutubeProps } from './types.d'

const YoutubeModule = ({videoId, width=100, height=undefined, positioning=undefined} : YoutubeProps) => {
  return (

    <div 
        style={{
            ...positionStyles({...positioning}),
            width: `${width}%`,
            height: (height !== undefined)? `${height}vh` : undefined
        }}
    >
        <YouTubeEmbed
            videoid={videoId}
            style={`width: 100%; height: 100%; margin: auto`}
        />
    </div>

  )
}

export default YoutubeModule