<!--
 * @Description: 柱形图
 * @Author: ZY
 * @Date: 2021-01-08 19:24:26
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-15 09:06:21
-->
<template>
  <div class="chart-container">
    <button @click="resultFn">
      点击
    </button>
    <div>{{ a }}</div>
    <!-- <button @click="cancelSearch">取消</button> -->
  </div>
</template>

<script lang="ts" setup>
import { debounce } from './debouce'
import { ref, reactive } from 'vue'
const a = ref(1)
const getSearch = () => {
  a.value = a.value + 1
  console.log(a.value)
}
const resultFn = debounce(getSearch, 1500)

</script>

<style lang="scss" scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
