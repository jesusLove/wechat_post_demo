const Jimp = require('jimp')
function jimpImage() {
  Jimp.read('./images/image.jpg').then(image => {
    image.resize(200, 200)
      .quality(80)
      .write('./dist/image_output.jpg')
  }).catch(err => {
    console.log(err)
  })
}

// 添加水印
async function addWatermark(text, imageSrc, destPath) {
  const image = await Jimp.read(imageSrc);
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
  image.print(font, 10, 10, text)
       .write(destPath);
}

addWatermark('@Lee', './images/image.jpg', './dist/image_watermark.jpg')