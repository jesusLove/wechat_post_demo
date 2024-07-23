import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 纯表格
import VxeTable from 'vxe-table'
import 'vxe-table/lib/style.css'

// 可选 UI
import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css' 

import zhCN from 'vxe-table/lib/locale/lang/zh-CN'
VxeTable.setI18n('zh-CN', zhCN)

VxeTable.setLanguage('zh-CN')

const app = createApp(App)
app
.use(VxeUI)
.use(VxeTable)
.mount('#app')
