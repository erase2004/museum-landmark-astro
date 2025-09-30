import type { ExtendedData, ExtendedVideoBaseData } from '../types'

export function mediaLoadedHandle(this: HTMLElement) {
  this.parentNode?.querySelector('.loading-effect')?.remove()
}

export function isVideo(data: ExtendedData): data is ExtendedVideoBaseData {
  return 'isVideo' in data && data.isVideo === true
}

export function getWrappingStyles(index: number) {
  return index === 0
    ? ' border-yellow-500 GTM-first-item'
    : index === 1
      ? 'border-neutral-500 GTM-second-item'
      : 'border-lime-800 GTM-third-item'
}
