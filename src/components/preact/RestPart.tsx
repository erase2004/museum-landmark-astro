import { Fragment, useEffect, useState, type FunctionComponent } from 'preact/compat'
import type { ExtendedData } from '../../types'
import PreactPeriod from './Period'

type Props = {
  data: [string, ExtendedData[]][]
}

const PreactRestPart: FunctionComponent<Props> = (props) => {
  const { data } = props

  const totalAmount = data.length
  const step = 2
  const [displayAmount, setDisplayAmount] = useState(0)
  const displayList = data.slice(0, displayAmount)

  useEffect(() => {
    let target = document.querySelector('#list-end')!

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (displayAmount >= totalAmount) {
            observer.unobserve(target)
            return
          }

          setDisplayAmount(displayAmount + step)
        }
      },
      {
        rootMargin: '0px 0px 1800px 0px',
      },
    )

    observer.observe(target)

    return () => {
      observer.unobserve(target)
    }
  }, [displayAmount])

  return (
    <Fragment>
      {displayList.map(([period, list]) => (
        <PreactPeriod key={period} period={period} list={list} />
      ))}
      <div id="list-end" className="h-10 w-full"></div>
    </Fragment>
  )
}

export default PreactRestPart
