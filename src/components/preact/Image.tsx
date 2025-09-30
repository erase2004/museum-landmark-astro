import { useState, Fragment, type FunctionComponent } from 'preact/compat'
import type { ExtendedImageBaseData } from '../../types'
import PreactLoading from './Loading'

type Props = {
  data: ExtendedImageBaseData
}

const PreactImage: FunctionComponent<Props> = (props) => {
  const { data } = props
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Fragment>
      <img
        src={data.image.src}
        srcSet={data.image.srcSet.attribute}
        alt={data.companyName}
        className="preact-image"
        style={`aspect-ratio: ${data.width} / ${data.height}; background-color: ${data.color};`}
        loading={'lazy'}
        fetchPriority={'auto'}
        decoding={'async'}
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && <PreactLoading />}
    </Fragment>
  )
}

export default PreactImage
