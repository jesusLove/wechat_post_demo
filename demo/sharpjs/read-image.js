const sharp = require('sharp')

async function readMetadata(imagePath) {
  try {
    const metadata = await sharp(imagePath).metadata()
    console.log(metadata)
  } catch (err) {
    console.log(`错误：${err}`)
  }
}

readMetadata('./images/image.png')
// readMetadata('./output/image_compressed.jpg')