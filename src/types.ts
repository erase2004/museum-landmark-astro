import type { GetImageResult } from 'astro'

type DefaultSite = {
  title: string
  url: string
  disabled: false
}

type DisabledSite = {
  title: string
  url: null
  disabled: true
}

export type Site = DefaultSite | DisabledSite

export type SiteList = Record<number, Site[]>

export type ImageData = [string, GetImageResult]

export type VideoData = [string, string]

type BaseData = {
  name: string
  ext: 'jpg' | 'jpeg' | 'png' | 'gif' | 'mp4'
  companyName: string
  width: number
  height: number
  color: `#${string}`
  url: string
}

export type ImageBaseData = BaseData

export type VideoBaseData = BaseData & {
  isVideo: true
}

export type Data = ImageBaseData | VideoBaseData

export type ExtendedImageBaseData = ImageBaseData & {
  image: ImageData[1]
}

export type ExtendedVideoBaseData = VideoBaseData & {
  video: {
    mp4: VideoData[1]
    webm: VideoData[1]
  }
}

export type ExtendedData = ExtendedImageBaseData | ExtendedVideoBaseData
