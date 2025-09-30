import type { FunctionComponent } from 'preact/compat'

const PreactLoading: FunctionComponent = () => {
  return (
    <div className="loading-effect">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <span className="text">影像載入中</span>
    </div>
  )
}

export default PreactLoading
