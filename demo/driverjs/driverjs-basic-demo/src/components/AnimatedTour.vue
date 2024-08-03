<template>
  <div class="animated-tour">
    <span class="line">第一</span>
    <span class="line">第二</span>
    <span class="line">第三</span>
    <span class="line">第四</span>
    <span class="line">第五</span>
    <span class="line">第六</span>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { driver as Driver } from 'driver.js'
import 'driver.js/dist/driver.css'
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
onMounted(() => {
  driver.drive()
})
</script>

<style scoped>
.animated-tour {
  width: 200px;
  display: flex;
  flex-direction: column;
}
.line {
  margin-bottom: 20px;
  background-color: orange;
}
</style>
