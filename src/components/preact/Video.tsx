import type { FunctionComponent } from 'preact/compat'
import type { ExtendedVideoBaseData } from '../../types'
import videoPoster from '../../assets/media/video-poster.jpg'

type Props = {
  data: ExtendedVideoBaseData
}

const PreactVideo: FunctionComponent<Props> = (props) => {
  const { data } = props
  const mp4 = data.video['mp4']
  const webm = data.video['webm']

  return (
    <video
      className={`w-full loading preact-video`}
      style={`background-color: ${data.color}`}
      autoplay
      muted
      loop
      width={data.width}
      height={data.height}
      poster={videoPoster.src}
      preload="none"
    >
      <source type="video/webm" src={webm} />
      <source type="video/mp4" src={mp4} />

    </video>
  )
}

export default PreactVideo
