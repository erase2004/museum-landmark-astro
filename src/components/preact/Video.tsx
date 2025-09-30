import { Fragment, useState, type FunctionComponent } from 'preact/compat'
import type { ExtendedVideoBaseData } from '../../types'
import PreactLoading from './Loading'
import videoPoster from '../../assets/media/video-poster.jpg'

type Props = {
  data: ExtendedVideoBaseData
}

const PreactVideo: FunctionComponent<Props> = (props) => {
  const { data } = props
  const mp4 = data.video['mp4']
  const webm = data.video['webm']
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Fragment>
      <video
        className="preact-video"
        style={`background-color: ${data.color}`}
        autoplay
        muted
        loop
        width={data.width}
        height={data.height}
        poster={videoPoster.src}
        preload="none"
        onCanPlayThrough={() => setIsLoaded(true)}
      >
        <source type="video/webm" src={webm} />
        <source type="video/mp4" src={mp4} />
      </video>
      {!isLoaded && <PreactLoading />}
    </Fragment>
  )
}

export default PreactVideo
