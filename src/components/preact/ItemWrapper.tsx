import type { FunctionComponent } from 'preact/compat'
import type { ExtendedData } from '../../types'
import PreactVideo from './Video'
import PreactImage from './Image'
import { isVideo } from '../../utils/misc'

type Props = {
  index: number
  data: ExtendedData
}

const PreactItemWrapper: FunctionComponent<Props> = (props) => {
  const { index, data } = props

  const customClasses =
    index === 0
      ? ' border-yellow-500 GTM-first-item'
      : index === 1
        ? 'border-neutral-500 GTM-second-item'
        : 'border-lime-800 GTM-third-item'

  return (
    <a
      className={`media-item loading relative block rounded-md border-8 border-solid ${customClasses}`}
      href={data.url}
      target="_blank"
      rel="noopener"
      title={data.companyName}
    >
      <span class="absolute top-0 right-0 bg-black/50 p-1 text-xl text-white lg:text-2xl">
        {data.companyName}
      </span>
      {isVideo(data) ? <PreactVideo data={data} /> : <PreactImage data={data} />}
    </a>
  )
}

export default PreactItemWrapper
