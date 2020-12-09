<template>
  <div>
    父组件
    <child name1="yanmingshuang"
           :name2="name2"
           @myevent="handleZichuanfu"></child>
    <div>{{fuchuanzi}}</div>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import child from './07-子传父'
export default {
  components: {
    child
  },
  setup () {
    const state = reactive({
      name2: 'meikai',
      fuchuanzi: ''
    })
    const handleZichuanfu = () => {
      state.fuchuanzi = '子传父的事件触发啦！！！'
    }
    return {
      ...toRefs(state),
      handleZichuanfu
    }
  }
}
</script>
