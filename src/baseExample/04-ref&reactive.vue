<template>
  <div>
    <button @click="handleJian">-</button>
    {{count}}-----{{state.count}}
    <button @click="handleAdd">+</button>
  </div>
</template>
<script>
import { reactive } from 'vue'
import { countUse } from './hooks/count'
export default {
  setup () {
    console.log(countUse())
    const { count, handleJian, handleAdd } = countUse()
    const state = reactive({
      name: 'xiaoshuang',
      age: '23',
      count
    })
    // const count = ref(0)
    // const handleJian = () => {
    //   count.value--
    // }
    // const handleAdd = () => {
    //   count.value++
    // }
    return {
      state,
      count,
      handleJian,
      handleAdd
    }
  }

}
</script>
