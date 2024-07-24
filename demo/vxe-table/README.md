嗨，大家好，欢迎来到猿镇，我是镇长，lee。

今天，和大家分享一款神奇的 `JavaScript` 开源高级表格组件 —— `vxe-table`。它不仅支持基础的表格操作如增删改查，还提供高级特性，如虚拟树、列拖拽、数据校验等。它的易用性、丰富的API和自定义能力，使其成为处理复杂数据展示和交互的理想选择。


[Github Star: 7.4k](https://github.com/x-extends/vxe-table)

### 1、vxe-table 是什么？
`vxe-table` 是一款基于 Vue 的高级表格组件，它提供了丰富的功能，包括**增删改查、虚拟滚动、懒加载、快捷菜单、数据校验、树形结构、打印导出、表单渲染、数据分页、虚拟列表、模态窗口、自定义模板、渲染器**等。`vxe-table` 旨在满足复杂表格的需求，适用于企业级应用开发，特别适合处理大量数据的情况。

### 2、功能特性

- **虚拟滚动**：提高大数据量表格渲染性能，只渲染可见区域内的数据，当用户滚动时，不在可视区域的数据不被渲染，减少 DOM 操作和渲染时间。
- **树形结构**：支持表格数据的树形展示，方便处理层级关系复杂的数据。
- **数据校验**：内置数据校验功能，可以自定义校验规则。
- **打印导出**：支持数据的打印和导出功能，可以将表格内容导出为 Excel、CSV 等格式。
- **自定义模板**：提供灵活的模板系统，允许开发者完全自定义表格的外观和行为。
- **键盘导航**：支持全键盘操作，提升用户体验。
- **模态窗口**：内置模态对话框功能，简化表单操作流程。

### 3、快速开始

**版本介绍**：`v3.0 `基于 `Vue2.6+` ，支持现代浏览器并保留兼容 IE11。`v4.0` 基于 `Vue3.2+`，只支持现代浏览器，不支持 IE。 注意`v4.7` 对组件进行重构拆分，分为 `vxe-table` 和 `vxe-ui `将支持可视化组件。本文示例，采用 `v4.0` 基于 `Vue3.2+` 的版本演示，由于 `v4.7` 进行破坏性更新直接选择最新版的，其他版本的使用方法，请自行[参考文档](https://vxetable.cn/v3.8/#/table/start/install)。

#### 安装
`vxe-table` 提供多种安装方式 `npm` 或 `CDN`。使用 `npm` 安装最新版的。
```bash
npm i vxe-table@next 
# 或者
yarn add vxe-table@next   
```
`CDN`  引入请选择可信的第三方服务， 如 `unpkg` 或 `cdnjs` 获取到最新版本的资源，并在页面上引入即可。

#### 入门示例

Vite 创建 Vue3 的项目，然后引入 vxe-table 实现表格功能。

```bash
# 创建项目，选择 Vue + JavaScript
npm create vite vxe-table-basic-demo

# 安装 vxe-table
npm install vxe-table@next
```
vxe-table 支持按需引入，需要借助插件 `vite-plugin-lazy-import` 实现按需加载模块。注意：按需加载无法自动加载语言包和主题，需要手动导入。作为演示项目不考虑大小问题，直接全量导入。

```js
// 纯表格
import VxeTable from 'vxe-table'
import 'vxe-table/lib/style.css'
// 可选 UI
import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css' 
createApp(App)
.use(VxeUI)
.use(VxeTable)
.mount('#app')
```

现在，可以在Vue 模板中使用 `<vxe-table>` 组件了，下面实现一个简单的表格

```html
// basicTable.vue
<template>
  <div>
    <vxe-table 
    stripe
    :row-config="{isCurrent: true, isHover: true}"
    :data="tableData">
      <vxe-column type="seq" width="70" title=" "></vxe-column>
      <vxe-column field="Mon" title="周一"></vxe-column>
      <vxe-column field="Tue" title="周二"></vxe-column>
      <vxe-column field="Wed" title="周三"></vxe-column>
      <vxe-column field="Thu" title="周四"></vxe-column>
      <vxe-column field="Fri" title="周五"></vxe-column>
    </vxe-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  {
    Mon: '语文',
    Tue: '数学',
    Wed: '英语',
    Thu: '语文',
    Fri: '英语',
  },
  {
    Mon: '语文',
    Tue: '数学',
    Wed: '英语',
    Thu: '语文',
    Fri: '英语',
  },
])
</script>
```
示例代码请公众号回复 "demo" 获取

**国际化配置** 

vxe-table 通过简单的配置可实现国际化配置。

```js
import zhCN from 'vxe-table/lib/locale/lang/zh-CN'
// 添加语言
VxeTable.setI18n('zh-CN', zhCN)

// 切换语言
VxeTable.setLanguage('zh-CN')
```
### 4、总结

本文我们探讨了 vxe-table 的核心特性、应用场景，通过入门示例了解他的使用方法。vxe-table 以其强大的功能和灵活性，提供了一个高效、可定制的 Vue 表格解决方案。处理大数据量的虚拟滚动，还是实现复杂的数据交互，vxe-table 都能满足需求。它丰富的 API 和组件选项，使得从基础到高级功能的实现都变得简单。

祝好！

更多内容请关注：猿镇，一个分享有趣前端知识的公众号。文中示例代码请回复“demo”获取。

# 往期回顾

- [Frappe Gantt，一款神奇的 JavaScript 开源甘特图库？](https://mp.weixin.qq.com/s/aRlWUu3XLuzRPQf0ZWg3_g)
- [Filepond.js，一款神奇的 JavaScript 开源文件上传库?](https://mp.weixin.qq.com/s/gCVa1QLUqfiIhCuJ2mR4kw)
- [Lexical，一款神奇的 JavaScript 开源富文本编辑器。](https://mp.weixin.qq.com/s/ymJewx_9kn38N-eshYGUgQ)
- [Two.js，一款神奇的 JavaScript 二维动画库？](https://mp.weixin.qq.com/s/JIkp0A2XDexkRPiYFwjmKQ)
- [Vivus.js，一款轻量级 JavaScript 动画库？前端大神的隐藏技巧，让你的SVG动画效果提升300%！](https://mp.weixin.qq.com/s/PxZDU3AAT5N1ao4HeWZOXw)
