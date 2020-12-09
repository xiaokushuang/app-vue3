<template>
  <div>
    watch
    <input type="text"
           v-model="refName">
    <input type="text"
           v-model="reactiveName">
  </div>
</template>
<script>
import { ref, reactive, toRefs, watch } from 'vue'
export default {
  setup () {
    const refName = ref('')
    const state = reactive({
      reactiveName: ''
    })
    // ref 写法的变量-->这样使用watch 传参
    watch(refName, () => {
      console.log('111', refName.value)
    })
    // reactive 写法的变量-->这样使用watch 传参
    watch(() => state.reactiveName, () => {
      console.log('222', state.reactiveName)
    })
    return {
      refName,
      ...toRefs(state)
    }
  }
}
</script>
