<template>
  <div>
    <input ref="textRef"
           type="text"
           v-model="state.name">
    <div>{{state.name}}</div>
    <button @click="handleAdd()">add</button>
  </div>
</template>
<script>
import { reactive, ref } from 'vue'
export default {
  setup () {
    const state = reactive({
      name: ''
    })
    const textRef = ref('')
    const handleAdd = () => {
      console.log(textRef)
    }
    return {
      state,
      handleAdd,
      textRef
    }
  }

}
</script>
