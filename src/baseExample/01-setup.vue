<template>
  <div>{{state1.name}}--{{state1.age}}--{{str}}</div>
  <button @click="handleClickBtn()">点击按钮</button>
  <div>vue3可以存在兄弟节点啦！！！</div>
</template>
<script>
// 从vue中引入的一个响应式的函数
import { reactive } from 'vue'
export default {
  setup () {
    console.log('setu11p')
    const state1 = reactive({
      name: 'xiaoshuang',
      age: 23
    })
    const str1 = reactive('这是一个字符串')
    const handleClickBtn = () => {
      state1.name = 'xiaokai'
      state1.age = '24'
    }
    return {
      state1,
      str1,
      handleClickBtn
    }
  }
}
</script>
