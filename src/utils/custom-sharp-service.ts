import type { FitEnum, FormatEnum } from 'sharp'
import type {
  ImageOutputFormat,
  ImageQualityPreset,
  LocalImageService,
  ImageTransform,
  AstroConfig,
} from 'astro'
import sharp from 'sharp'
import { baseService } from 'astro/assets'
import type { SharpImageServiceConfig } from 'astro/assets/services/sharp'
import { isESMImportedImage } from 'astro/assets/utils'

/**
 * copy-pasted from Astro's source code,
 * @see https://github.com/withastro/astro/blob/1c090b00c1f5c3d8e938ac873fc63ab2f1ae37f1/packages/astro/src/assets/services/sharp.ts
 */
type ImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | (string & {})

type BaseServiceTransform = {
  src: string
  width?: number
  height?: number
  format: string
  quality?: string | null
  fit?: ImageFit
  position?: string
}

const parseQuality = (quality: string): string | number => {
  const result = Number.parseInt(quality, 10)
  if (Number.isNaN(result)) {
    return quality
  }
  return result
}

const qualityTable: Record<ImageQualityPreset, number> = {
  low: 25,
  mid: 50,
  high: 80,
  max: 100,
}

const fitMap: Record<ImageFit, keyof FitEnum> = {
  fill: 'fill',
  contain: 'inside',
  cover: 'cover',
  none: 'outside',
  'scale-down': 'inside',
  outside: 'outside',
  inside: 'inside',
}

type UnresolvedSrcSetValue = {
  transform: ImageTransform
  descriptor?: string
  attributes?: Record<string, any>
}

/**
 * Returns the final dimensions of an image based on the user's options.
 *
 * For local images:
 * - If the user specified both width and height, we'll use those.
 * - If the user specified only one of them, we'll use the original image's aspect ratio to calculate the other.
 * - If the user didn't specify either, we'll use the original image's dimensions.
 *
 * For remote images:
 * - Widths and heights are always required, so we'll use the user's specified width and height.
 */
function getTargetDimensions(options: ImageTransform) {
  let targetWidth = options.width
  let targetHeight = options.height
  if (isESMImportedImage(options.src)) {
    const aspectRatio = options.src.width / options.src.height
    if (targetHeight && !targetWidth) {
      // If we have a height but no width, use height to calculate the width
      targetWidth = Math.round(targetHeight * aspectRatio)
    } else if (targetWidth && !targetHeight) {
      // If we have a width but no height, use width to calculate the height
      targetHeight = Math.round(targetWidth / aspectRatio)
    } else if (!targetWidth && !targetHeight) {
      // If we have neither width or height, use the original image's dimensions
      targetWidth = options.src.width
      targetHeight = options.src.height
    }
  }

  // TypeScript doesn't know this, but because of previous hooks we always know that targetWidth and targetHeight are defined
  return {
    targetWidth: targetWidth!,
    targetHeight: targetHeight!,
  }
}

const DEFAULT_OUTPUT_FORMAT = 'webp' as const

const sortNumeric = (a: number, b: number) => a - b

