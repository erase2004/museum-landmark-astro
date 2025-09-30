import type { FunctionComponent } from 'preact/compat'
import type { ExtendedData } from '../../types'
import PreactVideo from './Video'
import PreactImage from './Image'
import { getWrappingStyles, isVideo } from '../../utils/misc'

type Props = {
  index: number
  data: ExtendedData
}

const PreactItemWrapper: FunctionComponent<Props> = (props) => {
  const { index, data } = props

  const wrappingStyles = getWrappingStyles(index)

  return (
    <a
      className={`media-item ${wrappingStyles}`}
      href={data.url}
      target="_blank"
      rel="noopener"
      title={data.companyName}
    >
      <span class="item-title">{data.companyName}</span>
      {isVideo(data) ? <PreactVideo data={data} /> : <PreactImage data={data} />}
    </a>
  )
}

export default PreactItemWrapper
