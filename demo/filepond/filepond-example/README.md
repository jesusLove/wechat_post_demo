# 后端服务

`filepond-server-demo`: 提供 `/upload` 接口用于存储文件。核心代码：

```js
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

```

# 前端服务

Filepond 配置服务器地址。
```js
// main.js

// ... 省略

// 定义上传服务
const server = {
  url: '/api/upload', // 你的Express服务器地址
  process: {
    // 设置上传的HTTP方法
    method: 'POST',
    // 配置上传文件的字段名称
    fieldName: 'file',
    // 上传文件的额外数据，可选
    // headers: {
    //   'my-header': 'my-value'
    // },
    // 其他配置...
  },
  // 接收服务器响应的配置
  revert: (response) => {
    // 根据服务器响应更新客户端状态
    const status = response.status
    if (status !== 200) {
      return Promise.reject('server error')
    }
    return response.json() // 返回服务器响应的JSON数据
  },
}

const pond = FilePond.create(inputRef, {
  // ... 省略
  server,
})

```

由于接口服务端口为 `3000`，而前端 Vite 启动的端口 `5173`，导致跨域所以需要在 `vite.config.js` 配置代码规则。

```js
// vite.config.js
import { defineConfig } from 'vite'
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
```
