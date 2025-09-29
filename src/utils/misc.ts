import type { ExtendedData, ExtendedVideoBaseData } from "../types"

export function mediaLoadedHandle(this: HTMLElement) {
  this.parentNode?.querySelector('.loading-effect')?.remove()
}

export function isVideo(data: ExtendedData): data is ExtendedVideoBaseData {
  return 'isVideo' in data && data.isVideo === true
}