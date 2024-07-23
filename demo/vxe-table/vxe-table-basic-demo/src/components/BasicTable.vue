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
import mackData from './mack'
const tableData = ref(mackData)
</script>
