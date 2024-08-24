<template>
  <div id="guide" data-title="Welcome!" data-intro="Hello World!">hello!</div>
</template>
<script setup>
import introJs from 'intro.js' // 引入intro.js
import 'intro.js/introjs.css' // intro.js的基础样式文件
import { nextTick, onMounted, ref } from 'vue'

onMounted(() => {
  guide()
})
// 初始化-基础配置项
const introConfig = () => {
  const intro = introJs()
  intro.setOptions({
    nextLabel: '下一步', // 下一个的按钮文字
    prevLabel: '上一步', // 上一个按钮文字
    skipLabel: '', // 跳过指引的按钮文字
    doneLabel: '完成', // 完成按钮的文字
    hidePrev: false, // 是否在第一步中隐藏“上一步”按钮;不隐藏，将呈现为一个禁用的按钮
    hideNext: false, // 是否在最后一步中隐藏“下一步”按钮（同时会隐藏完成按钮);不隐藏，将呈现为一个禁用的按钮
    exitOnEsc: false, // 点击键盘的ESC按钮是否退出指引
    exitOnOverlayClick: false, // 点击遮罩层时是否退出介绍
    showStepNumbers: false, // 是否显示步骤编号
    disableInteraction: true, // 是否禁用高亮显示框内元素的交互
    showBullets: true, // 是否显示面板的指示点
    overlayOpacity: 0.7, // 遮罩层的透明度 0-1之间
    helperElementPadding: 10, // 选中的指引元素周围的填充距离
  })
  return intro
}
// 配置引导步骤
const guide = () => {
  const intro = introConfig()
  intro.setOptions({
    steps: [
      {
        element: document.querySelector('#guide'),
        title: 'Welcome',
        intro: 'Hello World! 👋',
      },
    ],
  })
  nextTick(() => {
    intro.start()
  })
}
</script>
