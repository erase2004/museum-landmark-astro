import type { FunctionComponent } from 'preact/compat'
import type { ExtendedImageBaseData } from '../../types'

type Props = {
  data: ExtendedImageBaseData
}

const PreactImage: FunctionComponent<Props> = (props) => {
  const { data } = props

  return (
    <img
      src={data.image.src}
      srcSet={data.image.srcSet.attribute}
      alt={data.companyName}
      className="h-auto w-full preact-image"
      style={`aspect-ratio: ${data.width} / ${data.height}; background-color: ${data.color};`}
      loading={'lazy'}
      fetchPriority={'auto'}
      decoding={'async'}
    />
  )
}

export default PreactImage