import sharp from 'sharp'
import path from 'path'

export default async function sharpResize(
  filename: string,
  height: number,
  width: number
): Promise<void> {
  try {
    await sharp(
      `${path.resolve(__dirname, `../../assets/images/`)}/full/${filename}.jpg`
    )
      .resize(width, height)
      .toFile(
        `${path.resolve(
          __dirname,
          `../../assets/images/`
        )}/thumb/${filename}-${width}x${height}.jpg`
      )
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`)
  }
}
