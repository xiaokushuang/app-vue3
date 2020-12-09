<template>
  <div>
    {{name}}
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  setup () {
    const state = reactive({
      name: '123',
      age: 12
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
