<template>
  <div>
    子组件{{name1}}--{{name2}}--{{text}}
    <button @click="handleClick">点击触发子传父事件</button>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  props: ['name1', 'name2'],
  setup (props, { emit }) {
    const text = ref(props.name1 + '***' + props.name2)
    const handleClick = () => {
      emit('myevent')
    }
    return {
      text,
      handleClick
    }
  }
}
</script>
