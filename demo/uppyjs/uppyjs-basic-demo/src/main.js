import './style.css'
import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import zh_CN from '@uppy/locales/lib/zh_CN'

import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

const uppy = new Uppy({
  debug: true,
  autoProceed: false, // 自动上传
  locale: zh_CN, // 国际化
  restrictions: {
    maxFileSize: 1000,
    maxNumberOfFiles: 10,
    allowedFileTypes: ['image/*'],
  },
})

uppy.use(Dashboard, {
  inline: true, // 内联页面
  target: '#app', // 挂载的目标元素
  theme: 'dark', // 主题 dark
  note: '最多上传 10 个文件，仅支持图片' // 上传文件的说明
})

// 监听 complete 事件，该事件在所有文件上传后触发。
uppy.on('complete', (result) => {
  if (result.failed.length === 0) {
    console.log('上传成功 😀')
  } else {
    console.warn('上传失败 😞')
  }
  console.log('成功文件:', result.successful)
  console.log('失败文件:', result.failed)
})
