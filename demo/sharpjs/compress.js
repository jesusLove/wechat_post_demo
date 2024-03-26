const sharp = require('sharp');

// 原始图片路径
const inputPath = './images/image.png';
// 压缩后图片的输出路径
const outputPath = './output/image_compressed.jpg';

// 设置压缩选项，这里我们使用mozjpeg的优化功能
const options = {
  compression: 75 // 设置JPEG的压缩质量，范围从0到100
};

// 使用sharp处理图片
sharp(inputPath)
  .resize(null, null, { // 调整图片大小，这里不改变原始尺寸
    withoutEnlargement: true
  })
  .toFormat('jpeg', options) // 转换为JPEG格式，并应用压缩选项
  .toFile(outputPath, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`图片压缩成功，保存为: ${outputPath}`);
    }
  });