const customSharpService: LocalImageService<SharpImageServiceConfig> = {
  validateOptions: baseService.validateOptions,
  getURL: baseService.getURL,
  parseURL: baseService.parseURL,
  getHTMLAttributes: baseService.getHTMLAttributes,
  async getSrcSet(
    options: ImageTransform,
    _imageConfig: AstroConfig['image'],
  ): Promise<UnresolvedSrcSetValue[]> {
    const { targetWidth, targetHeight } = getTargetDimensions(options)
    const aspectRatio = targetWidth / targetHeight
    const { widths, densities } = options
    const targetFormat = options.format ?? DEFAULT_OUTPUT_FORMAT

    let transformedWidths = (widths ?? []).sort(sortNumeric)

    // Dedupe the widths
    transformedWidths = Array.from(new Set(transformedWidths))

    // Since `widths` and `densities` ultimately control the width and height of the image,
    // we don't want the dimensions the user specified, we'll create those ourselves.
    const {
      width: transformWidth,
      height: transformHeight,
      ...transformWithoutDimensions
    } = options

    // Collect widths to generate from specified densities or widths
    let allWidths: Array<{
      width: number
      descriptor: `${number}x` | `${number}w`
    }> = []
    if (densities) {
      // Densities can either be specified as numbers, or descriptors (ex: '1x'), we'll convert them all to numbers
      const densityValues = densities.map((density) => {
        if (typeof density === 'number') {
          return density
        } else {
          return parseFloat(density)
        }
      })

      // Calculate the widths for each density, rounding to avoid floats.
      const densityWidths = densityValues
        .sort(sortNumeric)
        .map((density) => Math.round(targetWidth * density))

      allWidths = densityWidths.map((width, index) => ({
        width,
        descriptor: `${densityValues[index]}x`,
      }))
    } else if (transformedWidths.length > 0) {
      allWidths = transformedWidths.map((width) => ({
        width,
        descriptor: `${width}w`,
      }))
    }

    return allWidths.map(({ width, descriptor }) => {
      const height = Math.round(width / aspectRatio)
      const transform = { ...transformWithoutDimensions, width, height }
      return {
        transform,
        descriptor,
        attributes: {
          type: `image/${targetFormat}`,
        },
      }
    })
  },
  async transform(
    inputBuffer: Uint8Array,
    transformOptions: {
      src: string
      [key: string]: any
    },
    config: AstroConfig['image'],
  ): Promise<{
    data: Uint8Array
    format: ImageOutputFormat
  }> {
    const transform: BaseServiceTransform = transformOptions as BaseServiceTransform

    // Return SVGs as-is
    // TODO: Sharp has some support for SVGs, we could probably support this once Sharp is the default and only service.
    if (transform.format === 'svg') return { data: inputBuffer, format: 'svg' }

    const result = sharp(inputBuffer, {
      failOnError: false,
      pages: -1,
      limitInputPixels: config.service.config.limitInputPixels,
    })

    // always call rotate to adjust for EXIF data orientation
    result.rotate()

    // If `fit` isn't set then use old behavior:
    // - Do not use both width and height for resizing, and prioritize width over height
    // - Allow enlarging images

    const withoutEnlargement = Boolean(transform.fit)
    if (transform.width && transform.height && transform.fit) {
      const fit: keyof FitEnum = fitMap[transform.fit] ?? 'inside'
      result.resize({
        width: Math.round(transform.width),
        height: Math.round(transform.height),
        fit,
        position: transform.position,
        withoutEnlargement,
      })
    } else if (transform.height && !transform.width) {
      result.resize({
        height: Math.round(transform.height),
        withoutEnlargement,
      })
    } else if (transform.width) {
      result.resize({
        width: Math.round(transform.width),
        withoutEnlargement,
      })
    }

    if (transform.format) {
      let quality: number | string | undefined = undefined
      if (transform.quality) {
        const parsedQuality = parseQuality(transform.quality)
        if (typeof parsedQuality === 'number') {
          quality = parsedQuality
        } else {
          quality = transform.quality in qualityTable ? qualityTable[transform.quality] : undefined
        }
      }

      const isGifInput =
        inputBuffer[0] === 0x47 && // 'G'
        inputBuffer[1] === 0x49 && // 'I'
        inputBuffer[2] === 0x46 && // 'F'
        inputBuffer[3] === 0x38 && // '8'
        (inputBuffer[4] === 0x39 || inputBuffer[4] === 0x37) && // '9' or '7'
        inputBuffer[5] === 0x61 // 'a'

      if (transform.format === 'webp' && isGifInput) {
        // Convert animated GIF to animated WebP with loop=0 (infinite)
        result.webp({ quality: typeof quality === 'number' ? quality : undefined, loop: 0 })
      } else if (['jpg', 'jpeg'].includes(transform.format) && !isGifInput) {
        result.jpeg({
          quality: typeof quality === 'number' ? quality : undefined,
          mozjpeg: true,
        })
      } else {
        result.toFormat(transform.format as keyof FormatEnum, { quality })
      }
    }

    const { data, info } = await result.toBuffer({ resolveWithObject: true })

    // Sharp can sometimes return a SharedArrayBuffer when using WebAssembly.
    // SharedArrayBuffers need to be copied into an ArrayBuffer in order to be manipulated.
    const needsCopy = 'buffer' in data && data.buffer instanceof SharedArrayBuffer

    return {
      data: needsCopy ? new Uint8Array(data) : data,
      format: info.format as ImageOutputFormat,
    }
  },
}

export default customSharpService
