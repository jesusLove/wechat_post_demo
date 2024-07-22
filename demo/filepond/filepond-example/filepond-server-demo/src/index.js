const express = require('express')
const multer = require('multer')
const path = require('path')
const app = express()
const port = 3000

// 设置存储位置
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/') // 保存目录
  },
  filename: (req, file, cb) => {
    console.log('---', file)
    cb(null, file.fieldname  + '-' + Date.now() + path.extname(file.originalname))
  },
})

// 创建 multer 实例
const upload = multer({ storage: storage })

// 配置静态文件目录
app.use(express.static('public'))

// 文件上传路由
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.')
  }
  res.send('File uploaded successfully!')
})

// 启动服务器
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
