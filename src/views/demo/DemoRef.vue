<!--
 * @Description: 柱形图
 * @Author: ZY
 * @Date: 2021-01-08 19:24:26
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-15 09:06:21
-->
<template>
  <div class="chart-container">
    <div>
      {{ count }}
      <button @click="addCount">
        +1
      </button>
    </div>
    <div>
      {{ count2 }}
      {{ count2.a }}
      <button @click="addCount2">
        +1
      </button>
    </div>
    <div>
      {{ count3.a }}
      {{ count3AsRefs.a.value }}
      <button @click="addCount3">
        +1
      </button>
    </div>
  </div>
</template>

<script lang="ts"  setup>
import { ref, reactive, toRef, toRefs } from 'vue'
// ref
const count = ref(1)
const addCount = () => {
  count.value++
}
// toRef
const count2 = ref({
  a: 1,
  b: 2
})
const a = toRef(count2.value, 'a')
const addCount2 = () => {
  a.value++
}
// toRefs
const count3 = reactive({
  a: 1,
  b: 2
})
const count3AsRefs = toRefs(count3)
const addCount3 = () => {
  count3AsRefs.a.value++
}

</script>

<style lang="scss" scoped>
.chart-container {
  position: relative;
  width: 100%;
  padding: 20px;
  height: calc(100vh - 84px);
}
</style>
