<!--
 * @Description: 柱形图
 * @Author: ZY
 * @Date: 2021-01-08 19:24:26
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-15 09:06:21
-->
<template>
  <div class="chart-container">
    <button @click="add(2)">
      点击
    </button>
    <div>{{ combinedArray }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
// 数组展开
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combinedArray = ref([...arr1, ...arr2])
// 增加
const add = (a) => {
  combinedArray.value = a
}
// reduce
const sum = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}
//  ...arg  arg

</script>

<style lang="scss" scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
