<template>
  <div data-title="Welcome!" data-intro="Hello World!">hello!</div>
</template>
<script setup>
import introJs from 'intro.js' // 引入intro.js
import 'intro.js/introjs.css' // intro.js的基础样式文件
import { nextTick, onMounted } from 'vue';

onMounted(() => {
  nextTick(() => {
    introJs().start()
  })
})
</script>
