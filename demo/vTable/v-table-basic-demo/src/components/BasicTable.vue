<template>
  <div class="v-table">
    <div class="table-wrapper" ref="tableRef"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as VTable from '@visactor/vtable'

const tableRef = ref(null)
onMounted(() => {
  const option = {
    columns: [
      {
        field: 'id',
        title: '订单 ID',
        sort: true,
        width: 'auto',
      },
      {
        field: 'type',
        title: '邮寄方式',
      },
      {
        field: 'catagory',
        title: '类别',
      },
      {
        field: 'sub_catagory',
        title: '子类别',
      },
      {
        field: 'sales',
        title: '销售额',
      },
    ],
    records: [
      {
        id: 'CN-2019-1973789',
        type: '标准级',
        catagory: '办公用品',
        sub_catagory: '信封',
        sales: '125.44',
      },
      {
        id: 'CN-2019-1973788',
        type: '标准级',
        catagory: '办公用品',
        sub_catagory: '笔记本',
        sales: '15.44',
      },
      {
        id: 'CN-2019-1973788',
        type: '标准级',
        catagory: '办公用品',
        sub_catagory: '马克笔',
        sales: '5',
      },
      {
        id: 'CN-2019-1973788',
        type: '标准级',
        catagory: '办公用品',
        sub_catagory: '印泥',
        sales: '12',
      },
    ],
    autoFillWidth: true
  }
  console.log(tableRef.value)
  const tableInstance = new VTable.ListTable(tableRef.value, option)
})
</script>
<style scoped></style>
