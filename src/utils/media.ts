import type { ImageMetadata, UnresolvedImageTransform } from 'astro'
import type { ImageData, VideoData } from '../types'
import { getImage } from 'astro:assets'

function getImagesMetadata(): [string, ImageMetadata][] {
  const imageModules = import.meta.glob<{ default: ImageMetadata }>(
    '/src/assets/media/*.{jpeg,jpg,png,gif}',
    { eager: true },
  )

  return Object.keys(imageModules).map((path) => [path, imageModules[path].default])
}

export async function getImages(
  options: Omit<UnresolvedImageTransform, 'src'>,
): Promise<ImageData[]> {
  return Promise.all(
    getImagesMetadata().map(async ([key, src]) => [key, await getImage({ ...options, src })]),
  )
}

export function getVideos(): VideoData[] {
  const videoModules = import.meta.glob('/src/assets/media/*.{mp4,webm}', {
    eager: true,
  }) as Record<string, { default: string }>

  return Object.keys(videoModules).map((path) => [path, videoModules[path].default])
}
