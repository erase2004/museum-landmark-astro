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
      <span className="text-shadow-gray-800 text-shadow-md">影像載入中</span>
    </div>
  )
}

export default PreactLoading
