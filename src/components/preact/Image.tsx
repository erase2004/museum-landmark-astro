import { useState, Fragment, type FunctionComponent } from 'preact/compat'
import type { ExtendedImageBaseData } from '../../types'
import PreactLoading from './Loading'
import type { ImgHTMLAttributes } from 'preact'

type Props = {
  data: ExtendedImageBaseData
}

const PreactImage: FunctionComponent<Props> = (props) => {
  const { data } = props
  const { webp, jpeg, gif } = data.image

  let imgSrc: ImgHTMLAttributes['src']
  let imgSrcSet: ImgHTMLAttributes['srcSet']
  if (data.ext === 'gif') {
    imgSrc = gif?.src
    imgSrcSet = gif?.srcSet.attribute
  } else {
    imgSrc = jpeg?.src
    imgSrcSet = jpeg?.srcSet.attribute
  }

  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Fragment>
      <picture>
        <source srcset={webp.srcSet.attribute} type="image/webp" />
        <img
          src={imgSrc}
          srcSet={imgSrcSet}
          alt={data.companyName}
          className="preact-image"
          style={`aspect-ratio: ${data.width} / ${data.height}; background-color: ${data.color};`}
          loading={'lazy'}
          fetchPriority={'auto'}
          decoding={'async'}
          onLoad={() => setIsLoaded(true)}
        />
      </picture>
      {!isLoaded && <PreactLoading />}
    </Fragment>
  )
}

export default PreactImage
