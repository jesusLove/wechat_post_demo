<template>
  <div class="v-table">
    <div class="table-wrapper" ref="tableRef"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as VTable from '@visactor/vtable'

const tableRef = ref(null)
const option = {
  columns: [
    {
      field: '订单 ID',
      title: '订单 ID',
      sort: true,
      width: 'auto',
    },
    {
      field: '邮寄方式',
      title: '邮寄方式',
    },
    {
      field: '类别',
      title: '类别',
    },
    {
      field: '子类别',
      title: '子类别',
    },
    {
      field: '销售额',
      title: '销售额',
    },
  ],
  records: [],
  autoFillWidth: true
}
onMounted(() => {
  const tableInstance = new VTable.ListTable(tableRef.value, option)
})
</script>
<style scoped>

</style>
