<template>
  <div>
    <highlightjs language="js" :code="code" />
  </div>
</template>

<script setup>
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import hljsVuePlugin from '@highlightjs/vue-plugin'
const highlightjs = hljsVuePlugin.component

hljs.registerLanguage('javascript', javascript)
const code = `
import { onMounted } from 'vue'
import { driver as Driver } from 'driver.js'
import 'driver.js/dist/driver.css'

onMounted(() => {
  const driver = Driver({
    showProgress: true,
    steps: [
      {
        element: '.animated-tour',
        popover: {
          title: '新手导航',
          description: '这是新手导航',
          side: 'left',
          align: 'start',
        },
      },
      {
        element: '.line:nth-child(1)',
        popover: {
          title: '新手导航',
          description: '第一步',
          side: 'bottom',
          align: 'start',
        },
      },
      {
        element: '.line:nth-child(2)',
        popover: {
          title: '新手导航',
          description: '第二步',
          side: 'right',
          align: 'end',
        },
      },
      {
        element: '.line:nth-child(3)',
        popover: {
          title: '新手导航',
          description: '第三步',
          side: 'right',
          align: 'end',
        },
      },
      {
        element: '.line:nth-child(4)',
        popover: {
          title: '新手导航',
          description: '第四步',
          side: 'right',
          align: 'end',
        },
      },
      {
        element: '.line:nth-child(5)',
        popover: {
          title: '新手导航',
          description: '第五步',
          side: 'right',
          align: 'end',
        },
      },
      {
        element: '.line:nth-child(6)',
        popover: {
          title: '新手导航',
          description: '第六步',
          side: 'right',
          align: 'start',
        },
      },
    ],
  })
  driver.drive()
})
`
</script>
