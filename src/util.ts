export function mediaLoadedHandle(this: HTMLElement) {
  this.parentNode?.querySelector('.loading-effect')?.remove()
}