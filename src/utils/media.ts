import type { ImageMetadata, UnresolvedImageTransform } from 'astro'
import type { ImageData, VideoData } from '../types'
import { getImage } from 'astro:assets'

function getImagesMetadata(ext: string): [string, ImageMetadata][] {
  const imageModules =
    ext === 'gif'
      ? import.meta.glob<{ default: ImageMetadata }>('/src/assets/media/*.gif', { eager: true })
      : ext === 'webp'
        ? import.meta.glob<{ default: ImageMetadata }>('/src/assets/media/*.{jpeg,jpg,png,gif}', {
            eager: true,
          })
        : import.meta.glob<{ default: ImageMetadata }>('/src/assets/media/*.{jpeg,jpg,png}', {
            eager: true,
          })

  return Object.keys(imageModules).map((path) => [path, imageModules[path].default])
}

export async function getImages(
  options: Omit<UnresolvedImageTransform, 'src'>,
): Promise<ImageData[]> {
  return Promise.all(
    getImagesMetadata(options.format ?? 'webp').map(async ([key, src]) => [
      key,
      await getImage({ ...options, src }),
    ]),
  )
}

export function getVideos(): VideoData[] {
  const videoModules = import.meta.glob('/src/assets/media/*.{mp4,webm}', {
    eager: true,
  }) as Record<string, { default: string }>

  return Object.keys(videoModules).map((path) => [path, videoModules[path].default])
}
